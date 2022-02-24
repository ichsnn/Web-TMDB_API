class MovieCard extends HTMLElement {
    constructor(movie) {
        super();
        this.setAttribute('class', 'movie__card');

        this.setAttribute('title', movie.title);

        this.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="${movie.title}"
            class="image">
            <div class="card__details">
                <div class="rating">
                    <i class="fa-solid fa-star star"></i>
                    <span>${movie.vote_average}</span>
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
