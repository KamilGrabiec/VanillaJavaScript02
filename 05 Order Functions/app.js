//Calback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are firs class objects - stored in a variable (expression), passed as an argument to another function, return from  the function (closure)
//Higher Order function - accepts another function as an argument or returns another function as a result
//Callback Function - passed to a another function as an argument and executed inside that function

//Problem to resolve, create function that greed people depends on day time
//Could be resolved like this, with 4 functions greedMorning(), greedAfternoon() ...
// function greedMorning(name4) {
//   const myName = 'john';
//   console.log(`Good morning ${name4}, my name is ${myName}`);
// }
//greedMorning('bobo');

//Done with callbacks
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternnon ${name.toUpperCase()}`;
}
function night(name) {
  return `Good night ${name.repeat(3)}`;
}

function greed(name, cb) {
  const myName = 'john';
  console.log(`${cb(name)}, my name is ${myName}`);
}

greed('bobo', morning);
greed('peter', night);

//It can be done also like this but it is not a callback function.
//function morning() is executed at the beginning of greed() function when used callback, cb() can be located in any place of Higher Order Function
// function greed(name4, cb) {
//   const myName = 'john';
//   console.log(` ${name4}, my name is ${myName}`);
// }

// greed('bobo', morning());

console.log(`Next chapter`);

//Array Iterrations
//Iterate over array - no for loop required
//forEach, map, filter, find, reduce
//Accept Callback function as an argument, calls Callback agains each item in a array. Reference Item in the Callback Parameter

const number = [0, 1, 2, 3, 4];
const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1 },
  { name: 'suzy', age: 30, position: 'the boss', id: 2 },
  { name: 'peter', age: 47, position: 'designer', id: 3 },
  { name: `anna`, age: 32, position: `QA`, id: 4 },
];
//show all numbers

//with for loop
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

//forEach - does not return new array
console.log(`For Each`);
function showPerson(person) {
  console.log(person);
}
people.forEach(showPerson);

//the same with annonymus function
console.log(`forEach with annonymus function`);
people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});

//map method - it does return new array the same size as original array
console.log(`Map method`);

const ages = people.map(function (person) {
  return person.age + 20;
});

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 15,
    newPosition: person.position,
    newId: person.id,
  };
});
console.log(ages);
console.log(newPeople);

const names = people.map(function (person) {
  return `<h2>${person.name}</h2>`;
});

document.body.innerHTML = names.join('');

console.log(names);

console.log(`Next chapter - Fliter`);
//Filter
// dose return new array
// can manipulate the size of new array
// returns based on condition

const youngPeople = people.filter(function (person) {
  return person.age <= 30;
});

const developers = people.filter(function (person) {
  return person.position === `developer`;
});

console.log(youngPeople);
console.log(developers);

console.log(`Next chapter - find`);
// Find
// returns single instance (in this case object)
// returns first match, if no match then undefined
// great for getting unique value

const person = people.find(function (person) {
  return person.id === 2;
});

console.log(person);
console.log(
  people.find(function (person) {
    return person.name === 'bob';
  })
);
console.log(
  people.find(function (person) {
    return person.name === 'bob';
  }).name
);

//Difference between find and filter. Filter returns array so it is necessary to first point which element of array we access by [i]

const person2 = people.filter(function (person) {
  return person.id === 2;
});

console.log(person2[0].name);

console.log(`Next chapter - reduce`);
//Reduce
// iterates over array, use callback function - as previous
// reduce to a single value, number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people3 = [
  { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
  { name: 'suzy', age: 30, position: 'the boss', id: 2, salary: 300 },
  { name: 'peter', age: 47, position: 'designer', id: 3, salary: 500 },
  { name: `anna`, age: 32, position: `QA`, id: 4, salary: 500 },
];

const total = people3.reduce(function (acc, currItem) {
  console.log(acc);
  console.log(`Total ${acc}`);
  console.log(currItem);
  console.log(`Current money: ${currItem.salary}`);
  acc += currItem.salary;

  return acc;
}, 1000);

console.log(total);
