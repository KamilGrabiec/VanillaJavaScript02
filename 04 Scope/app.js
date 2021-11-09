// Global scope vs Local Scope (no ES6)
// Global scope
// Any variable available outside code block {} is called Global Scope
// can be access anywhere in the program

let name1 = 'Bobo'; // let declare variable as global
name1 = 'Peter';

function calculate() {
  // some other code ...
  console.log(name1);
  name1 = 'orange';
}

calculate();
console.log(`my name is ${name1} and I'm awesome`);

if (true) {
  console.log(name1);
  name1 = 'pants';
}

console.log(`my name is ${name1} and I'm awesome`);

// local scope
// available only withing code block {}

let name2 = 'Peter';

function calculate2() {
  let name3 = 'Apple';
  const name2 = 'Bryan';
  console.log(name2);
  becomesGlobal = 'global variable'; // because we have not use key word (const/let)
}

calculate2();
console.log(name2);
console.log(becomesGlobal);
//console.log(name3);

// Variable lookup
// {} - code block

const globalNumber = 5;
if (true) {
  const localNumber = 4;
}

function add(num1, num2) {
  const globalNumber = 10;
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const multiplyResult = result * globalNumber;
    console.log(globalNumber);
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
