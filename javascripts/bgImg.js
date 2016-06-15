// 抓取必应每日图片
var cbfunc = function(json){
	var u = "https://www.bing.com"+json.query.results.images.image.url;
	document.body.style.backgroundImage = "url("+u+")";
	}