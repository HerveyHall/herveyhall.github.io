/** 
* This file is for providing supports such as public methods for my own website. 
*
* @author Hervey Hall<herveyhall@foxmail.com>
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
}