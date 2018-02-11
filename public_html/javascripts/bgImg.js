/**
 * This file is for loading the background images for my own website.
 * 
 * @author Hervey Hall<mail@herveyhall.cf>
 */

// 抓取必应每日图片"https://www.bing.com/HPImageArchive.aspx?n=1&format=js"
var cbfunc = function(json) {
	_['bingImageUrl'] = "https://www.bing.com"
			+ json.query.results.images.image.url;
}