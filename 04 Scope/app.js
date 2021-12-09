// Global scope vs Local Scope (no ES6)
// Global scope
// Any variable available outside code block {} is called Global Scope
// can be access anywhere in the program

let name1 = "Bobo"; // let declare variable as global
name1 = "Peter";

function calculate() {
  // some other code ...
  console.log(name1);
  name1 = "orange";
}

calculate();
console.log(`my name is ${name1} and I'm awesome`);

if (true) {
  console.log(name1);
  name1 = "pants";
}

console.log(`my name is ${name1} and I'm awesome`);

// local scope
// available only withing code block {}

let name2 = "Peter";

function calculate2() {
  let name3 = "Apple";
  const name2 = "Bryan";
  console.log(name2);
  becomesGlobal = "global variable"; // because we have not use key word (const/let)
}

calculate2(); //Display 'Bryan' because has access to local variable name2
console.log(name2); //Even 'calculate2() function displayed 'Bryan' console.log display 'Peter' because it does not have access to local instance of name2 but use instead global instance of name2
console.log(becomesGlobal); //However, becomesGlobal is global because 1) calculate2() code was already executed 2) becomesGlobal does not have key word so it is treated as global
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
//JS takes the most possible local version of variable so globalNumber is 10 because it is declared inside function (local scope)
console.log(add(3, 4));
