	// Условие:
	// 	Дадена е страницата OpenUI5.html.
	// 	Създайте функция, която приема един 2 параметъра (sColor1, sColor2) и извежда
	// 	броя на всички:
	// 	- <p> тагове
	// 	- всички елементи с клас "headertitle"
	// 	Резултата да се записва в заглавието на текущия прозорец, например "33 параграфа,
	// 	12 елемента с клас <headertitle>"
	// 	В допълнение, за всички намерени <p> елементи, да бъде сменен background-a цвета
	// 	с подадения sColor1, а за елементите, съдържащи клас "headertitle", background
    // 	цвета да е sColor2;
    
    var titleElements = document.getElementsByTagName("title");
    var pElements = document.getElementsByTagName("P");
var headertitleElements = document.getElementsByClassName("headertitle");

function func1(sColor1, sColor2) {
    // console.log(pElements.length);
    // console.log(headertitleElements.length);

    titleElements[0].innerHTML = pElements.length + " параграфа, " + headertitleElements.length + " елемента с клас <headertitle>"

    for (var i = 0; i < pElements.length; i++) {
        pElements[i].style.backgroundColor = sColor1;
    }

    for (var i = 0; i < headertitleElements.length; i++) {
        headertitleElements[i].style.backgroundColor = sColor2;
    }
}

func1("blue","red");

