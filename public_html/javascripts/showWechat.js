/** 

* This file is for viewing my wechat QR code. 

*

* @author Hervey Hall<mail@herveyhall.cf>

*/

var wechat = document.getElementById('hd').getElementsByTagName('section')[0].getElementsByTagName('a')[6];

wechat.onmouseover = function () {

    setTimeout("document.getElementById('wechat').style.display = 'block'", 0);

}

wechat.onmouseout = function () {

    setTimeout("document.getElementById('wechat').style.display = 'none'", 0);

}

