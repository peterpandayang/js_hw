var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", getHandler(i));
}

function getHandler(i) {
    return function() {
        alert("You clicked Button " + i);
    };
}