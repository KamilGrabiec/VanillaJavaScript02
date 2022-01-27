// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading1 = document.querySelector('h1');
const btn1 = document.querySelector('.btn');
const link = document.querySelector('#link');

heading1.addEventListener('click', function (event) {
  console.log(event);
  console.log(event.currentTarget);
  heading1.classList.add('blue');
});

btn1.addEventListener('click', function (event) {
  console.log(event);
  console.log(event.currentTarget);
  event.currentTarget.classList.add('blue');
  console.log(event.type);
});

function someFunc(event) {
  event.preventDefault();
}

link.addEventListener('click', someFunc);
