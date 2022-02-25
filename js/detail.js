const params = new URLSearchParams(window.location.search);

const movieID = params.get('id');

const CREADIT_URL = (movieID) => {
    return `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`;
};

const REVIEW_URL = (movieID) => {
    return `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${API_KEY}`;
};

if (movieID != null) {
    document.addEventListener('DOMContentLoaded', () => {
        const detailSection = document.getElementById('detailSection');
        movieDetails(URL(movieID), CREADIT_URL(movieID), detailSection);
    });
}

// ---------------
const movieDetails = (URL, CREDIT_URL, container) => {
    // movie detail
    getMovies(URL).then((movie) => {
        window.document.title += ' - ' + movie.title;
        const detailsHero = new HeroMovieDetails(movie);
        container.appendChild(detailsHero);
    });

    // Add Credit
    movieCredits(CREDIT_URL).then((data) => {
        container.querySelector('.director__name').textContent = getJob(
            data.crew,
            'Director'
        ).name;

        const cast = data.cast;
        const castContainer = document.querySelector('.cast__container');
        for (let i = 0; i < 10; i++) {
            const castCard = new MovieCastCard(
                cast[i].profile_path,
                cast[i].name,
                cast[i].character
            );
            castContainer.appendChild(castCard);
        }
    });

    movieReview(REVIEW_URL(movieID)).then((review) => {
        const reviewContainer = document.querySelector('.review__box');
        console.log(review);
        if (review.length < 1) {
            reviewContainer.innerHTML = '<div>No Review Yet!</div>';
        } else {
            let i = 0;
            review.every((data) => {
                const reviewCard = new ReviewCard(data);
                reviewContainer.appendChild(reviewCard);
                i++;
                if (i > 2) {
                    return false;
                } else return true;
            });
        }
    });
};

const movieCredits = (URL) => {
    return getMovies(URL).then((credit) => credit);
};

const movieReview = (URL) => {
    return getMovies(URL).then((review) => review.results);
};

const getJob = (arr, job) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].job === job) {
            return arr[i];
        }
    }
};
