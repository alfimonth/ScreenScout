import logo from '../../img/logo.png';
class TopBar extends HTMLElement {
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
                user-select: none;
                background-color: #fff;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                padding: 12px 7%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                z-index: 1;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                flex-wrap: wrap;
        }

        a {
            text-decoration: none;
        }
        
        h1 {
            font-size: 30px;
            font-weight: bolder;
            vertical-align: top;
            line-height: 42px;
            color: #192a56;
        }
        
        .logo h1,
        .logo img {
            display: inline;
            vertical-align: middle;
        }
        
        .logo img {
            width: 42px;
        }
        
        nav ul {
            padding-inline-start: 0;
        }
        
        nav ul li {
            display: inline;
            list-style: none;
        }
        
        nav ul li a {
            font-size: 16px;
            border-radius: 5px;
            padding: 5px 12px;
            color: #666;
        }
        
        nav ul li a:hover,
        nav ul li a.active {
            background-color: #27ae60;
            color: #fff;
        }
        
        .navButton {
            width: 28px;
            height: 28px;
            flex-direction: column;
            justify-content: space-around;
            cursor: pointer;
            display: none;
        }
        
        .navButton div {
            width: 100%;
            height: 20%;
            border-radius: 5px;
            background-color: #27ae60;
        }

        @media only screen and (max-width: 700px) {
            h2 {
                font-size: 32px;
            }
        
            .navButton {
                display: flex;
            }

            nav.on {
                display: block;
            }
        
            nav {
                display: none;
                width: 100%;
            }
        
            nav ul {
                width: 100%;
                margin: 0;
                margin-top: 10px;
            }
        
            nav ul li a {
                background-color: #eee;
                display: block;
                margin-bottom: 5px;
            }
        }
        @media only screen and (max-width: 420px) {
            .logo h1 {
                font-size: 24px;
            }
        }

        @media only screen and (max-width: 320px) {
            .logo h1 {
                display: none;
            }
        }

        @media only screen and (max-height: 210px) {
            :host {
                position: absolute;
            }
        }
        
        </style>
        <div class="logo">
            <img src="${logo}" alt="ScreenScoutLogo" />
            <h1>ScreenScout</h1>
        </div>
        <div class="navButton">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav>
            <ul>
                <li><a href="#">Search</a></li>
                <li><a id='popularLink'>Popular</a></li>
                <li><a id='aboutLink'>About</a></li>
            </ul>
        </nav>

        `;
    }
}

customElements.define('top-bar', TopBar);

const topBar = document.querySelector('top-bar');
const shadowRoot = topBar.shadowRoot;
const navButton = shadowRoot.querySelector('.navButton');
const nav = shadowRoot.querySelector('nav');
const navItem = shadowRoot.querySelectorAll('nav ul li a');

navButton.addEventListener('click', () => {
    nav.classList.toggle('on');
});

navItem.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('on');
    });
});

const popularLink = shadowRoot.querySelector('#popularLink');
popularLink.addEventListener('click',()=>{
    document.querySelector('popular-list').scrollIntoView();
});
const aboutLink = shadowRoot.querySelector('#aboutLink');
aboutLink.addEventListener('click',()=>{
    document.querySelector('about-card').scrollIntoView();
});
