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
	_['showInserter'] = function() {
		document.getElementById("cursor").innerHTML = "█";
		setTimeout("document.getElementById('cursor').innerHTML='_';", 500);
	}
})();

this.onload = function() {
	// this.showTitle();
	this.setInterval("_.showSubTitle();", 300);
	this.setInterval("_.showInserter();", 1000);
	var canvasBg = document.createElement("canvas");
	if (canvasBg.getContext) {
		_['canvasProperties'] = {};
		canvasBg.width = '1000';
		canvasBg.height = '1000';
		canvasBg.id = "bg-canvas"
		document.getElementsByTagName("body").item(0).appendChild(canvasBg);
		_['canvasProperties']['context'] = canvasBg.getContext("2d");
		_['canvasProperties']['bgImgs'] = [];
		_['imgLoaderProperties'] = {};
		_['imgLoaderProperties']['loadedImgCount'] = 0;
		for (var i = 0; i < _.bingImageUrls.length; ++i) {
			_.canvasProperties.bgImgs[i] = new Image();
			_.canvasProperties.bgImgs[i].src = _.bingImageUrls[i];
			_.canvasProperties.bgImgs[i].onload = function() {
				++_['imgLoaderProperties']['loadedImgCount'];
				console.log(_['imgLoaderProperties']['loadedImgCount']);
			}
		}
		_['canvasProperties']['currentImg'] = 0;
		_['canvasBgScroll'] = function() {
			_.canvasProperties.context.clearRect(0, 0, canvasBg.width,
					canvasBg.height);
			_.canvasProperties.currentImg = _.canvasProperties.currentImg < _.canvasProperties.bgImgs.length ? _.canvasProperties.currentImg
					: 0;
			console.log(_.canvasProperties.currentImg,
					_.canvasProperties.bgImgs[_.canvasProperties.currentImg]);
			_.canvasProperties.context.drawImage(
					_.canvasProperties.bgImgs[_.canvasProperties.currentImg++],
					0, 0, canvasBg.width, canvasBg.height);
		}
		_['imgLoaderProperties']['time'] = 0;
		_['imgLoaderProperties']['maxTime'] = 60000;
		_['imgLoaderProperties']['intervalLength'] = 100;
		_['imgLoaderProperties']['intervalID'] = this
				.setInterval(
						"(function() {if (_.imgLoaderProperties.loadedImgCount == _['canvasProperties']['bgImgs'].length && _.imgLoaderProperties.time < _.imgLoaderProperties.maxTime) {_.canvasBgScroll(); this.setInterval('_.canvasBgScroll();', 2000); clearInterval(_.imgLoaderProperties.intervalID); _.imgLoaderProperties = undefined;} else {_['imgLoaderProperties']['time'] += _.imgLoaderProperties.intervalLength;}})();",
						_.imgLoaderProperties.intervalLength);
	} else {
		document.getElementById("bg").src = _.bingImageUrls[0];
	}
	// 页面加载完成，设置div#content为透明
	document.getElementById("content").style.opacity = 0.3;
}