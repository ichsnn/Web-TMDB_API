const params = new URLSearchParams(window.location.search);

const tag = params.keys().next().value;

let page = 1;

const MOVIE_URL = (tag, page) => {
    return `https://api.themoviedb.org/3/movie/${tag}?api_key=${API_KEY}&language=en-US&page=${page}`;
};

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('movie-container');
    const sectionHeader = document.querySelector('.movieSection__head .title');
    const moreButton = document.querySelector('.btn__more');
    sectionHeader.textContent = tag;
    moreButton.addEventListener('click', () => {
        page += 1;
        showMovies(container)
    })
    showMovies(container)
});

const showMovies = (container) => {
    getMovies(MOVIE_URL(tag, page))
        .then((data) => data.results)
        .then((movies) => {
            movies.forEach((movie) => {
                const movieCard = new MovieCard(movie);
                container.appendChild(movieCard);
            });
        });
};
