const buttons = document.querySelector('.buttons');

function handleClick() {
  console.log('It got clicked');
}

buttons.addEventListener('click', handleClick);
// buttons.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('You clicked a button')
  // console.log(event.target.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);

  // prevent this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', event => {
  console.log('You clicked the window');
  console.log(event.target);
  event.stopPropagation();
}, { capture: true });

// this
const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mouseover', function(event) {
  console.log(event.currentTarget);
  console.log(this);
});