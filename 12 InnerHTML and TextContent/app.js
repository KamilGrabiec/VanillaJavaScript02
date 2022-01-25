// innerHTML
// textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerText);
console.log(list.innerHTML);

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">list item</li> <li>list item</li>`;

document.body.appendChild(ul);

div.textContent = `Hello World`;
div.innerHTML = `      <li class="item">list item</li>
      <li>list item</li>`;

// CSS

const random = document.querySelector('.random');
console.log(random.style);

random.style.backgroundColor = 'blue';
random.style.color = 'white';
random.style.fontSize = '3rem';
random.style.textTransform = 'capitalize';

// or

random.classList.add('title');
