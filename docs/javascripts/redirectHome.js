/** 
* This file is for redirecting to my own website. 
*
* @author Hervey Hall<herveyhall@foxmail.com>
*/

function redir(){
	location.href="http://www.herveyhall.cf/";
}
this.onload=function(){
	this.setTimeout("redir()",5000);
}