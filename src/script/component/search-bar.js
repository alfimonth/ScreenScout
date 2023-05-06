import bg from '../../img/bg.jpg';
class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

        :host {
            flex-wrap: wrap;
            display: flex;
            padding: 0 7% 16px;
            height: calc(100vmin);
            background-image: url("${bg}");
            background-size: cover;
            flex-direction: column;
            justify-content: center;
        }
        
        h2 {
            text-shadow: 0px 0px 10px#fff;
            font-size: 64px;
            color: #192a56;
            font-size: 64px;
            margin: 5px 0;
        }

        .search-container{
            position: relative;
        }
        #searchElement {
            border: none;
            padding: 12px 20px;
            font-size: 18px;
            outline: none;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            width: 70%;
            max-width: 500px;
            transition: box-shadow 0.3s ease;
        }

        
        
        #searchElement:focus {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        }
        
        #searchButtonElement {
            border: none;
            padding: 12px 20px;
            font-size: 18px;
            background-color: #27ae60;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        
        #searchButtonElement:hover {
            background-color: #27814c;
        }

        @media only screen and (max-width: 700px) {
            h2 {
                font-size: 42px;
            }
        }

        @media only screen and (max-width: 420px) {
            h2 {
                text-align: center;
                font-size: 32px;
            }

            #searchButtonElement {
                padding: 12px 10px;
            }
        }

        @media only screen and (max-width: 320px) {

            :host{
                padding-top:50px;
            }
            h2 {
                margin-to:50px;
                text-align: center;
                font-size: 26px;
            }

            #searchButtonElement {
                padding: 8px 5px;
            }
            #searchElement {
                width: 100%;
                margin-bottom:5px;
            }
            #searchButtonElement {
                float:right;
            }
        }
        @media only screen and (max-width: 210px) {
            h2 {
                font-size: 16px;
            }
            #searchButtonElement {
                padding: 3px 5px;
            }
        }

        .loading {
            top: 60px;
            box-shadow:0 0 5px white;
            left:0;
            position: absolute;
            border: 16px solid #fff; 
            border-top: 16px solid #27ae60; 
            border-radius: 50%;
            width: 16px;
            height: 16px;
            animation: spin 2s linear infinite;
            margin-left: 10px;
            display: none;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        </style>
		
        <h2>Search Movie</h2>
        <div id="search-container" class="search-container">
            <input placeholder="type movie title" id="searchElement" type="search"/>
            <button id="searchButtonElement" type="submit">Search</button>
            <div id="loading" class="loading"></div>
        </div>
        `;
        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);