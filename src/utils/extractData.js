/**
 * Create a single tier JS object from a DOM root element.
 * Examines the DOM element and all of it's decendents and creates an
 * object with keys based on the elements 'name' attribute.  The 
 * values will be extracted from an element's 'innerText'.  To change the
 * value source set the value-src attribute to the desired field.
 * 
 * Note that the resulting object has a depth of 1, repeated values will
 * get overwritten.  Order is not guaranteed.
 */

function extractData(root) {
    const json = {};

    for (const child of root.querySelectorAll('[name]')) {
        const field = child.hasAttribute("value-src") ? child.getAttribute("value-src") : "innerText";
        json[child.getAttribute("name")] = child[field].trim();
    }
    return json;
}

export default extractData;
