// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

//localStorage.setItem('name', 'john');
//sessionStorage.setItem('name', 'john');

localStorage.setItem('name', 'john');
localStorage.setItem('name', 'bob');
localStorage.setItem('job', 'developer');
localStorage.setItem('adress', 'street 123');

console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
console.log(localStorage.getItem('name'));

// JSON.stringify(), JSON.parse()

// Initialy array created and moved to localStorage, however it is not storage as array any more
const friedns = ['john', 'peter', 'bob'];
localStorage.setItem('friends', friedns);

const valuesFriends = localStorage.getItem('friends');
console.log(valuesFriends[0]);

// How to storage and use array with localStorage
const fruits = ['apple', 'banana', 'orange'];
localStorage.setItem('fruits', JSON.stringify(fruits));

const valuesFruits = JSON.parse(localStorage.getItem('fruits'));
console.log(valuesFruits[0]);

let animals;

if (localStorage.getItem('animals')) {
  animals = JSON.parse(localStorage.getItem('animals'));
} else {
  animals = [];
}

console.log(animals);
animals.push('dog');
localStorage.setItem('animals', JSON.stringify(animals));
