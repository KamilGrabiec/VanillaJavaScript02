// createElement('element)
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element', 'locator')

// replaceChild('new', 'old')

const result = document.querySelector('#result');

// create empty element
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('Simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const headingText = document.createTextNode('This is a heding 2 text');
heading.appendChild(headingText);
heading.classList.add('blue');

result.appendChild(heading);

console.log(result.children);

console.log(document.querySelectorAll('div'));

// insertBefore('element', 'locator')
const bodyH3 = document.createElement('h3');
const text3 = document.createTextNode('H3 under body');
bodyH3.appendChild(text3);
document.body.appendChild(bodyH3);

const bodyDiv2 = document.createElement('div');
const text2 = document.createTextNode('Second text node inserteBefore h3');
bodyDiv2.appendChild(text2);
document.body.appendChild(bodyDiv2);

//this will place element bodyDiv2 before bodyH3
document.body.insertBefore(bodyDiv2, bodyH3);

//this will place element bodyDiv2 before H2
//result.insertBefore(bodyDiv2, heading);

// this will return an error because element h2 is not a child of document but there is an element div between them - at least this is what I think
//document.body.insertBefore(bodyDiv2, heading);

// replaceChild('new', 'old')

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`I'm small heading text`);
smallHeading.appendChild(smallText);
smallHeading.classList.add('red');
//document.body.appendChild(smallHeading);
//document.body.replaceChild(smallHeading, heading);
result.replaceChild(smallHeading, heading);

console.log(result.children);
