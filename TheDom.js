class TheDom {
    createElement(tagName, attributes = {}, textContent = "") {
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
            jammer("Error creating element:" + error);
            return null;
        }
    }

    createButton(text, type, attributes = {}) {
        return this.createElement("button", { type, ...attributes }, text);
    }

    createDiv(attributes = {}, textContent = "") {
        return this.createElement("div", attributes, textContent);
    }

    createInput(attributes = {}) {
        return this.createElement("input", { type: "text", ...attributes });
    }

    createParagraph(attributes = {}, textContent = "") {
        return this.createElement("p", attributes, textContent);
    }

    createHeader(level, attributes = {}, textContent = "") {
        if (level >= 1 && level <= 6) {
            const tagName = `h${level}`;
        } else {
            jammer("Invalid header level. Must be between 1 and 6. Nimm 2!");
            const tagName = 'h2';
        }
        return this.createElement(tagName, attributes, textContent);

    }

    createImage(src, alt, attributes = {}) {
        if (!alt) {
            alt = "Alternative Text: " + src;
        }
        return this.createElement("img", { src, alt, ...attributes });
    }

    createLink(href, text, attributes = {}) {
        return this.createElement("a", { href, ...attributes }, text);
    }

    // Add more methods for other elements as needed
}

// Usage
const domHelper = new TheDom();
const button = domHelper.createButton("Click me", "button", { id: "myButton" });
const paragraph = domHelper.createParagraph({ class: "highlight" }, "This is a paragraph.");
const header = domHelper.createHeader(2, {}, "Subheading");
const image1 = domHelper.createImage("image.jpg", "Image Alt Text", { class: "image" });
const image2 = domHelper.createImage("image2.jpg", "", { class: "image" });
const link = domHelper.createLink("https://example.com", "Visit Example", { target: "_blank" });

// Append elements to the document or other containers
document.body.appendChild(button);
document.body.appendChild(paragraph);
document.body.appendChild(header);
document.body.appendChild(image1);
document.body.appendChild(image2);
document.body.appendChild(link);
