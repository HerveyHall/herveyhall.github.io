/** 
* This file is for loading everything for my own website. 
*
* @author Hervey Hall<mail@herveyhall.cf>
*/

/* The public function for sending HTTP requests. */
var sendRequest=function(method,source,operation){
   var request = new XMLHttpRequest();
   request.open(method,source,true);
   request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
   request.send();
   request.onreadystatechange = function(){
   if(request.readyState===4&&request.status/100===2)
      operation(request);
   }
}﻿

/* Load the content for my own website. */
sendRequest("GET","/documents/content",(function(request){document.getElementById("main").innerHTML=request.responseText;}));

/* Load the copyright information of my own website. */
sendRequest("GET","/documents/copyright",(function(request){document.getElementById("ft").innerHTML=request.responseText;}));

/* Load my wechat QR code. */
sendRequest("GET","/documents/wechat",(function(request){

            //生成link标签放置css样式文件
            var wechat_style = document.createElement("link");
            wechat_style.setAttribute("rel", "stylesheet");
            wechat_style.setAttribute("rev", "wechat");
            wechat_style.setAttribute("type", "text/css");
            wechat_style.setAttribute("href", "stylesheets/wechat.css");
            document.getElementsByTagName("head").item(0).appendChild(wechat_style);

            //动态加载微信二维码
            var wechat_div = document.createElement("div");
            //wechat_div.setAttribute("id", "wechat");
            wechat_div.innerHTML += request.responseText;
            document.getElementsByTagName("body").item(0).appendChild(wechat_div);
            document.getElementById('wechat').style.display = "none";

            wechat_div.onmouseover = function () {
                setTimeout("document.getElementById('wechat').style.display = 'block'", 0);
            }

            wechat_div.onmouseout = function () {
                setTimeout("document.getElementById('wechat').style.display = 'none'", 0);
            }

          }));

/* Show something in the console of my own website. */
if(window.console&&(console.info||console.log)){
  sendRequest("GET","/documents/information",(function(request){    
    if(console.info)
      console.info(request.responseText);
    else
      console.log(request.responseText);
  }));
}