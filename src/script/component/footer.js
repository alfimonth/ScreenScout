import fb from '../../img/facebook.svg';
import ig from '../../img/instagram.svg';
import tw from '../../img/twitter.svg';
class Footer extends HTMLElement {
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
            background-color: #eee;
            padding: 16px 7%;
            display: flex;
            justify-content: space-between;
            align-items:center;
        }
        
        h3 {
            margin: 5px 0 0;
            font-size: 18px;
            color:#27ae60;
        }
        
        img {
            margin-right: 10px;
            width: 20px;
            fill: #27ae60;
        }
        
        </style>
		<div class="sosmed">
            <a href=""><img src="${fb}" alt="logo fb" /></a>
            <a href=""><img src="${ig}" alt="logo ig" /></a>
            <a href=""><img src="${tw}" alt="logo twitter" /></a>
        </div>
        <div class="credit">
            <h3>ScreenScout &copy;2023</h3>
        </div>
        

        `;
    }
}

customElements.define('foot-bar', Footer);