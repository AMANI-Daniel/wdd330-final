import { setLocalStorage, getLocalStorage } from "./showMovie.mjs";

const FAVORITES_KEY = 'favoriteMovies';

let favoritesMovies = getLocalStorage(FAVORITES_KEY) || [];

export function AddFavorite(x) {
    const alreadyInFavorite = favoritesMovies.find(
        movie => movie.id === x.id
    );

    if (x.id && !alreadyInFavorite) {
        favoritesMovies.push(x);
    }

    setLocalStorage(FAVORITES_KEY, favoritesMovies);
}

export function showFavorites(cards) {
    let movies = getLocalStorage(FAVORITES_KEY) || [];


    if (movies.length > 0) {

        movies.forEach(element => {
            const card = document.createElement('div');
            card.classList.add('movie');

            const photo = document.createElement('img');
            const movieName = document.createElement('h3');

            movieName.textContent = element.primaryTitle;

            photo.src = element.primaryImage;
            photo.alt = element.primaryTitle;
            photo.width = 300;
            photo.height = 200;
            photo.loading = 'lazy';

            photo.addEventListener('error', () => {
                card.remove();
            });

           

            const removeFavorite = document.createElement('button');
            removeFavorite.id = 'removefav';
            removeFavorite.textContent = '❌';

            removeFavorite.addEventListener('click', () => {
                movies = movies.filter(movie => movie.id !== element.id);

                setLocalStorage(FAVORITES_KEY, movies);

                card.remove();
            });

            card.appendChild(removeFavorite);
            card.appendChild(movieName);
            card.appendChild(photo);
            cards.appendChild(card);


        });

       

    } else {
        const message = document.createElement('h2');

        message.textContent =
            'There are no favorites, please add favorite movies!';

        cards.appendChild(message);
    }
}