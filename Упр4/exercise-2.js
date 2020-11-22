class Person {
    name;
    planet = "Земя";
    constructor(name) {
      this.name = name;
    }
    print() {
        console.log("Здравей " + this.name + " от планетата " + this.planet);
    }
}

var person1 = new Person("Иван");
var person2 = new Person("Мария");
var person3 = new Person("Някой");

person1.print();
person2.print();
person3.print();
