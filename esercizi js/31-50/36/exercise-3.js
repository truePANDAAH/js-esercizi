class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(objLiteral) {
    return {
      get firstName() {
        return objLiteral.firstName;
      },
      set firstName(objLiteral) {
        this._firstName = objLiteral.firstName;
      },
    
      get lastName() {
        return objLiteral.lastName;
      },
      set lastName(objLiteral) {
        this._lastName = objLiteral.lastName;
      }
    }

  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);