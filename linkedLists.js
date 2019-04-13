let uniqueKey = 0;
function generateKey() {
  uniqueKey++;
  return uniqueKey;
}
class ListElement {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.key = generateKey();
  }
}
class LinkedList {
  constructor() {
    this.head = null; // first element of list
    this.tail = null; //ogon - last element of list
  }
  add(listElement) {
    if (this.head === null) {
      this.head = listElement;
      this.tail = listElement;
    } else {
      this.tail.next = listElement;
      this.tail = listElement;
    }
  }
  find(data) {
    let foundElement;
    let element;
    do {
      element = element ? element.next : this.head; //ternary operator = is element.next is exists then element.next will be saved in element otherwise this,head will be saved in element
      if (data === element.data) {
        foundElement = element;
        break;
      }
    } while (element.next !== null);

    return foundElement;
  }
}
let newList = new LinkedList();
let bobElement = new ListElement("bob");
let joeElement = new ListElement("joe");
let markElement = new ListElement("mark");
let garyElement = new ListElement("gary");
let barbElement = new ListElement("barb");
let lucyElement = new ListElement("lucy");
newList.add(joeElement);
newList.add(bobElement);
newList.add(markElement);
newList.add(garyElement);
newList.add(barbElement);
newList.add(lucyElement);

let found = newList.find(barbElement.data);
console.log(found);
console.log(found.next);
