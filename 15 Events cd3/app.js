// Event propagation example
// Allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const heading = document.querySelector('.heading');

function sayHello() {
  console.log(`Hello`);
}

//dynamicaly create element h1 when button pressed
btn.addEventListener('click', function () {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = 'Dynamic header';
  container.appendChild(element);
});
//heading.addEventListener('click', sayHello);

// Header is not existing in html but it is added to DOM as element dynamicaly. To execute sayHello, we may use bubbling and target on container with condition that check if in DOM we have a header.

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('heading')) {
    sayHello();
  }
});

// form submition
// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
const clear = document.querySelector('.clear');

clear.addEventListener('click', function () {
  name.value = null;
  password.value = null;
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(name.value);
  console.log(password.value);
});
