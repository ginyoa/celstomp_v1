document.getElementById('part-app').innerHTML = `
  <div class="app">
    <main id="stageWrap">
      <div id="stage">
        <div id="brushCursorPreview"></div>

        <canvas id="boundsCanvas"></canvas>
        <canvas id="drawCanvas"></canvas>
        <canvas id="fxCanvas"></canvas>

        <div id="hud">
          <span>Tool: <strong id="toolName">Brush</strong></span>
          <span class="sep"></span>
          <span>FPS: <strong id="hudFps">24</strong></span>
          <span class="sep"></span>
          <span>Frame: <strong id="frameInfo">1 / 120</strong></span>
          <span class="sep"></span>
          <span>Time: <strong id="hudTime">0s+0f</strong></span>
          <span class="sep"></span>
          <span>Zoom: <strong id="zoomInfo">100%</strong></span>
        </div>
      </div>
    </main>

    <div id="floatingIsland" class="islandDock">
      <div class="islandHeader" id="floatingIslandHeader">
        <div class="islandTitle">CELSTOMP</div>
        <div class="islandBtns">
          <button class="islandBtn" id="islandCollapseBtn" title="Collapse">—</button>
          <button id="islandSideBtn" class="islandBtn" title="Side panel" aria-label="Toggle side panel">&gt;</button>
        </div>
      </div>

      <div class="islandBody" id="floatingIslandBody">
        <div class="islandTop">
          <div class="islandPanel islandWheelSlot" id="islandWheelSlot"></div>

          <div id="hsvWheelWrap" class="hsv-wheel">
            <canvas id="hsvWheelCanvas"></canvas>
            <div id="hsvWheelPreview" class="hsv-wheel-preview" title="Current color"></div>
          </div>

          <div class="islandPanel islandToolsSlot" id="islandToolsSlot"></div>

          <div class="seg" id="toolSeg"></div>

        </div>

      </div>
      <div class="islandPanel" id="islandLayersSlot">
        <div class="seg" id="layerSeg" role="tablist" aria-label="Layers"></div>
      </div>
    </div>

    <button id="islandTab" type="button">celstomp</button>
  </div>
`;
