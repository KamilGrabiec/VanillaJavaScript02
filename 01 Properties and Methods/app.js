//String properties and methods
//wrapper String Object

let text1 = " Peter Jordan";

//Properties
let result = text1.length;
console.log(result);
console.log(text1.length);

//Methods
console.log(text1.toLowerCase());
console.log(text1.toUpperCase());
console.log(text1.charAt(2));
console.log(text1.indexOf("o"));
console.log(text1.indexOf("e")); //Show only first "e" in string
console.log(text1);
console.log(text1.trim());
console.log(text1.startsWith(" Peter")); //Return true as text1 start with ' Peter'
console.log(text1.includes("eter"));
console.log(text1.slice(3, 9));
console.log(text1.slice(-6, -3));

//Method with property. Display last chart of string text1
console.log(text1.charAt(text1.length - 1));
console.log(text1.trim().toLowerCase().startsWith("peter")); //Ignore empty space at beggining of strin and it's not case sensitive

const person = {
  name: "peter",
  greeting() {
    console.log("Hi, I'm Peter");
  },
};

person.greeting();

//Template Literals

const name1 = "John";
const age1 = 25;
const sentence1 = "Hey it's " + name1 + " and he is " + age1 + " years old.";

//Template literals example
//Using backtick character `` and interpolation ${}
const value1 = `Hey it's ${name1} and he is ${age1} years old and he know how to count ${
  2 + 2
}.`;

console.log(sentence1);
console.log(value1);

//Array Properties and methods
let names1 = ["John", "Bob", "Barry", "Olga", "Ben"];

console.log(names1.length);
console.log(names1[names1.length - 1]);

//concat
const lastNames1 = ["Pepper", "Onion", "Banana"];

const allNames1 = names1.concat(lastNames1);
console.log(allNames1);
console.log(allNames1.reverse());

//unshift
allNames1.unshift("Suzy");
console.log(allNames1);

//shift
allNames1.shift();
console.log(allNames1);

//push
allNames1.push();
console.log(allNames1);

//splice - mutates original array.
// splice(2,2) -> return 2 names after index 2 and remove them from original array
const specifiNames1 = allNames1.splice(2, 2);
console.log(specifiNames1);
console.log(allNames1);
