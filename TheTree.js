const TheTree = (function() {
    function treeElement(existing, operation, newNode) {
        try {
            let existingElement = existing;

            if (typeof existing === "string") {
                existingElement = document.getElementById(existing);
                if (!existingElement) {
                    existingElement = document.createElement("div");
                    existingElement.id = existing;
                    document.body.appendChild(existingElement);
                }
            } else if (existingElement.tagName !== "DIV") {
                throw new Error("Existing element must be a div or a valid ID string.");
            }

            if (typeof newNode === "string") {
                newNode = document.createTextNode(newNode);
            }

            if (!(newNode instanceof Element)) {
                throw new Error("New node must be an HTMLElement or a valid HTML string.");
            }

            switch (operation) {
                case '/':
                    existingElement.appendChild(newNode);
                    break;
                case '=':
                    existingElement.innerHTML = newNode.innerHTML;
                    break;
                case ':':
                    if (newNode instanceof Text) {
                        existingElement.innerText = newNode.textContent;
                    } else {
                        throw new Error("Invalid operation. Text content can only be replaced with a Text node.");
                    }
                    break;
                default:
                    throw new Error("Invalid operation. Use '/', '=', or ':'.");
            }
        } catch (error) {
            console.error("Error in treeElement:", error);
        }
    }

    return {
        treeElement
    };
})();
