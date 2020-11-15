//1
let array = [new Date()];
console.log(array);

//2
array = array.concat([new Date(2018,11,8,21,0)]);
console.log(array);

let arrayString = array.map(a => a.toLocaleDateString("bg-BG").split(" ")[0]);
console.log(arrayString);

//3
function three() {
    return array.map(a => {
        let currentDate = new Date(a.getFullYear(), a.getMonth() + 1, 1);
        currentDate.setDate(currentDate.getDate() - 1);
        return [currentDate.getDate(), a.getDay()];
    });
}
let array2 = three();
console.log(array2);


//4
const days = [
    "неделя",
    "понеделник", 
    "вторник", 
    "сряда",
    "четвъртък",
    "петък",
    "събота"
]

function four() {
    return arrayString.map((a,i) => 
    "Дата: " + a 
    + ", час: " + array[i].toLocaleTimeString("bg-BG") 
    + ", " + days[array[i].getDay()] +
    ", " + array2[i][0] + " дни"
    
    );
}
console.log(four());