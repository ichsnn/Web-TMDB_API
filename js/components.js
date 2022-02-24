class MovieCard extends HTMLElement {
    constructor(img, rating, title) {
        super()
        this.img = img;
        this.rating = rating;
        this.title = title;
        this.setAttribute('class', 'movie__card')
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
    }
}
