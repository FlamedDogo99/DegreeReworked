// ==UserScript==
// @name         DegreeReworked
// @namespace    https://github.com/FlamedDogo99/DegreeReworked
// @version      0.1.0
// @description  Make Degreeworks look like it used to
// @author       FlamedDogo99
// @match        https://degreeworks.montana.edu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=montana.edu
// @updateURL    https://raw.githubusercontent.com/FlamedDogo99/DegreeReworked/refs/heads/main/userscript/degreereworked.user.js
// @installURL   https://raw.githubusercontent.com/FlamedDogo99/DegreeReworked/refs/heads/main/userscript/degreereworked.user.js
// @downloadURL  https://raw.githubusercontent.com/FlamedDogo99/DegreeReworked/refs/heads/main/userscript/degreereworked.user.js
// ==/UserScript==

(function () {
  "use strict";

  function addStylesheet(css) {
    const style = document.createElement("style");
    style.id = "DegreeReworked Stylesheet";
    style.setAttribute("type", "text/css");
    style.textContent = css;
    (document.body || document.documentElement).appendChild(style);
  }

  addStylesheet(`
//DEGREEREWORKED-STYLE
  `);
})();
