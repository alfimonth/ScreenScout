class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }



    set movie(movie) {
        this._movie = movie;
        this.render();
    }


    render() {
        let oriTitle = '';
        if (this._movie.title != this._movie.original_title) {
            oriTitle = `<p>${this._movie.original_title}</p>`;
        }

        this._movie.title;
        this.shadowDOM.innerHTML = `
            <style>
            :host {
                min-width: 150px;
                flex-grow: 1;
                background-color: #fff;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                overflow: hidden;
                display: flex;
                align-items:center;
                height:295px;
                padding-right:10px;
                max-width: 560px;
            }


            .legend {
                width:100%;
                height:85%;
                padding: 10px;
                overflow: auto;
            }

            .legend h4 {
                margin-top:0;
                color: #27ae60;
                font-size: 24px;
                margin-bottom: 5px;
            }
            
            .legend h5 {
                color: #192a56;
                font-size: 14px;
                margin: 10px auto;
                padding:0;
            }
            
            .legend p {
                margin-top: 10px;
                line-height: 1.5;
            }
            
            .legend a {
                color: #27ae60;
            }
            
            .legend a:hover {
                text-decoration: underline;
            }

        
            
            .img img {
                object-fit: cover;
                width: 200px;
                height: 300px;
            }

            
            ::-webkit-scrollbar {
            width: 10px; 
            }

            ::-webkit-scrollbar-thumb {
            background-color: #eaeaea;
            opacity: .7;
            border-radius: 5px; 
            }

            

            ::-webkit-scrollbar-track {
            background-color: #fff;
            }

            .zoom {
                cursor: zoom-in;
            }

            .imgShow {
                top: 0;
                bottom: 0;
                z-index: 2;
                position: fixed;
                width: 100vw;
                background-color: rgba(0, 0, 0, 0.8);
                display: none;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                cursor: zoom-out;
                left:0;
                right:0;
            }

            .imgShow img {
                order: 1;
                max-height: 80vmin;
                display: block;
                cursor: zoom-out;
            }

            .imgShow h6 {
                font-size: 16px;
                order: 2;
                padding: 5px;
                margin-top: 10px;
                background-color: #192a56;
                color: white;
            }

            @media only screen and (max-width: 1360px) {
                :host{
                    max-width: 480px;
                }
            }
            @media only screen and (max-width: 1160px) {
                :host{
                    max-width: 600px;
                }
            }
            @media only screen and (max-width: 560px) {
                :host{
                    padding-top:16px;
                    flex-direction:column;
                    height:unset;
                }

                .legend {
                    width:85%;
                    height:85%;
                    overflow: auto;
                }

                .legend h4 {
                    margin-top:0;
                    color: #27ae60;
                    font-size: 20px;
                    margin-bottom: 5px;
                }
                
                .legend h5 {
                    color: #192a56;
                    font-size: 12px;
                    margin: 10px auto;
                    padding:0;
                }
                
            }
            </style>

            <div class="img">
                <img class="zoom" src="https://image.tmdb.org/t/p/original${this._movie.poster_path}" />
            </div>
            <div class="legend">
                <h4>${this._movie.title}</h4>
                ${oriTitle}
                <h5>Release on ${this._movie.release_date}</h5>
                <h5>Genre: ${this._movie.genre}</h5>
                <h5>Rating: ${this._movie.vote_average}/10 (${this._movie.vote_count
            } vote)</h5>
                <h5>Description : "${this._movie.overview}"</h5>
                
            </div>

            <div class="imgShow">
                <h6>Click anywhere to close the image</h6>
            </div>
            `;
        const Img = this.shadowRoot.querySelectorAll('.zoom');
        const ImgShow = this.shadowRoot.querySelector('.imgShow');

        Img.forEach(img => {
            img.addEventListener('click', () => {
                let clone = img.cloneNode(true);
                ImgShow.appendChild(clone);
                ImgShow.style.display = 'flex';
            });
        });
        ImgShow.addEventListener('click', () => {
            ImgShow.removeChild(ImgShow.lastElementChild);
            ImgShow.style.display = 'none';
        });
    }

}

customElements.define('movie-item', MovieItem);



