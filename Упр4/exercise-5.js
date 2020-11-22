var titleElements = document.getElementsByTagName("title");
var pElements = document.getElementsByTagName("P");
var headertitleElements = document.getElementsByClassName("headertitle");

function func1(sColor1, sColor2) {
    titleElements[0].innerHTML = pElements.length + " параграфа, " + headertitleElements.length + " елемента с клас <headertitle>"

    for (var i = 0; i < pElements.length; i++) {
        pElements[i].style.backgroundColor = sColor1;
    }

    for (var i = 0; i < headertitleElements.length; i++) {
        headertitleElements[i].style.backgroundColor = sColor2;
    }
}

func1("blue","red");

