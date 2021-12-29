// nodeValue
// textContent

const item = document.getElementById('special');
const value = item.childNodes[0].nodeValue; // or (item.firstChild.nodeValue)
const easyValue = item.textContent;

console.log(item.childNodes);
console.log(value);
console.log(easyValue);

console.log(`Next chapter`);
// getAttribute()
// setAttribute()

// Display attributes of element with class first
const first = document.querySelector('.first');
const classValue = first.getAttribute('class');
const idValue = first.getAttribute('id');

const links = document.querySelectorAll('.first');
console.log(links);
console.log(classValue);
console.log(idValue);

// Display attribute id of element with id = link
const link = document.getElementById('link');
const showLink = link.getAttribute('id');
console.log(showLink);

// set attribute
const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'i also have a class of first';
console.log(last);
console.log(document.querySelectorAll('.first'));
