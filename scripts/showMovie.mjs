import { dialogBox } from "./main.mjs";

//Function to fetch series movie data
export async function showSeriesMovie(cards, key) {
    const savedMovies = getLocalStorage(key);
    if (savedMovies.length > 0) {
        // console.log(savedMovies);
        displaySeriesMovies(cards, savedMovies);
        return;
    }


    const url = 'https://imdb-top-1000-movies-series.p.rapidapi.com/byrating';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '82b4520b76msha7c842a73547beap11105ejsn0ee04da9dfc2',
            'x-rapidapi-host': 'imdb-top-1000-movies-series.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            above: '8.1',
            under: '8.2'
        })
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data.result);
        setLocalStorage(key, data.result);
        displaySeriesMovies(cards, data.result);

    } catch (error) {
        console.error(error);
    }
}





// Function to work with top 250 TV shows

export async function showTvShows(cards, key) {
    const savedShows = getLocalStorage(key);
    if (savedShows.length > 0) {
        cardTemplate(cards, savedShows);
        return;
    }

    const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-tv';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '82b4520b76msha7c842a73547beap11105ejsn0ee04da9dfc2',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setLocalStorage(key, result);
        cardTemplate(cards, result)
    } catch (error) {
        console.error(error);
    }
    
}


//Function working with top 250 Movies
export async function show250Movies(cards, key) {

    const savedMovies = getLocalStorage(key);
        if (savedMovies.length > 0) {
            cardTemplate(cards, savedMovies);
            return;
        }
    

    const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '82b4520b76msha7c842a73547beap11105ejsn0ee04da9dfc2',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setLocalStorage(key, result);
        cardTemplate(cards, result)
    } catch (error) {
        console.error(error);
    }
}



//Function to fetch indian movie data
export async function showIndianMovies(cards, key) {
    const savedMovies = getLocalStorage(key);
    if (savedMovies.length > 0) {
        cardTemplate(cards, savedMovies);
        return;
    }


    const url = 'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '82b4520b76msha7c842a73547beap11105ejsn0ee04da9dfc2',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setLocalStorage(key, result);
        cardTemplate(cards, result)
        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}


//Storing the fetched data to the localStorage
function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));

}
//Geting data stored on localStorage
function getLocalStorage(keyword) {
    return JSON.parse(localStorage.getItem(keyword)) || [];
}

//Function displaying series movies
function displaySeriesMovies(cards, movies) {
    // cards.innerHTML = "";
    movies.forEach(x => {

 
       
        const card = document.createElement('div');
        card.classList.add('movie');
        const movieName = document.createElement('h4');
        movieName.textContent = x.Series_Title;
        const photo = document.createElement("img");
        photo.src = x.Poster_Link;
        photo.alt = x.Series_Title;
        photo.loading = 'lazy';
        
        photo.addEventListener('click', () => {
            dialogBox.innerHTML = "";
            dialogBox.innerHTML = `

                <button id="closeModal">❌</button>
                <h4>${x.Series_Title}</h4>
                <img src="${x.Poster_Link}" alt="${x.Series_Title}">
                <p><strong>Director:</strong> ${x.Director}</p>
                <p><strong>Actors:</strong> ${x.Star1}, ${x.Star2}, ${x.Star3}, ${x.Star4}</p>
                <p><strong>Genre:</strong> ${x.Genre}</p>
                <p><strong>Runtime</strong> ${x.Runtime}</p>
                <p><strong>Overview:</strong> ${x.Overview}</p>
                <button id="favorite">Add To Favorite</button>
            
            `;
            dialogBox.showModal();

            closeModal.addEventListener('click', () => { 
                dialogBox.close();
            });

        });

        photo.addEventListener('error', () => {
            card.remove();
        });

        card.appendChild(movieName);
        card.appendChild(photo);
        cards.appendChild(card);
        
    });
}

//Function for displaying indian movies and top 250 movies
function cardTemplate(cards, movies) {
    // cards.innerHTML = "";
    movies.forEach(x => {

        const card = document.createElement('div');
        card.classList.add('movie');
        const photo = document.createElement("img");
        const movieName = document.createElement('h4');
        movieName.innerHTML = x.primaryTitle
        photo.src = x.primaryImage;
        photo.alt = x.primaryTitle;
        photo.width = '300';
        photo.height = '200';
        photo.loading = 'lazy';

        photo.addEventListener('click', () => { 
            dialogBox.innerHTML = "";
            dialogBox.innerHTML = `
                <button id="closeModal">❌</button>
               <h4>${x.primaryTitle}</h4>
               <img src="${x.primaryImage}" alt="${x.primaryTitle}" width="300" height="200">
               <p><strong>Description:</strong> ${x.description}</p>
               <p><strong>Released Date:</strong> ${x.releaseDate}</p>
               <p><strong>Type:</strong> ${x.type}</p>
               <a href="${x.trailer}">Watch trailer</a>
               <button id="favorite">Add To Favorite</button>

        
            `;

            dialogBox.showModal();
            closeModal.addEventListener('click', () => {
                dialogBox.close();
            });
        });




        photo.addEventListener('error', () => {
            card.remove();
        });
        card.appendChild(movieName);
        card.appendChild(photo);
        cards.appendChild(card);
    });
}