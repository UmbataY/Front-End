// Условие:
// 		Да се създаде клас Item с две свойства - име и отстъпка (в проценти).
// 		Нека основната цена е 1000 и тя се връща от метод на прототипа.
// 		Създайте метод на инстанцията, който изчислява цената, базирано на основната цена,
// 		прилагайги към нея дадената отстъпка.

class Item {
    name;
    price = 1000;
    discount;
    constructor(name, discount) {
      this.name = name;
      this.discount = discount;
    }

    calcPrice() {
        return this.price - ((this.price * this.discount)/100);
    }

    getPrice() {
        return this.price;
    }
}

var item1 = new Item("Apple", 10);
var item2 = new Item("Pear", 23);
console.log(item1.name + " " + item1.calcPrice());
console.log(item2.name + " " + item2.calcPrice());