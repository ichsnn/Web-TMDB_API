const params = new URLSearchParams(window.location.search);

const movieID = params.get('id');

const FACE_URL = 'https://www.themoviedb.org/t/p/w276_and_h350_face/';

// EKSEKUSI DISINI
if (movieID != null) {
    document.addEventListener('DOMContentLoaded', () => {
        const detailSection = document.getElementById('detailSection');

        movieDetails(MOVIE_URL(movieID), detailSection)
            .then(movieCredits(CREADIT_URL(movieID), detailSection))
            .then(movieReview(REVIEW_URL(movieID)))
            .then(movieRecomendation(RECOM_URL(movieID))).then(movieTrailer(VIDEO_URL(movieID), detailSection));
    });
}
// 

const tester = async () => {
};

// Method lain

const CREADIT_URL = (movieID) => {
    return `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`;
};

const REVIEW_URL = (movieID) => {
    return `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${API_KEY}`;
};

const RECOM_URL = (movieID) => {
    return `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${API_KEY}`;
};

const VIDEO_URL = (movieID) => {
    return `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`;
};

const movieDetails = async (URL, container) => {
    const movie = await getMovies(URL);
    window.document.title += ' - ' + movie.title;
    const detailsHero = new HeroMovieDetails(movie);
    container.appendChild(detailsHero);
};

const movieCredits = async (URL, container) => {
    const credit = await getMovies(URL);
    const data = credit;
    container.querySelector('.director__name').textContent = getJob(
        data.crew,
        'Director'
    ).name;
    const cast = data.cast;
    const castContainer = document.querySelector('.cast__container');
    let i = 0;
    cast.every((people) => {
        const castCard = new MovieCastCard(
            people.profile_path == null
                ? 'assets/image/blank-avatar.png'
                : FACE_URL + people.profile_path,
            people.name,
            people.character
        );
        castContainer.appendChild(castCard);
        i++;
        if (i > 9) {
            return false;
        }
        return true;
    });
};

const movieReview = async (URL) => {
    const review = await getMovies(URL);
    const review_1 = review.results;
    const reviewContainer = document.querySelector('.review__box');
    if (review_1.length < 1) {
        reviewContainer.innerHTML = '<div>No Review Yet!</div>';
    } else {
        let i = 0;
        review_1.every((data_1) => {
            const reviewCard = new ReviewCard(data_1);
            reviewContainer.appendChild(reviewCard);
            i++;
            if (i > 2) {
                return false;
            } else return true;
        });
    }
};

const movieRecomendation = async (URL) => {
    const review = await getMovies(URL);
    const movie = review.results;
    if (movie.length != 0) {
        displayRecom(movie);
    } else {
        getMovies(MOVIE_URL('now_playing'))
            .then((movie_1) => movie_1.results)
            .then((results) => {
                displayRecom(results);
            });
    }
};

const movieTrailer = async (URL, container) => {
    await getMovies(URL).then((video) => {
        const results = video.results;
        const movieTrailer = new MovieTrailer(results);
        container.appendChild(movieTrailer);
    });
    
    //Open Trailer
    const trailerTrigger = document.querySelector('.poster');
    trailerTrigger.addEventListener('click', () => {
        trailerModal.style.setProperty(`--trailer--display`, 'flex')
    })
    
    // Close Trailer
    const trailerModal = document.querySelector('.trailer__container');

    trailerModal.addEventListener('click', () => {
        trailerModal.style.setProperty(`--trailer--display`, 'none')
    })
};



const displayRecom = (func) => {
    const recomContainer = document.querySelector('.recom__container');
    let i = 0;
    func.every((recom) => {
        const movieCard = new MovieCard(recom);
        recomContainer.appendChild(movieCard);
        i++;
        if (i == 4) {
            return false;
        }
        return true;
    });
};

// Pencarian job crew
const getJob = (arr, job) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].job === job) {
            return arr[i];
        }
    }
};
