import './movie-item.js';

class MovieList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }


    set movies(movies) {
        this._movies = movies;
        this.render();

    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
    `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message}</h2> `;
    }

    render() {
        const searchElement = document.querySelector('search-bar');
        this.shadowDOM.innerHTML = `
        <style>
        :host {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 0px;
            gap: 16px;
            scroll-margin-top: 100px;
            justify-content:center;
        }

        h2{
            margin-top:0;
        }

        h3{
            width:100%
        }
        </style>
        <h3>Search results for "${searchElement.value}"</h3>
        `;

        if (this._movies.length != 0) {
            this._movies.forEach(movie => {
                const movieItemElement = document.createElement('movie-item');
                movieItemElement.movie = movie;
                this.shadowDOM.appendChild(movieItemElement);
            });
        } else {
            this.shadowDOM.innerHTML += `
            <h2 class="placeholder">Not Found</h2>
            `;
        }
    }
}

customElements.define('movie-list', MovieList);
