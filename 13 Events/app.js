// select element
// addEventListener(event, callback function)
// what event we are listening to, what to do once event

const btn = document.querySelector('.btn');
const heading2 = document.querySelector('h2');

function changeColors() {
  let hasClass = heading2.classList.contains('red');
  if (hasClass) {
    heading2.classList.remove('red');
  }
  if (!hasClass) {
    heading2.classList.add('red');
  }
}

// addEventListener with annonymus function
// what event - click, what to do - console log and set class of heading2
// btn.addEventListener('click', function () {
//   console.log('hey you clicked me');
//   heading2.classList.add('red');
// });

btn.addEventListener('click', changeColors);

// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseeneter - moved onto an element
// mouseleave - moved out of an element

const p1 = document.querySelector('p');
const btn2 = document.querySelector('.btnPress');

btn2.addEventListener('click', function () {
  console.log(`click`);
});
btn2.addEventListener('mousedown', function () {
  btn2.className = 'red';
});
btn2.addEventListener('mouseup', function () {
  btn2.className = 'blue';
});

p1.addEventListener('mouseenter', function () {
  p1.className = 'red';
});
p1.addEventListener('mouseleave', function () {
  p1.classList.remove('red');
});

// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released
const nameInput = document.querySelector('#name');
nameInput.addEventListener('keypress', function () {
  console.log(`key pressed`);
});
nameInput.addEventListener('keydown', function () {
  nameInput.style.background = 'red';
});
nameInput.addEventListener('keyup', function () {
  nameInput.style.background = 'blue';
  console.dir(nameInput.value);
});
