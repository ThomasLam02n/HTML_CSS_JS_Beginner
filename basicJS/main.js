var boxElement = document.querySelector('.box');

boxElement.classList.add('green', 'blue');

setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);
