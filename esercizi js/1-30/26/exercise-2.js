function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john = new Person('John', 'Doe')
const simon = new Person('Simon', 'Collins')

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins