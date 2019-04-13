//design pattern is an abstract solution for frequently occuring problem.
//object factory pattern - Idea that objects can be created by dedicated class called Factory intead of creating objects directly.
class Baboon {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let tricksFunctions = {
  hop: function() {
    console.log("hop");
  },
  clap: function() {
    console.log("clap");
  }
};
class BaboonFactory {
  createBaboon(name, age, tricks) {
    let newBaboon = new Baboon(name, age);
    for (let i = 0; i < tricks.length; i++) {
      if (tricks[i] == "hop") {
        newBaboon.hop = tricksFunctions.hop;
      }
      if (tricks[i] == "clap") {
        newBaboon.clap = tricksFunctions.clap;
      }
    }
    return newBaboon;
  }
}
let baboonFactory = new BaboonFactory();
let baboonGeorge = baboonFactory.createBaboon("George", 10, ["hop"]);

baboonGeorge.hop();
