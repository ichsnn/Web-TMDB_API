const URL = (tag) => {
    return `https://api.themoviedb.org/3/movie/${tag}?api_key=${API_KEY}&page1`;
};

const getMovies = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
};