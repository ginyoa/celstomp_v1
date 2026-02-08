document.getElementById('part-header').innerHTML = `
  <header class="top">
    <div class="topSlot left"></div>

    <div class="brand">
      <span class="brandIcon brandIconL" aria-hidden="true"></span>
      <span class="brandText">CELSTOMP</span>
      <span class="brandIcon brandIconR" aria-hidden="true"></span>
    </div>

    <div class="topSlot right">
      <button id="infoBtn" class="topBtn" type="button" aria-controls="infoPanel" aria-expanded="false" title="Info">
        ℹ︎ Info
      </button>
    </div>
  </header>


  <div id="infoBackdrop" class="infoBackdrop" hidden></div>

  <aside id="infoPanel" class="infoPanel" aria-hidden="true" tabindex="-1">
    <div class="infoHeader">
      <div class="infoTitle">Celstomp Info</div>

    </div>

    <div class="infoBody">
      <p class="infoText">
        Cel animation online or offline!
      </p>

      <div class="infoBtns">

        <a class="infoLinkBtn" href="https://ko-fi.com/ginyoa" target="_blank" rel="noopener">Support me on Kofi!</a>
        <a class="infoLinkBtn" href="https://instagram.com/ginyoagoldie" target="_blank" rel="noopener">Instagram</a>
        <a class="infoLinkBtn" href="https://x.com/ginyoagoldie" target="_blank" rel="noopener">Twitter</a>
      </div>

      <hr class="infoHr" />

      <h3 class="infoH3">About Celstomp</h3>
      <ul class="infoList">


        <li>This site is vibecoded (coded with the help of AI). I am by no means in any way a traditional programmer, I
          had just wanted to make animation more accessible and intuitive!</li>


        <li>Its limited to a simple pixel brush and a simple layer system</li>

        <li>Shortcuts: 1, 2, 3, 4, 5, 6 for the Tools</li>
        <li>Up/Down or Q/W for Prev/Next Cel</li>
        <li>Left/Right or E/R for Prev/Next Frame</li>
        <li>You can drag the colored squares in the layer to reorder the layering of it</li>



        <li>Right click on some of the tools + onion skin to reveal more settings</li>
      </ul>
    </div>
  </aside>
`;
