export const querySelectorAllWithShadowRoots = (selector) => {
    const elements = new Set(Array.from(document.querySelectorAll(selector)));

    const processShadowRoot = (shadowRoot) => {
        const shadowElements = shadowRoot.querySelectorAll(selector);

        shadowElements.forEach(el => elements.add(el));

        shadowRoot.querySelectorAll('*').forEach(el => {
            if (el.shadowRoot) processShadowRoot(el.shadowRoot);
        });
    };

    const processNode = (node) => {
        if (node.shadowRoot) processShadowRoot(node.shadowRoot);

        node.childNodes.forEach(child => {
            if (child.nodeType === Node.ELEMENT_NODE) processNode(child);
        });
    };

    document.querySelectorAll('*').forEach(el => {
        if (el.shadowRoot) processShadowRoot(el.shadowRoot);

        processNode(el);
    });

    return Array.from(elements);
}



export const setElementContent = (el, value) => {
    el.textContent = value;
};

export const updateRefView = (key, value) => {
    querySelectorAllWithShadowRoots(`#${ key }`)[0].textContent = value;
};
