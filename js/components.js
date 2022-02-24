class MovieCard extends HTMLElement {
    constructor() {
        super()
        const img = this.getAttribute('image');
        const rating = this.getAttribute('rating');
        const title = this.getAttribute('title');
        this.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w342/${img}" alt="${title}"
            class="image">
            <div class="card__details">
                <div class="rating">
                    <i class="fa-solid fa-star star"></i>
                    <span>${rating}</span>
                </div>
                <div class="title">
                    ${title}
                </div>
            </div>
        `;
    }
}
customElements.define('movie-card', MovieCard);
