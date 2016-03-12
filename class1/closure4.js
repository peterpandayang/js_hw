var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (function(index){
        return function() {
            alert("You cicked Button " + index);
        }
    })(i));
}