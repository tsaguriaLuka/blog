const template = document.createElement('template')

template.innerHTML = `
    <style>
        header {
            position: fixed;
            width: 100%;
            z-index: 99;
            top: 0;
            box-sizing: border-box;
            left: 0;
            height: 72px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 24px;
            background: #FFFFFF;
            box-shadow: 0 4px 15px 0 #0000000F;
        }
    
        .Header__menu {
            display: flex;
            align-items: center;
            padding: 4px;
            background: #F3F3F3;
            border-radius: 500px;
            gap: 8px;
            cursor: pointer;
        }
    </style>
    
    <header>
        <img
            class="Header__logo"
            src="/assets/img/Logo.png"
            alt="logo"
        >
    
        <div class="Header__menu">
            <img
                src="/assets/img/person.png"
                alt="person"
            >
    
            <img
                src="/assets/img/menu.png"
                alt="menu"
            >
        </div>
    </header>
`

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('my-header', Header);

