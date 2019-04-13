class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("created new person");
  }
}
let nowak = new PersonClass("Nowak", 20);

let Person = function(name, age) {
  this.name = name;
  this.age = age;
  console.log("created new person");
};
let kowalski = new Person("Kowalski", 20);
let nazwisko = new kowalski.constructor("Nazwisko", 35);
