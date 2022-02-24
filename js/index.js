document.addEventListener('DOMContentLoaded', () => {
    const popularSection = document.querySelector('#popular');
    const topratedSection = document.querySelector('#top_rated');
    const upcomingSection = document.querySelector('#upcoming');
    showMovies(URL('popular'), popularSection);
    showMovies(URL('top_rated'), topratedSection);
    showMovies(URL('upcoming'), upcomingSection);
});

const showMovies = (URL, container) => {
    getMovies(URL).then((data) => {
        data.results.forEach((movie) => {
            console.log(movie)
            const movieCard = new MovieCard(movie);
            console.log(movieCard)
            container.appendChild(movieCard);
        });
        updateContainer(container.parentElement.parentElement);
    });
};