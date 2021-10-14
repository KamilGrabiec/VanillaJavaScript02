//String properties and methods
//wrapper String Object

let text1 = ' Peter Jordan';

//Properties
let result = text1.length;
console.log(result);
console.log(text1.length);

//Methods
console.log(text1.toLowerCase());
console.log(text1.toUpperCase());
console.log(text1.charAt(2));
console.log(text1.indexOf('o'));
console.log(text1.indexOf('e')); //Show only first "e" in string
console.log(text1);
console.log(text1.trim());
console.log(text1.startsWith(' Peter')); //Return true as text1 start with ' Peter'
console.log(text1.includes('eter'));
console.log(text1.slice(3, 9));
console.log(text1.slice(-6, -3));

//Method with property. Display last chart of string text1
console.log(text1.charAt(text1.length - 1));
console.log(text1.trim().toLowerCase().startsWith('peter')); //Ignore empty space at beggining of strin and it's not case sensitive

const person = {
  name: 'peter',
  greeting() {
    console.log("Hi, I'm Peter");
  },
};

person.greeting();
