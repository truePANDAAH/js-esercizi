const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);

      if(person) {
        resolve (person);
      } else {
        reject(new Error(`${id} doesn't exist`))
      }
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id);

      if(job) {
        resolve (job);
      } else {
        reject(new Error(`${id} is not a valid job id`))
      }
    }, 1000);
  });
}

let idPerson = 3;
let idjob = 5;

Promise.allSettled([
  fetchPersonById(idPerson),
  fetchJobById(idjob)
])
.then((personFind) => console.log(personFind))
.catch((err) => console.log(err));