// let URL = `https://api.themoviedb.org/3/movie/${tag}?api_key=${API_KEY}&page1`;

const URL = (tag) => {
    return `https://api.themoviedb.org/3/movie/${tag}?api_key=${API_KEY}&page1`;
};

document.addEventListener('DOMContentLoaded', () => {
    const popularSection = document.querySelector('#popular');
    const topratedSection = document.querySelector('#top_rated');
    showMovies(URL('popular'), popularSection);
    showMovies(URL('top_rated'), topratedSection);
});

const showMovies = (URL, container) => {
    getMovies(URL).then((results) => {
        results.forEach((movie) => {
            const poster = movie.poster_path;
            const rating = movie.vote_average;
            const title = movie.title;
            const movieCard = new MovieCard(poster, rating, title);
            container.appendChild(movieCard);
        });
        // Update container slider from container grandParent :)
        updateContainer(container.parentElement.parentElement);
    });
};

const getMovies = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
};
