import {
    querySelectorAllWithShadowRoots,
    updateRefView
} from "../utils/domUtils.js";

import { likes } from '../refs/likes.js';
import { comments } from "../refs/commentsCounter.js";


const getElementByDataId = (id) => {
    return querySelectorAllWithShadowRoots(`[data-id="${ id }"]`)[0];
}

const getElementById = (id) => {
    return querySelectorAllWithShadowRoots(`#${ id }`)[0];
}

export const handlers = {
    hilightComment: (dataId) => {
        const parentEl = getElementByDataId(dataId)

        parentEl.parentNode.parentElement.style.background = 'var(--color-extra-light-gray)'
    },

    resetCommentHilight: (dataId) => {
        const parentEl = getElementByDataId(dataId)

        parentEl.parentNode.parentElement.style.background = 'none'
    },

    handleLikeClick: (dataId) => {
        const likesField= getElementByDataId(dataId)
        const isLiked= likesField.getAttribute('data-clicked') === 'true';

        if (!likes.getValue()) likes.setValue(dataId, 0)

        updateRefView(dataId, likes.getValue(dataId));

        likesField.setAttribute('data-clicked', String(!isLiked));

        likesField.style.color = isLiked ? 'var(--color-light-gray)' : 'var(--color-red)';

        likes.setValue(dataId, isLiked ? -1 : 1);
    },

    addComment: () => {
        const inputEl = getElementByDataId('commentText');
        const value = inputEl.value;

        const sendCommentButton = getElementByDataId('sendCommentButton')
        const parentCommentId = sendCommentButton.getAttribute('reply-to-id')

        let commentEl;
        let container;

        if (parentCommentId) {
            commentEl = document.createElement('el-comment-reply');

            commentEl.innerHTML = `
                <span slot="name">Replay: Some user</span>
                <span slot="text">${ value }</span>
            `;

            container = getElementById(parentCommentId)
        } else {
            commentEl = document.createElement('el-comment');

            commentEl.innerHTML = `
                <span slot="name">Some user</span>
                <span slot="text">${ value }</span>
            `;

            container = document.querySelector('.Blog__comments-wrapper');
        }

        inputEl.value = ''
        inputEl.placeholder = 'Comment here...'

        if (parentCommentId) handlers.resetCommentHilight(parentCommentId);

        sendCommentButton.removeAttribute('reply-to-id')

        container.appendChild(commentEl);

        comments.setValue('comments', 1)
    },

    reply: (dataId) => {
        const inputEl = getElementByDataId('commentText');

        inputEl.placeholder = 'Replay...'
        inputEl.focus()

        const sendCommentButton = getElementByDataId('sendCommentButton')

        handlers.hilightComment(dataId)

        sendCommentButton.setAttribute('reply-to-id', String(dataId))
    },
}
