
var counter_title=0;
var counter_subtitle=0;
var counter_bgColor=0;
function showTitle(){
	var title_string="Hervey Hall 的个人首页";
	var title_colors=["green","yellow","blue","red"];
	var title="";
	for(var i=0;i<title_string.length;i++)
		title+="<span style='color:"+title_colors[(i+counter_title)%title_colors.length]+"'>"+title_string.charAt(i)+"</span>";
	title_content.innerHTML=title;
	document.getElementById("title_content").innerHTML=title;
	counter_title++;
}
function showSubTitle(){
	var subtitle_string="In the world of code, everyone is the god.";
	document.getElementById('subtitle_content').innerHTML+=subtitle_string.charAt(counter_subtitle);
	if(counter_subtitle++>subtitle_string.length){
		counter_subtitle=0;
		document.getElementById("subtitle_content").innerHTML="";
	}
}
function showInserter(){
	document.getElementById("cursor").innerHTML="█";
	setTimeout("document.getElementById('cursor').innerHTML='_';",500);
}

this.onload=function(){
	this.showTitle();
	this.setInterval("showTitle();",1000);
	this.setInterval("showSubTitle();",300);
	this.setInterval("showInserter();",1000);
	//页面加载完成，设置div#content为透明
	document.getElementById("content").style.opacity = 0.8;
}
//var url="https://www.bing.com/HPImageArchive.aspx?n=1&format=js";