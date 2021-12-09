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
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'suzy', age: 30, position: 'the boss' },
  { name: 'peter', age: 47, position: 'designer' },
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
