class MovieCard extends HTMLElement {
    constructor(img, rating, title) {
        super();
        this.img = img;
        this.rating = rating;
        this.title = title;
        this.setAttribute('class', 'movie__card');
        this.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w342/${this.img}" alt="${this.title}"
            class="image">
            <div class="card__details">
                <div class="rating">
                    <i class="fa-solid fa-star star"></i>
                    <span>${this.rating}</span>
                </div>
                <div class="title">
                    ${this.title}
                </div>
            </div>
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
                    Find More >
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
