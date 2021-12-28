// Next chapter - Navigate the Dom - children
// Select element or group of element the we want
// Decide the effect we want to apply to the selection

// childNodes - return all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

console.log(`Next chapter - Navigate the Dom - children`);

const result = document.querySelector('#result');
const allChildren = result.childNodes;

console.log(result);
console.log(allChildren);

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);

// Next chapter - Navigate the dom - parent element
console.log(`Next chapter - Navigate the dom - parent element`);

// parentElement

const heading = document.querySelector('h2');
console.log(heading.parentElement);
console.log(heading.parentElement.parentElement);
// ect ..
const parent = heading.parentElement;
console.log(parent);
parent.style.color = 'blue';

// NextSibling, PrevSibling
console.log(`Siblings`);

// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
console.log(first);
const second = first.nextSibling;
console.log(second);
//second.style.color = 'red'; error because it is whitespace
second.nextSibling.style.color = 'orange';

const last = document.querySelector('#last');
console.log(last);
const fourth = last.previousSibling;
console.log(fourth); //whitespace
console.log(fourth.previousSibling); // pearl
fourth.previousSibling.style.color = 'red';

// previousElementSibling
// nextElementSibling

const betterSecond = first.nextElementSibling;
const betterFourth = last.previousElementSibling;

betterSecond.style.fontWeight = 'bold';
betterFourth.style.fontWeight = 'bold';
