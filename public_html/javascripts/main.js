/**
 * This file is the main script for loading my own website.
 * 
 * @author Hervey Hall<mail@herveyhall.cf>
 */

var counter_subtitle = 0;
var counter_bgColor = 0;
function showSubTitle() {
	var subtitle_string = "In the world of code, everyone is the god.";
	document.getElementById('sub_title').innerHTML += subtitle_string
			.charAt(counter_subtitle);
	if (counter_subtitle++ > subtitle_string.length) {
		counter_subtitle = 0;
		document.getElementById("sub_title").innerHTML = "";
	}
}
function showInserter() {
	document.getElementById("cursor").innerHTML = "█";
	setTimeout("document.getElementById('cursor').innerHTML='_';", 500);
}

this.onload = function() {
	// this.showTitle();
	this.setInterval("showSubTitle();", 300);
	this.setInterval("showInserter();", 1000);
	document.getElementById("bg").src = bingImageUrl;
	// 页面加载完成，设置div#content为透明
	document.getElementById("content").style.opacity = 0.3;
}