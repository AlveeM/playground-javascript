// const alvee = document.querySelector('.alvee');
// alvee.addEventListener('click', event => {
//     event.preventDefault();
//     const shouldChangePage = confirm('Do you want to proceed?');
//     console.log(shouldChangePage);
//     if (shouldChangePage) {
//         window.location = event.currentTarget.href;
//     }
// })

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    if (name.includes('corona')) {
        alert('nope');
    }
})