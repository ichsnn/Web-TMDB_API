const params = new URLSearchParams(window.location.search);

const movieID = params.get('id');

if (movieID != null) {
    document.addEventListener('DOMContentLoaded', () => {
        movieDetails(URL(movieID));
    });

    const movieDetails = (URL, container) => {
        getMovies(URL).then((movie) => {
            console.log(movie)
            window.document.title += ' - ' + movie.title;
            
        });
    };
}
