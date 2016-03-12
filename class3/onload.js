var img = document.getElementById("img");
img.onload = function() {
    alert("The image has been loaded");
}
var code = document.getElementById("code");
code.onload = function() {
    alert("The script code has been loaded");
}
window.onload = function() {
    alert("the web page has been loaded");
}


