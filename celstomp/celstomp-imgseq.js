(() => {
  "use strict";

  const fallbackClamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const fallbackSleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

  function timestampSlug(d = new Date()) {
    const p2 = (n) => String(n).padStart(2, "0");
    return (
      d.getFullYear() + p2(d.getMonth() + 1) + p2(d.getDate()) + "_" +
      p2(d.getHours()) + p2(d.getMinutes()) + p2(d.getSeconds())
    );
  }

  function canvasToPngBlob(canvas) {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error("toBlob returned null"));
      }, "image/png");
    });
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  async function pickDirectoryHandle() {
    if (!window.isSecureContext) {
      throw new Error("IMG SEQ export requires HTTPS (secure context).");
    }
    if (!window.showDirectoryPicker) {
      throw new Error("Folder picker not supported (use Chrome/Edge/Opera desktop).");
    }
    try {
      return await window.showDirectoryPicker({ mode: "readwrite", startIn: "downloads" });
    } catch {
      return await window.showDirectoryPicker({ mode: "readwrite" });
    }
  }

  function createExporter({
    getState,
    drawFrameTo,
    withExportOverridesAsync,
    clamp = fallbackClamp,
    sleep = fallbackSleep,
  } = {}) {
    if (typeof getState !== "function") throw new Error("createExporter: getState is required");
    if (typeof drawFrameTo !== "function") throw new Error("createExporter: drawFrameTo is required");
    if (typeof withExportOverridesAsync !== "function") {
      throw new Error("createExporter: withExportOverridesAsync is required");
    }

    async function handleClick(event, button) {
      event?.preventDefault?.();
      event?.stopPropagation?.();

      if (!button) return;

      const oldText = button.textContent;
      button.disabled = true;

      const transparent = !!event?.altKey;
      const fullRange = !!event?.shiftKey;

      let baseDir;
      try {
        baseDir = await pickDirectoryHandle();
      } catch (err) {
        const msg = String(err?.message || err || "");
        const canceled = err?.name === "AbortError" || err?.name === "NotAllowedError";
        if (!canceled) {
          alert("IMG SEQ export failed:\n" + msg);
        }
        button.disabled = false;
        button.textContent = oldText;
        return;
      }

      const state = getState();
      const fps = Math.max(1, Number(state.fps) || 24);
      const seconds = Math.max(1, Number(state.seconds) || 1);
      const totalFrames = (Number(state.totalFrames) > 0) ? Number(state.totalFrames) : fps * seconds;
      const maxFrame = Math.max(0, totalFrames - 1);

      const start = fullRange
        ? 0
        : clamp((Number(state.clipStart) || 0) | 0, 0, maxFrame);
      const end = fullRange
        ? maxFrame
        : clamp((Number(state.clipEnd) || 0) | 0, start, maxFrame);

      const count = end - start + 1;
      const folderName =
        `celstomp_pngseq_${fps}fps_${String(start + 1).padStart(4, "0")}-${String(end + 1).padStart(4, "0")}_${timestampSlug()}`;

      let dir = baseDir;
      try {
        dir = await baseDir.getDirectoryHandle(folderName, { create: true });
      } catch {
        dir = baseDir;
      }

      const canvas = document.createElement("canvas");
      canvas.width = Number(state.contentW) || 1;
      canvas.height = Number(state.contentH) || 1;

      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) {
        alert("IMG SEQ export failed: could not create render context.");
        button.disabled = false;
        button.textContent = oldText;
        return;
      }

      ctx.imageSmoothingEnabled = !!state.antiAlias;

      try {
        button.textContent = "Exporting... 0%";

        await withExportOverridesAsync(async () => {
          for (let frame = start; frame <= end; frame++) {
            await drawFrameTo(ctx, frame, { forceHoldOff: true, transparent });

            const blob = await canvasToPngBlob(canvas);
            const filename = `frame_${String(frame - start).padStart(4, "0")}.png`;

            if (dir && typeof dir.getFileHandle === "function") {
              const fileHandle = await dir.getFileHandle(filename, { create: true });
              const writable = await fileHandle.createWritable();
              await writable.write(blob);
              await writable.close();
            } else {
              downloadBlob(blob, filename);
              await sleep(60);
            }

            const done = frame - start + 1;
            if ((done % 2) === 0 || done === count) {
              button.textContent = `Exporting... ${Math.round((done / count) * 100)}%`;
              await sleep(0);
            }
          }
        });

        alert(`PNG sequence exported.\nFolder: ${folderName}\nFrames: ${start + 1}-${end + 1} (${count})`);
      } catch (err) {
        alert("IMG SEQ export failed.\n" + String(err?.message || err));
      } finally {
        button.disabled = false;
        button.textContent = oldText;
      }
    }

    function wire(button) {
      if (!button) return;
      if (button.dataset.imgSeqWired === "1") return;
      button.dataset.imgSeqWired = "1";
      button.addEventListener("click", (event) => {
        void handleClick(event, button);
      });
    }

    return { wire, handleClick };
  }

  window.CelstompImgSeqExport = { createExporter };
})();
