// ==UserScript==
// @name            Scribd: Bypasser
// @description     At one point in our student life we all need to Google homework solutions, test preparation stuff and everything else somehow related to our academic life. One of the search results is, usually, Scribd.com, where to download the file you either need to upload bunch of documets, or get a monthly subscription. Too lazy? I'm as well. This extension allows you to bypass all that procedure on the Scribd, so you can download everything easily!
// @namespace       http://github.com/frddl/scribd-bypasser
// @version         1.0.0
// @author          Farid Mammadov
// @license         MIT
// @released        2016-12-11
// @updated         2016-12-11
// @match           *://*.scribd.com/document/*
// @match           *://www.scribd.com/document/*
// @run-at          document-end
// ==/UserScript==

window.onload = function () {
	console.log("scribd-bypasser: initializing...");

	document.getElementsByClassName('icon icon-globalnav_upload')[0].style.display = 'none';
	document.getElementsByClassName('icon_btn_text')[1].innerHTML = "Download";

	var URL = "http://d1.scribdassets.com/ScribdViewer.swf?";
	var document_id = "document_id=" + window.location.href.split('/')[4];

	var start = document.getElementsByTagName('script')[16].innerHTML.search("key-");
	var end = document.getElementsByTagName('script')[16].innerHTML.search("\",\"is_searchable");
	var key = document.getElementsByTagName('script')[16].innerHTML.substring(start, end);

	var access_key = "access_key=" + key;

	URL += document_id + "&" + access_key;
	console.log("URL: " + URL);

	document.getElementsByTagName('a')[16].setAttribute("href", URL);
}
