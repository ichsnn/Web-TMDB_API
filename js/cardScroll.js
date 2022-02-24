const movieContainer = document.querySelectorAll('.movie__container');

const updateContainer = () => {
    movieContainer.forEach((container) => {
        const prev = container.querySelector('.scroll__button .prev');
        const next = container.querySelector('.scroll__button .next');
        const movieCards = container.querySelector('.movieContainer__card');
        const cards = movieCards.querySelectorAll('.movie__card');

        let containerWidth = container.clientWidth;

        prev.classList.add('hide');
        if (movieCards.scrollWidth <= containerWidth) {
            prev.classList.add('hide');
            next.classList.add('hide');
        }

        let iterator =
            Math.floor(containerWidth / cards.item(0).clientWidth) * 200;

        window.addEventListener('resize', () => {
            containerWidth = container.clientWidth;
            iterator =
                Math.floor(containerWidth / cards.item(0).clientWidth) * 200;
        });

        prev.addEventListener('click', () => {
            movieCards.scrollLeft -= iterator;

            //  Check scroll offset for prev
            if (movieCards.scrollLeft <= movieCards.offsetWidth) {
                prev.classList.add('hide');
            }
            next.classList.remove('hide');
        });

        next.addEventListener('click', () => {
            movieCards.scrollLeft += iterator;

            // Check scroll offset for next
            if (
                Math.ceil(movieCards.offsetWidth + movieCards.scrollLeft) >=
                movieCards.scrollWidth - movieCards.offsetWidth
            ) {
                next.classList.add('hide');
            }
            prev.classList.remove('hide');
        });

        movieCards.addEventListener('scroll', () => {
            prev.classList.remove('hide');
            next.classList.remove('hide');
            if (
                Math.ceil(movieCards.offsetWidth + movieCards.scrollLeft) >=
                movieCards.scrollWidth
            ) {
                next.classList.add('hide');
            }
            if (movieCards.scrollLeft == 0) {
                prev.classList.add('hide');
            }
            
        });
    });
};
