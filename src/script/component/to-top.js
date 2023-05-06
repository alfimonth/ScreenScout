import up from '../../img/up.svg';
class ToTop extends HTMLElement {
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
            overflow: hidden;
            position: fixed;
            width: 40px;
            height: 40px;
            bottom: 40px;
            right: 40px;
            cursor: pointer;
            display: none;
            border-radius: 7px;
        }

        :host:hover img {
            background-color: #27ae60;
        }
        img {
            object-fit: cover;
            background-color: #192a56;
            width: 100%;
        }

        @media only screen and (max-width: 700px) {
            :host {
                right: 10px;
                bottom: 50px;
                opacity: 0.5;
            }
        }
        
        @media only screen and (max-height: 210px) {
            h6 {
                font-size: 10px;
            }
        }

        </style>
		
        <img src="${up}" alt="toTop" />
        `;
    }
}

customElements.define('to-top', ToTop);


const toTopButton = document.querySelector('to-top');
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = 'block';
    } else {
        toTopButton.style.display = 'none';
    }


};

toTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

