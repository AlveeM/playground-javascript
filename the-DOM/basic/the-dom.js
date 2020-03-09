// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// console.log(p);
// console.log(divs);
// console.log(heading.textContent);
// heading.textContent = 'I got changed!';
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerHTML);

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('open');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'image description'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth) // logs 0 since image isn't loaded

pic.addEventListener('load', function() {
    console.log(pic.naturalWidth); // logs actual width
});

pic.setAttribute('alt', 'IMAGE DESCRIPTION');
console.log(pic.getAttribute('alt'));

// Adding custom atributes - use data-custom_attribute
const custom = document.querySelector('.custom');
console.log(custom.dataset);