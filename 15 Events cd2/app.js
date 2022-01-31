// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    //console.log(e.currentTarget);
    //e.currentTarget.style.color = 'green';

    console.log('target', e.target);
    e.target.style.color = 'green';
  });
});

// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

// bubbling, stopPropagation, capturing

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
  console.log('currentTarget', e.currentTarget);
  // console.log('target', e.target);
  // if (e.target.classList.contains('link')) {
  //   console.log(`You click on the link`);
  // }
}

function stopPropagation(e) {
  console.log('You click on list but propagation was stoped');
  e.stopPropagation();
}

//list.addEventListener('click', stopPropagation);
list.addEventListener('click', showBubbling, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling);
