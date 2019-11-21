// ==UserScript==
// @name         Demo5 jquery and Greasmonkey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:63342/jquery/Demo5/*
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
})();

GM_addStyle(`

  .headline {
  color:red;
  }
`);