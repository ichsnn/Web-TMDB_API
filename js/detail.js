const params = new URLSearchParams(window.location.search);
const movieID = params.get('id');

document.addEventListener('DOMContentLoaded', () => {
    movieDetails(URL(movieID))
});

const movieDetails = (URL) => {
    getMovies(URL).then((movie) => {
        window.document.title += ' - ' + movie.title;
        
    })
};
