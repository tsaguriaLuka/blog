import { querySelectorAllWithShadowRoots, setElementContent } from './utils/domUtils.js';
import { handlers } from './functions/handlers.js';

const callHandler = (funcName, id) => {
    try {
        handlers[funcName](id);
    } catch (error) {
        console.error(`Error in function: ${ funcName }`);
    }
}

const updateModelAndViewInput = (key, value) => {
    document.querySelectorAll(`[data-bind="${ key }"]`).forEach(el => {
        setElementContent(el, value);
    });
};

const ToggleCommentsWrapperVisibility = () => {
    const commentsWrapper = document.querySelector('.Blog__comments-wrapper');

    if (!commentsWrapper.children.length) return commentsWrapper.classList.add('hidden');

    commentsWrapper.classList.remove('hidden');
}

const handleDOMChanges = () => {
    ToggleCommentsWrapperVisibility();

    querySelectorAllWithShadowRoots('[data-model-click]').forEach(button => {
        button.removeEventListener('click', clickHandler);
        button.addEventListener('click', clickHandler);
    });

    querySelectorAllWithShadowRoots('[data-model-input]').forEach(input => {
        input.removeEventListener('input', inputHandler);
        input.addEventListener('input', inputHandler);
    });
};

const clickHandler = (event) => {
    const button = event.currentTarget;

    const id = button.getAttribute('data-id');
    const funcName = button.getAttribute('data-model-click');

    callHandler(funcName, id || null);
};

const inputHandler = (event) => {
    const input = event.currentTarget;
    const key = input.getAttribute('data-model-input');

    updateModelAndViewInput(key, input.value);
};

const observer = new MutationObserver(handleDOMChanges);

const observerConfig = {
    childList: true,
    subtree: true
};

observer.observe(document.body, observerConfig);

handleDOMChanges();
