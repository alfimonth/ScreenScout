import './movie-item.js';
import pop from '../view/popular.js';

class PopularList extends HTMLElement {
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
        this.shadowDOM.innerHTML = `
        <style>
        :host {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 32px;
            gap: 16px;
            scroll-margin-top: 50px;
            justify-content:center;
        }

        h3{
            margin-top: 4rem;
            text-align: center;
            color: #27ae60;
            width:100%;
            font-size: 32px;
        }
        </style>
        <h3>Popular list</h3>
        `;
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement('movie-item' );
            movieItemElement.genres = this._genre;
            movieItemElement.movie = movie;
            this.shadowDOM.appendChild(movieItemElement);
        });
    }
}

customElements.define('popular-list', PopularList);
pop();

