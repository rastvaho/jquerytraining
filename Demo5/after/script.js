// ==UserScript==
// @name         My Demo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:63342/jquery/Demo5/*
// @grant         GM_setClipboard
// @grant         GM_addStyle


// @require http://code.jquery.com/jquery-3.4.1.min.js

// ==/UserScript==

(function () {
  'use strict';

  $('.headline').html('my demo page');
  let link = $('#main-content a');
  link.after("<button class='js-copy-link'>Copy Link</button>");


  $('.js-copy-link').on('click', function () {
    link.addClass('test');
    let href = link.prop('href');
    //console.log(href);

    GM_setClipboard(href);
  });


  GM_addStyle(`

headline {
    color: red;
}

.test {
    color: blue;
    font-weight: bold;
}
`);
})();