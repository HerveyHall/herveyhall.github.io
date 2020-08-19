/**
 * This file is for loading the background images for my own website.
 * 
 * @author Hervey Hall<herveyhall@foxmail.com>
 */

// 抓取必应每日图片"https://www.bing.com/HPImageArchive.aspx?n=1&format=js"
var cbfunc = function(json) {
	var urlArr = json.images;
	_['bingImageUrls'] = [];
	for (var i = 0; i < urlArr.length; ++i) {
		_['bingImageUrls'][i] = "https://www.bing.com"
				+ json.images[i].url;
	}
}