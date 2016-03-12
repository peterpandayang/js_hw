window.onload = function() {
    var rbtnaddtop = document.getElementById("rbtnaddtop"),
        rbtnaddbot = document.getElementById("rbtnaddbot"),
        rbtnrmvtop = document.getElementById("rbtnrmvtop"),
        rbtnrmvbot = document.getElementById("rbtnrmvbot"),
        addbtn = document.getElementById("addbtn"),
        rmvbtn = document.getElementById("rmvbtn"),
        itemtext = document.getElementById("itemtext"),
        ul = document.getElementById("list");
        p = document.getElementById("hint");
        
    function initialize() {
        rbtnaddtop.setAttribute("checked", "checked");
        rbtnrmvtop.setAttribute("checked", "checked");
        addbtn.disabled = true;
        disableRemoveSection(true);
        itemtext.oninput = function() {
            addbtn.disabled = this.value === "";
        }
        addbtn.onclick = function(evt) {
            evt.preventDefault();
            addToList(rbtnaddtop.checked, itemtext.value);
            itemtext.value = "";
            itemtext.oninput();
        }
        rmvbtn.onclick = function(evt) {
            evt.preventDefault();
            rmvFromList(rbtnrmvtop.checked);
        }
    }
    
    function disableRemoveSection(disabled) {
        rbtnrmvtop.disabled = disabled;
        rbtnrmvbot.disabled = disabled;
        rmvbtn.disabled = disabled;
    }
    
    function addToList(top, text) {
        if (ul.childElementCount === 0) {
            p.style.display = "none";
            disableRemoveSection(false);
        }
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(text));
        if (top && ul.childElementCount !== 0) {
            ul.insertBefore(li, ul.firstElementChild);
        } else {
            ul.appendChild(li)
        }
    }
    
    function rmvFromList(top) {
        if (top) {
            ul.removeChild(ul.firstElementChild);
        } else {
            ul.removeChild(ul.lastElementChild);
        }
        
        if (ul.childElementCount === 0) {
            p.style.display = "block";
            disableRemoveSection(true);
        }
    }
    
    initialize();
};