class Person {
  constructor (firstName , lastName , age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age ;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(name) {
    this._firstName = name;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(surname) {
    this._lastName = surname;
  }
  get age() {
    return this._age;
  }
  set age(years) {
    this._age = years;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);