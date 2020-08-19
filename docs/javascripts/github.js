/**
 * This file is for redirecting to my domain from GitHub Pages for my own website.
 * 
 * @author Hervey Hall<herveyhall@foxmail.com>
 */
(function () {
	if(!location || !location.host) {
		return;
	}
	if ('herveyhall.github.io' != location.host) {
		return;
	}
	sendRequest("GET", conf['githubCname'], (function(request){
		sendRequest('GET', request.responseText+'/githubpages.html' ,function(){
			location.href = request.responseText+'/index.html';
		});
	}));
})();