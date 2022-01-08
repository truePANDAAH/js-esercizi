const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

// const json = JSON.stringify(person);

// const json = JSON.stringify(person, ['id', 'age']);

function filter (key, value) {
  return (typeof value === 'string' ?  undefined : value)
};

const json = JSON.stringify(person, filter);

console.log(json);