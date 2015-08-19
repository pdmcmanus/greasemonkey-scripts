// ==UserScript==
// @name        Daily Heil Exterminator
// @namespace   boingboing
// @description Removes links to the Daily Mail in boingboing articles, because, seriously, why?
// @include     http://boingboing.net/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.js
// @version     1
// @grant       none
// ==/UserScript==
$(document).ready(function() {
  $('a[href*="dailymail"]').attr('href', "").append('<sup>*</sup>');
  if ($('a[href*="dailymail"]')) {
      $('.post-content').append("*[For the good of humanity the link to the source \
                                of this story has been removed]");
  }
});
