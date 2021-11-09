// Reference vs Value
// Primitive data types

//when assiginig primitive data type value to a variable any changes are made directly to the value, without effecting orignal value

//when assigning non-primitive data type value to a variable is done by reference so any changes will effect all the references.

const number = 1;
let number2 = number;
number2 = 8;

console.log(`first value is ${number}, the second value is ${number2}`);

// example of assigning value non-primitive data type (person is an object)
let person1 = { name: 'bob' };
let person2 = person1; //this assigne reference to the person2 name parameter
console.log(
  `the name of first person is ${person1.name} and the name of second person is ${person2.name}`
);
person2.name = 'suzy'; //here person1 name has also been changed because 'suzy' value is pass to the reference

console.log(
  `the name of first person is ${person1.name} and the name of second person is ${person2.name}`
);

// Null and Undefined (both mean "no value")
// undefined - "javascript can not find value"

// variable without initial value
// missing function arguments
// missing object properties

// null - "developer sets the value to be no value"

let number3 = 20 + null;
console.log(number3);

let number4 = 30 + undefined;
console.log(number4);

// Truthy and Falsy
// "", '', ``, 0 -0, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

if (bool1) {
  console.log('It work');
}
if (bool2) {
  console.log('It works too!');
}

const text1 = 'Bob';
const text2 = '';

if (text1) {
  console.log('String with value is treat as Truthy');
}
if (!text2) {
  console.log('But empty sting is treated as Falsy');
}

// ternary operator

const value = 1 < 0; // mean value is false

value ? console.log('value is true') : console.log('value is false');
// the same as:
//  if(valye) {
//    console.log('value is true')
// } else {
//   console.log('value is false')
// }
