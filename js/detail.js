const params = new URLSearchParams(window.location.search);

const movieID = params.get('id');

const CREADIT_URL = (movieID) => {
    return `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`;
};

if (movieID != null) {
    document.addEventListener('DOMContentLoaded', () => {
        const detailSection = document.getElementById('detailSection');
        movieDetails(URL(movieID), CREADIT_URL(movieID), detailSection);
    });
}

// ---------------
const movieDetails = (URL, CREDIT_URL, container) => {
    getMovies(URL).then((movie) => {
        console.log(movie)
        window.document.title += ' - ' + movie.title;
        const detailsHero = new HeroMovieDetails(movie);
        container.appendChild(detailsHero);
    });
    movieCredits(CREDIT_URL).then((data) => {
        container.querySelector('.director__name').textContent = getJob(
            data.crew,
            'Director'
        ).name;
    });
};

const movieCredits = (URL) => {
    return getMovies(URL).then((credit) => credit);
};

const getJob = (arr, job) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].job === job) {
            return arr[i];
        }
    }
};
