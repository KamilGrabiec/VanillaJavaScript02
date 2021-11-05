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
