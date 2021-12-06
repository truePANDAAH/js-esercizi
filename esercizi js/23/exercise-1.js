const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys 
// Print values of person using Object.keys

for (let key of Object.keys(person)) {
  console.log(`${key}: ${person[key]}`);
} 