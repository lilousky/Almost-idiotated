console.log("Loaded Module 3 (Wiiki Fixer)");
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedfixedits = text.replace('made a stupid edits', 'made a stupid edit');

            if (replacedfixedits!== text) {
                element.replaceChild(document.createTextNode(replacedfixedits), node);
            }

        }
    }
}