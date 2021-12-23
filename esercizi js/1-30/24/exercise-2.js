const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
for(let x of Object.values(person)){
  console.log(x)
}
// Print values of person using Object.values