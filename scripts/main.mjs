
import {showSeriesMovie, showIndianMovies, show250Movies, showTvShows } from "./showMovie.mjs";

const text = 'Welcome to Movie and TV Shows Summer Hub!!';

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


const cards = document.querySelector('#cards');

// working with series movies
const trendMovies = document.getElementById('trend');
trendMovies.addEventListener('click', () => {
    cards.innerHTML = "";
    showSeriesMovie(cards, 'trends');
});

//working with indian movies
const indian = document.getElementById('indian');
indian.addEventListener('click', () => {
    cards.innerHTML = "";
    showIndianMovies(cards, 'indians');
});

//Working with 250 movies
const topMovies = document.getElementById('topMovies');
topMovies.addEventListener('click', () => {
    cards.innerHTML = "";
    show250Movies(cards, 'topmovies');
});

//Working with 250 Tv shows

const topShows = document.getElementById('topShows');
topShows.addEventListener('click', () => {
    cards.innerHTML = "";
    showTvShows(cards, 'topshows');
});

export let dialogBox = document.getElementById('movieBox');

// Creating dynamic year for the page.
function showYear() {
    const year = document.querySelector('#year');
    const today = new Date();

    year.innerHTML = today.getFullYear();
}
showYear()

