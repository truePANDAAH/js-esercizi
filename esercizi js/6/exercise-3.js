function adultFilter(persons) {
  let lung= persons.length ;
  const adultsArray = [];
  for(let i = 0 ; i < lung ; i++){
    if (persons[i].age >= 18) {
      adultsArray.push(persons[i].name);
    }
  }
  return adultsArray 
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);