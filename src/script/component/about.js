import logo from '../../img/logo.png';
class About extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

        :host {
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            text-align: center;
            box-sizing: border-box;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border-radius: 16px;
            height: fit-content;
            margin-bottom: 32px;
            width: 100%;
        }
        
        h3 {
            text-align: center;
            color: #27ae60;
            font-size: 32px;
            width: 100%;
            margin: 0;
        }
        
        .img {
            padding: 16px;
            width: 100px;
        }
        
        .img img {
            width: 100%;
            object-fit: cover;
        }
        
        .legend {
            width: 80%;
        }
        
        .legend h1 {
            text-align: left;
            margin: 20px 0 10px;
            color: #192a56;
        }
        
        .legend h3 {
            text-align: left;
            font-size: 16px
        }

        @media only screen and (max-width: 1200px) {     
            :host {
                width: 100%;
            }
        
            .legend {
                width: 70%;
            }
        }

        @media only screen and (max-width: 600px) {
            .img {
                margin: auto;
                padding-bottom: 5px;
            }
        
            .legend {
                width: 100%;
            }
        
            .legend h1 {
                text-align: center;
                margin: 5px 0;
            }
        
            .legend h3 {
                text-align: center;
            }
        }
        
        </style>
		
        <h3>About</h3>
        <div class="img">
            <img src="${logo}" alt="classicfoodLogo" />
        </div>
        <div class="legend">
            <h1>ScreenScout</h1>
            <h3>"ScreenScout is an innovative and user-friendly web application designed to help movie lovers find their favorite films quickly and easily. Using the power of TMDBAPI and movie data from around the world."</h3>
        </div>

        `;
    }
}

customElements.define('about-card', About);