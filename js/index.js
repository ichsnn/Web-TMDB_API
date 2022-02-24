// let URL = `https://api.themoviedb.org/3/movie/${tag}?api_key=${API_KEY}&page1`;

const URL = (tag) => {
    return `https://api.themoviedb.org/3/movie/${tag}?api_key=${API_KEY}&page1`;
};

document.addEventListener('DOMContentLoaded', () => {
    const popularSection = document.querySelector('#popular');
    showMovies(URL('popular'), popularSection);
});

const showMovies = (URL, container) => {
    getMovies(URL).then((results) => {
        results.forEach((movie) => {
            const poster = movie.poster_path;
            const rating = movie.vote_average;
            const title = movie.title;
            const movieCard = new MovieCard(poster, rating, title);
            container.appendChild(movieCard)
        });
        updateContainer();
    });
};

const getMovies = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
};
