//1
let array = [10, 5, 13, 18, 51];
array.forEach(a => console.log(a));

//2
let array2 = array.map(a=>a*2);
//array2.forEach(a => console.log(a));

//3
function third() {
    return array.filter(a => a%2==0);
}

// console.log();
// array.forEach(a => console.log(a));

//4
function fourth(arr) {
    if (arr.filter(a => a < 10).length == 0) {
        return false;
    }
    return true;
}
console.log(fourth(array));
console.log(fourth(array2));

//5
function fifth() {
    return array.filter(a => a % 3 == 0);
}
console.log(fifth());

//6
function six() {
    return array.reduce((a, b) => a + b, 0);
}
console.log(six());

//7
function seven() {
    return array.slice(array.length - 2, array.length);
}
console.log(seven());

