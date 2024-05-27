const template = document.createElement('template')

template.innerHTML = `
    <style>
        .UserInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 479px;
            max-height: 374px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 48px 133px;
            border-radius: 8px;
            background-color: #FFFFFF;
        }
        
        .UserInfo img {
            width: 100px;
            aspect-ratio: 1;
            margin-bottom: 16px;
        }
        
        
        .UserInfo__name {
            margin-bottom: 12px;
            color: var(--color-black);
            font-family: "Inter";
            font-size: 24px;
            font-weight: 500;
            line-height: 31.2px;
        }
        
        .UserInfo__supporters {
            display: flex;
            gap: 10px;
            align-items: center;
            color: var(--color-black);
            font-family: "Inter";
            font-size: 16px;
            font-weight: 500;
            line-height: 22.4px;
            text-align: left;
        }
        
        .UserInfo__supporters p {
            margin: 0;
        }
        
        .UserInfo button {
            width: 164px;
            height: 56px;
            padding: 16px 32px 16px 32px;
            gap: 8px;
            border-radius: 8px;
            margin-top: 40px;
            background-color: var(--color-black);
            color: #FFFFFF;
            font-family: "Inter";
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            white-space: nowrap;
        }
    </style>
        
    <div class="UserInfo">
        <img src="/assets/img/person.png" alt="image">
        
        <div class="UserInfo__name">
            Brooklyn Simmons
        </div>
        
        <div class="UserInfo__supporters">
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4944 0.589844C13.5597 0.589844 11.9064 1.96892 10.9981 2.91969C10.0898 1.96892 8.44028 0.589844 6.50644 0.589844C3.17321 0.589844 0.84613 2.91323 0.84613 6.23907C0.84613 9.90369 3.73628 12.2723 6.53228 14.5634C7.85228 15.6462 9.21844 16.7649 10.2661 18.0055C10.4424 18.2132 10.7009 18.3332 10.9723 18.3332H11.0258C11.2981 18.3332 11.5557 18.2123 11.7311 18.0055C12.7806 16.7649 14.1458 15.6452 15.4667 14.5634C18.2618 12.2732 21.1538 9.90461 21.1538 6.23907C21.1538 2.91323 18.8267 0.589844 15.4944 0.589844Z" fill="currentColor"/>
            </svg>
        
            <p>12 supporters</p>
        </div>
        
        <button>Join for more</button>
    </div>
`

class UserInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('user-info-el', UserInfo);

