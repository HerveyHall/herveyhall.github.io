/** 

* This file is for viewing my wechat QR code. 

*

* @author Hervey Hall<herveyhall@foxmail.com>

*/

var wechat = document.getElementsByClassName('titles')[0].getElementsByTagName('section')[0].getElementsByTagName('a')[6];

wechat.onmouseover = function () {

    setTimeout("document.getElementById('wechat').style.display = 'block'", 0);

}

wechat.onmouseout = function () {

    setTimeout("document.getElementById('wechat').style.display = 'none'", 0);

}

