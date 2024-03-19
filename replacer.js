const words = sortedWords;

let regexs = new Map();
for (var word of sortedWords.keys()) {
    regexs.set(word, new RegExp(`\\b${word}\\b`, 'gi'));
}

function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        if (node.parentNode && node.parentNode.nodeName === 'TEXTAREA')
            return;
        var content = node.textContent;
        for (let [word, replacement] of sortedWords) {
            if (content.trim().length > 0) {
                const regex = regexs.get(word);
                content = content.replace(regex, replacement);
            }
        }
        node.textContent = content;
    }
    else {
        for (var i = 0; i < node.childNodes.length; i++) {
            replaceText(node.childNodes[i])
        }
    }
}

replaceText(document.body);

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                const newNode = mutation.addedNodes[i];
                replaceText(newNode);
            }
        }
    });
});
observer.observe(document.body, {
    childList: true,
    subtree: true
});