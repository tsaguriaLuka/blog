import { getRandomUUID } from "../utils/randomUuid.js";


const template = document.createElement('template')

template.innerHTML = `
    <style>
        .Comment {
            display: flex;
        }
        
        .Comment img {
            width: 48px;
            height: 48px;
        }
        
        .Comment .date {
            font-family: "Inter";
            font-size: 16px;
            font-weight: 400;
            line-height: 20.8px;
            text-align: left;
            color: var(--color-gray);
        }
        
        .Comment__wrapper {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin: 0 24px 0 16px;
            width: 100%;
        }
        
        .Comment__wrapper .name {
            font-family: "Inter";
            font-size: 16px;
            font-weight: 600;
            line-height: 19.36px;
            text-align: left;
            color: var(--color-black);
        }
        
        .Comment__wrapper .text {
            font-family: "Inter";
            font-size: 16px;
            font-weight: 400;
            line-height: 20.8px;
            text-align: left;
            color: var(--color-black);
        }
        
        .Comment__action {
            display: flex;
            gap: 6px;
            align-items: center;
            cursor: pointer;
            font-family: "Inter";
            font-size: 16px;
            font-weight: 400;
            line-height: 20.8px;
            text-align: right;
            color: var(--color-light-gray);
        }
        
        .Comment__action img {
            color: var(--color-gray);
        }
        
        .Comment__action p {
            color: var(--color-gray);
            margin: 0;
        }
    </style>
    
    <div class="Comment">
        <img src="/assets/img/person.png" alt="image">
        <div class="Comment__wrapper">
            <div class="name"><slot name="name">Default Name</slot></div>
            <div class="text"><slot name="text">Default Text</slot></div>
    
            <div class="Comment__action">
                <div
                    class="Comment__action"
                    data-clicked="false"
                    data-model-click="handleLikeClick"
                >
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4944 0.589844C13.5597 0.589844 11.9064 1.96892 10.9981 2.91969C10.0898 1.96892 8.44028 0.589844 6.50644 0.589844C3.17321 0.589844 0.84613 2.91323 0.84613 6.23907C0.84613 9.90369 3.73628 12.2723 6.53228 14.5634C7.85228 15.6462 9.21844 16.7649 10.2661 18.0055C10.4424 18.2132 10.7009 18.3332 10.9723 18.3332H11.0258C11.2981 18.3332 11.5557 18.2123 11.7311 18.0055C12.7806 16.7649 14.1458 15.6452 15.4667 14.5634C18.2618 12.2732 21.1538 9.90461 21.1538 6.23907C21.1538 2.91323 18.8267 0.589844 15.4944 0.589844Z" fill="currentColor"/>
                    </svg>
    
                    <p>0</p>
                </div>
                
                <svg
                    width="20"
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="Comment__action"
                    data-model-click="reply"
                >
                    <path d="M8.17381 2.07938C8.58559 2.26199 8.85415 2.67378 8.85415 3.12495V5.41662H12.8646C16.345 5.41662 19.1666 8.23823 19.1666 11.7187C19.1666 15.7757 16.2484 17.5875 15.5788 17.9527C15.4892 18.0029 15.389 18.0208 15.2887 18.0208C14.8984 18.0208 14.5833 17.7021 14.5833 17.3154C14.5833 17.0468 14.7373 16.7998 14.9342 16.6171C15.2708 16.302 15.7291 15.6718 15.7291 14.5869C15.7291 12.6891 14.1894 11.1494 12.2916 11.1494H8.85415V13.441C8.85415 13.8922 8.58917 14.304 8.17381 14.4866C7.75844 14.6692 7.27863 14.594 6.94204 14.2932L1.21287 9.13699C0.972961 8.91499 0.833313 8.60704 0.833313 8.2812C0.833313 7.95535 0.972961 7.64741 1.21287 7.42898L6.94204 2.27273C7.27863 1.96837 7.76202 1.89318 8.17381 2.07938Z" fill="currentColor"/>
                </svg>
            </div>
        </div>
    </div>
`

class Comment extends HTMLElement {
    constructor() {
        super();

        const randomUUID = getRandomUUID()

        const uniqueCommentId = `comment-${ randomUUID }`;
        const uniqueLikesId = `like-${ randomUUID }`;

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const commentWrapper = this.shadowRoot.querySelector('.Comment__wrapper');
        const replyButton = this.shadowRoot.querySelector('.Comment__action[data-model-click="reply"]');
        const likeButton = this.shadowRoot.querySelector('.Comment__action[data-model-click="handleLikeClick"]');

        commentWrapper.id = uniqueCommentId;

        likeButton.setAttribute('data-id', uniqueLikesId);
        likeButton.querySelector('p').id = uniqueLikesId;

        replyButton.setAttribute('data-id', uniqueCommentId);
    }
}

customElements.define('el-comment', Comment);
