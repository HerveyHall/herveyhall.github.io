/**
 * This file is the main script for loading my own website.
 * 
 * @author Hervey Hall<mail@herveyhall.cf>
 */
var _ = {};
(function() {
	_['counter_subtitle'] = 0;
	_['showSubTitle'] = function() {
		var subtitle_string = "In the world of code, everyone is the god.";
		document.getElementById('sub_title').innerHTML += subtitle_string
				.charAt(_.counter_subtitle);
		if (_.counter_subtitle++ > subtitle_string.length) {
			_.counter_subtitle = 0;
			document.getElementById("sub_title").innerHTML = "";
		}
	}
	_['showInserter'] = function showInserter() {
		document.getElementById("cursor").innerHTML = "█";
		setTimeout("document.getElementById('cursor').innerHTML='_';", 500);
	}
})();

this.onload = function() {
	// this.showTitle();
	this.setInterval("_.showSubTitle();", 300);
	this.setInterval("_.showInserter();", 1000);
	document.getElementById("bg").src = _.bingImageUrl;
	// 页面加载完成，设置div#content为透明
	document.getElementById("content").style.opacity = 0.3;
}