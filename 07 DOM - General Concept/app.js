// similar to css

// Select the element or group of elements the you we wan to affect
// Decide the effect we want to apply to the selection

// may different ways

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

document.querySelector('element');
// do something with element

// assign to a variable

const element = document.getElementById('element');
// do something with element like element.something()

// window object - giant global object
// returns a node object or a node list, which is an arraylike object
//console.log(window);

const btn = document.getElementById('btn');
const nameBtn = btn.nodeName;
const css = btn.style;
console.log(btn);
console.log(nameBtn);
console.log(css);

//Next chapter
console.log(`Next chapter - Window and Document Overview`);

// window object = browser api
// document -> when calling document we should call it window.document, however if JS is not able to find particular metod it is always look within the window object, so that's why window's object methods are available without object
// console.dir

//alert('hello');
console.log(window);
console.log(document);
console.dir(document);
console.dir(`Hello`);

// Next chapter
console.log(`Next chapter - getElementById`);
// Select the element or group of elements by Id

const title = document.getElementById('title1');
console.log(title);
title.style.color = 'red';

document.getElementById('btn').style.backgroundColor = 'Orange';
document.getElementById('btn').style.color = 'white';

// or

const btn2 = document.getElementById('btn');
btn2.style.backgroundColor = 'orange';
btn2.style.color = 'white';

// this returns something different
/* const titles = document.getElementsByClassName('title2');
console.log(titles);
titles[0].style.color = 'green';
 */

// Next chapter - getElementsByTagName
console.log('Next chapter - getElementsByTagName');

// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagName');
// node-list = array-like object
// index, lenght property but not array methods

const headings = document.getElementsByTagName('h1');
console.log(headings);
headings[0].style.color = 'orange';
console.log(headings.length);

const items = document.getElementsByTagName('li');
// this returns error because getElementsByTagName returns array-like object but not exactly array
// items.forEach(function (item) {
//   console.log(item);
// });
items[2].style.color = 'orange';

const betterItems = [...items];
console.log(`Comparation items and betterItems`);
console.log(items);
console.log(betterItems);

betterItems.forEach(function (item) {
  console.log(item);
});

// Next chapter - getElementsByClassName
// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection
// getElementByClassName('className')
// node-list = array-like object
// index, lenght property but not array methods
console.log(`Next chapter - getElementsByClassName`);

const specialListItems = document.getElementsByClassName('special');
const betterSpecialListItems = [...specialListItems];
console.log(specialListItems);
specialListItems[2].style.color = 'green';
betterSpecialListItems.forEach(function (item) {
  console.log(item);
});

console.log(`Next chapter - QuerySelector and QuerySelectorAll`);
// Next chapter - QuerySelector and QuerySelectorAll
// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection
// node-list = array object

// querySelector('any css') - selects single, first one
// querySelectorAll('any css)  - select all, as it is array forEach works

const result = document.querySelector('#result'); //would also work the same with getElementById
result.style.backgroundColor = 'black';

const item = document.querySelector('.special'); // gets firs reult with class special
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

// # for id, . for class, nothing for header

const list = document.querySelectorAll('.special');
console.log(list);
list.forEach(function (item) {
  // forEach works for querySelectorAll because it returns array
  console.log(item);
  item.style.color = 'pink';
});
