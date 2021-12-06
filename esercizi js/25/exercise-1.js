const person = {
  get fullName(){
    return `${person.firstName}${person.lastName}`;
  },
  set fullName (value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

const john = {
  firstName: person.firstName = 'John',
  lastName: person.lastName = 'Doe',
  fullName: person.fullName(),
}

const simon = {
  firstName: person.firstName = 'Simon',
  lastName: person.lastName = 'Collins',
  fullName: person.fullName(),
}


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins 