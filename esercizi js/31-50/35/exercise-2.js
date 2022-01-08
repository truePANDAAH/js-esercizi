class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {
  constructor (firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role;
  }
}

const developer = new Developer('Mario', 'Rossi', 'Front-end');
console.log(`${developer.firstName} ${developer.lastName} - ${developer.role}`);
// se usassi solamente il log di developer mi darebbe tutta la classe in stampa