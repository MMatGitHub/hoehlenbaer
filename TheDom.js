const TheDom = (function() {
    function createElement(tagName, attributes = {}, textContent = "") {
        try {
            const element = document.createElement(tagName);

            for (const [attr, value] of Object.entries(attributes)) {
                element.setAttribute(attr, value);
            }

            if (textContent) {
                element.textContent = textContent;
            }

            return element;
        } catch (error) {
            console.error("Error creating element:", error);
            return null;
        }
    }

    function createButton(text, type, attributes = {}) {
        return createElement("button", { type, ...attributes }, text);
    }

    function createDiv(attributes = {}, textContent = "") {
        return createElement("div", attributes, textContent);
    }

    function createInput(attributes = {}) {
        return createElement("input", { type: "text", ...attributes });
    }

    function createParagraph(attributes = {}, textContent = "") {
        return createElement("p", attributes, textContent);
    }

    function createHeader(level, attributes = {}, textContent = "") {
        if (level >= 1 && level <= 6) {
            const tagName = `h${level}`;
        } else {
            console.error("Invalid header level. Must be between 1 and 6.");
            const tagName = 'h2';
        }
        return createElement(tagName, attributes, textContent);
    }

    function createImage(src, alt, attributes = {}) {
        if (!alt) {
            alt = "Alternative Text: " + src;
        }
        return createElement("img", { src, alt, ...attributes });
    }

    function createLink(href, text, attributes = {}) {
        return createElement("a", { href, ...attributes }, text);
    }

    return {
        createElement,
        createButton,
        createDiv,
        createInput,
        createParagraph,
        createHeader,
        createImage,
        createLink
        // Add more methods for other elements as needed
    };
})();