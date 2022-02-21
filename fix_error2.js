console.log("Loaded Module 2 (Wiiki Fixer)");
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedfix2 = text.replace('fixed error', 'made a stupid edit');

            if (replacedfix2 !== text) {
                element.replaceChild(document.createTextNode(replacedfix2), node);
            }

        }
    }
}