// ==UserScript==
// @name        Jobsearch
// @namespace   jobcentre
// @include     https://jobsearch.direct.gov.uk/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.js
// @version     1
// @grant       none
// @description	Adds filters to Universal Jobmatch site to improve searching
// ==/UserScript==


$(document).ready(function() {

	$.expr[":"].contains = $.expr.createPseudo(function(arg) {
		return function( elem ) {
			return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});
	/* Enter keywords to block from job titles here, seperated by commas
	/*  eg: var keywords = ['nurse', 'doctor', 'barrister']; */
	
	var keywords = [ ];

	for(var i = 0; i < keywords.length; i++) {
		var barbaba = keywords[i];
		$("td:contains("+barbaba+")").parents('tr').hide();
		$("td:contains("+barbaba+")").parents('tr').css({ "background-color": "#ffc17f",
															"padding": "0"});
		$("td:contains("+barbaba+")").parents('tr').addClass( "hiddenJob" );
	}
    
	$('.JSresults').parent().prepend(
		'<button class="hiddenResults">show hidden</button>'
	);
  
	$('.hiddenResults').on('click', function() {
		$(".hiddenJob").fadeToggle(500);
		return false;
	});
});