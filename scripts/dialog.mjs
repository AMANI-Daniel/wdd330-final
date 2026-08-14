import { dialogBox } from "./main.mjs";
import { AddFavorite } from "./favorites.mjs";

//Create dialog to trending movies
export function trendDialog(x) {
    dialogBox.innerHTML = "";
    dialogBox.innerHTML = `

                <button id="closeModal">❌</button>
                <h3>${x.Series_Title}</h3>
                <img src="${x.Poster_Link}" alt="${x.Series_Title}">
                <p><strong>Director:</strong> ${x.Director}</p>
                <p><strong>Actors:</strong> ${x.Star1}, ${x.Star2}, ${x.Star3}, ${x.Star4}</p>
                <p><strong>Genre:</strong> ${x.Genre}</p>
                <p><strong>Runtime</strong> ${x.Runtime}</p>
                <p><strong>Overview:</strong> ${x.Overview}</p>
            
            `;
    dialogBox.showModal();
    closeModal.addEventListener('click', () => {
        dialogBox.close();
    });
}


//Create a dialog for other moives and shows
export function otherMovieDialog(x) {
    dialogBox.innerHTML = "";
    dialogBox.innerHTML = `
                <button id="closeModal">❌</button>
               <h3>${x.primaryTitle}</h3>
               <img src="${x.primaryImage}" alt="${x.primaryTitle}" width="300" height="200">
               <p><strong>Description:</strong> ${x.description}</p>
               <p><strong>Released Date:</strong> ${x.releaseDate}</p>
               <p><strong>Type:</strong> ${x.type}</p>
               <a href="${x.trailer}">Watch trailer</a>
               <button id="favorite">Add to favorite</button>
        
            `;
    dialogBox.showModal();
    favorite.addEventListener('click', () => {
        AddFavorite(x);
    });
    closeModal.addEventListener('click', () => {
        dialogBox.close();
    });

}