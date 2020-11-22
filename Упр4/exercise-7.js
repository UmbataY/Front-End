function swap() {
    var tbody = document.getElementsByTagName("tbody")[0];
    tbody.insertBefore(tbody.childNodes[1] ,tbody.firstChild)
    // elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
}