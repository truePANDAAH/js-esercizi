const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

console.log(person1);
person2.firstName = 'simon'

console.log(person2);

// nel momento in cui copiamo un oggetto , stiamo prendendo i valori che 
// esso mantiene in quel preciso momento di vita , se proseguiamo con altre operazioni 
// ed il suo valore muterà , non andrà però a mutare quello copiato in precedenza .
