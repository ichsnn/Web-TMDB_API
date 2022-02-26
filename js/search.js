const SEARCH_URL = (search, page) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false&region=asa`;
};

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('search')) {
    const searchValue = searchParams.get('search');
    let page = 1;
    var totalPage = 0;
    var totalResults = 0;
    const tag = params.keys().next().value;
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('movie-container');
        const sectionHeader = document.querySelector(
            '.movieSection__head .title'
        );

        const moreButton = document.querySelector('.btn__more');

        getSearchInfo().then(() => {
            sectionHeader.textContent = `${tag} (${totalResults})`;
            moreButton.addEventListener('click', () => {
                page += 1;
                showMovies(container);
                if (page == totalPage) {
                    moreButton.style.setProperty('--more--display', 'none');
                }
            });
            showMovies(container);
        });
    });

    const getSearchInfo = async () => {
        return getMovies(SEARCH_URL(page)).then((movie) => {
            totalResults = movie.total_results;
            totalPage = movie.total_pages;
        });
    };

    const showMovies = (container) => {
        getMovies(SEARCH_URL(searchValue, page)).then((movie) => {
            const results = movie.results;
            results.forEach((movie) => {
                const movieCard = new MovieCard(movie);
                container.appendChild(movieCard);
            });
        });
    };
}
