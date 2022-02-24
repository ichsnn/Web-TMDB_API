const params = new URLSearchParams(window.location.search);

const movieID = params.get('id');

if (movieID != null) {
    document.addEventListener('DOMContentLoaded', () => {
        const detailSection = document.getElementById('detailSection')
        movieDetails(URL(movieID), detailSection);
    });

    const movieDetails = (URL, container) => {
        getMovies(URL).then((movie) => {
            console.log(movie)
            window.document.title += ' - ' + movie.title;
            const detailsHero = new HeroMovieDetails(movie);
            container.appendChild(detailsHero);
        });
    };
}
