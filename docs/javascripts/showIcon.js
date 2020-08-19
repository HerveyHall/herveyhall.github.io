/** 
* This file is for loading the icons of other link for my own website. 
*
* @author Hervey Hall<herveyhall@foxmail.com>
*/

var imgs=document.getElementsByTagName("img");
for(var i=0;i<imgs.length;++i){
  imgs[i].onmouseover=function(){
    this.className="";
  }
  imgs[i].onmouseout=function(){
    this.className=".ico";
  }
}