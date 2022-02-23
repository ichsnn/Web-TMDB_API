let tag = 'popular';
let URL = `https://api.themoviedb.org/3/movie/${tag}?api_key=${API_KEY}&page1`;

document.addEventListener('DOMContentLoaded', () => {
    getMovies(URL);
});

const getMovies = (URL) => {
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {console.log(data)});
};
