class NavigationBar extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <header>
            <nav>
                <!-- App Name or Logo -->
                <a href="index.html" class="nav__logo">
                    YoMov
                </a>

                <!-- Search Bar -->
                <div>

                </div>
            </nav>
        </header>
        `;
    }
}
customElements.define('nav-bar', NavigationBar);

class MovieCard extends HTMLElement {
    constructor(movie) {
        super();
        this.setAttribute('class', 'movie__card');

        console.log(movie)
        this.setAttribute('title', movie.title);

        this.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="${movie.title}"
            class="image">
            <div class="card__details">
                <div class="info">
                    <div class="rating">
                        <i class="fa-solid fa-star star"></i>
                        <span>${movie.vote_average}</span>
                    </div>
                    <div class="releaseDate">
                        ${movie.release_date}
                    </div>
                </div>
                <div class="title">
                    ${movie.title}
                </div>
            </div>
            <a href="./detail.html?id=${movie.id}" class="to__detail">
                
            </a>
        `;
    }
}
customElements.define('movie-card', MovieCard);

class MovieSection extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('class', 'movieSection');

        this.title = this.getAttribute('title');
        this.moreLink = this.getAttribute('more-link');
        this.movieTag = this.getAttribute('movie-tag');

        this.innerHTML = `
            <div class="movieSection__head">
                <p class="title">
                    ${this.title}
                </p>
                <a href="${this.moreLink}" class="more__link">
                    <span>FIND MORE</span> <i class="fa-solid fa-angle-right"></i>
                </a>
            </div>
            <div class="movie__container">
                <div class="scroll__button">
                    <div class="prev"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="next"><i class="fa-solid fa-chevron-right"></i></div>
                </div>
                <div class="movieContainer__card" id="${this.movieTag}"></div>
            </div>
    </div>
        `;
    }
}
customElements.define('movie-section', MovieSection);

class HeroMovieDetails extends HTMLElement {
    constructor(movie) {
        super();

        const date = new Date(movie.release_date);

        let genre = '';
        for(let i = 0; i < movie.genres.length; i++) {
            genre += movie.genres[i].name;
            if(i < movie.genres.length - 1) {
                genre += ', ';
            }
        }

        this.innerHTML = `
            <style>
                .detail__bg {
                    background-position: right -200px top;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-image: url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${
                        movie.backdrop_path
                    });
                }
            </style>
            <div class="detail__bg">
                <div class="bg__layer">
                    <div class="detail__container">
                        <div class="poster">
                            <div class="poster__container">
                                <img src="http://image.tmdb.org/t/p/w500${
                                    movie.poster_path
                                }" alt="poster">
                                <div class="layer" title="Play Trailer">
                                    <i class="fa-solid fa-play"></i>
                                </div>
                            </div>
                        </div>
                        <div class="details">
                            <div class="header">
                                <div class="header__title">
                                    <span class="title">${movie.title}</span>
                                    <span class="year">(${date.getFullYear()})</span>
                                </div>
                                <div class="header__info">
                                    ${date.toLocaleDateString()} ${movie.production_countries.length == 0 ? '' : '(' + movie.production_countries[0].iso_3166_1 + ')'} • ${genre} • ${movie.runtime}m
                                </div>
                            </div>
                            <div class="rating">
                                <i class="fa-solid fa-star star"></i>
                                <span>${movie.vote_average}</span>
                            </div>
                            <div class="tagline">
                                <p>${movie.tagline}</p>
                            </div>
                            <div class="overview">
                                <h3>Overview</h3>
                                <p>${movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('details-hero', HeroMovieDetails);
