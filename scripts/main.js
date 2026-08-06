
const text = 'Welcome to Volleyball Summer Hub';
const head = document.querySelector('.hero');

let index = 0;

function displayWelcomeText() {
    const interval = setInterval(() => {
        if (index < text.length) {
            head.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}
document.addEventListener('DOMContentLoaded', displayWelcomeText());

//Working on year in footer

function showYear() {
    const year = document.querySelector('#year');
    const today = new Date();

    year.innerHTML = today.getFullYear();
}
showYear()