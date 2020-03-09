// const contents = document.getElementById('content');
// contents.parentNode.removeChild(contents);

const contents = $('#content');
const contentsParent = contents.parent();
contents.remove();
const img = `
    <img src='https://www.unilad.co.uk/wp-content/uploads/2018/07/success-kid-original.jpg' alt='success kid'>
`;
const message = `<p>Focus on your tasks and achieve your dreams!</p>`
contentsParent.prepend(img);
contentsParent.prepend(message);