document.getElementById('part-modals').innerHTML = `
  <div id="hiddenToggles" style="display:none">
    <button id="toggleOnion" type="button">Onion: Off</button>
    <label><input id="tlTransparency" type="checkbox"> Trans</label>
  </div>

  <input id="loadFileInp" type="file" accept=".json,application/json"
    style="position:fixed; left:-9999px; width:1px; height:1px; opacity:0;" />

  <div id="onionOptionsStash" aria-hidden="true">
    <div id="onionOptionsBlock">
      <div class="subhead">Onion Options</div>

      <div class="row">
        <label for="onionPrevColor">Prev tint</label>
        <input id="onionPrevColor" type="color" value="#4080ff" />
      </div>

      <div class="row">
        <label for="onionNextColor">Next tint</label>
        <input id="onionNextColor" type="color" value="#40ff78" />
      </div>

      <div class="rangeRow">
        <label for="onionAlpha">Opacity</label>
        <input id="onionAlpha" min="5" max="80" type="range" value="50" />
        <span class="val" id="onionAlphaVal">50</span>%
      </div>

      <div class="row">
        <label class="chip"><input id="keepOnionPlaying" type="checkbox" /> Keep onion on play</label>
        <label class="chip"><input id="keepTransPlaying" type="checkbox" /> Keep transparency on play</label>
      </div>

      <button id="toggleTransparency">Transparency: Off</button>
    </div>
  </div>

  <div id="onionCtxMenu" aria-hidden="true"></div>

  <div id="clearAllModalBackdrop" class="modalBackdrop" hidden></div>
  <div id="clearAllModal" class="modalCard" role="dialog" aria-modal="true" aria-labelledby="clearAllModalTitle" hidden>
    <h3 id="clearAllModalTitle">Clear All</h3>
    <p>This will clear all frames and layers and reset undo history.</p>
    <div class="modalActions">
      <button id="clearAllCancelBtn" type="button">Cancel</button>
      <button id="clearAllConfirmBtn" type="button" class="danger">Clear</button>
    </div>
  </div>
`;
