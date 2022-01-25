// className
// classList

const fitst = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = fitst.className;
console.log(classValue);

second.className = 'colors';
second.className = 'text'; // only one class can be set by this method

third.classList.add('colors');
third.classList.add('text');
console.log(`Class list of third element is ${third.classList}`);
console.log(third.classList);

let result = third.classList.contains('text');
console.log(result);

third.classList.remove('text');

result = third.classList.contains('text');
console.log(result);
