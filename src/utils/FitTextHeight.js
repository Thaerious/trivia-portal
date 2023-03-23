/**
* Dynamically adjust the font size to fit the text within an element.
* The the target proxy must have a 'fontSize' field which is used
* by the style sheet to set font size.
*/
class FitTextHeight {
    static GRANULARITY = 1 / 16;
    static DELAY = 0;
    static TOLERANCE = 1 / 16;
    static MAX = 2.375;
    static MIN = 1 / 16;

    constructor(proxy, element) {
        this.proxy = proxy;
        this.element = element;
    }

    /**
     * Calculate the difference in width between the element and it's parent.
     * A value < 0 means the element is larger.
     */
    get diff() {
        let hDiff = this.element.parentElement.offsetHeight - this.element.scrollHeight;
        hDiff = Math.trunc(hDiff / FitTextHeight.GRANULARITY) * FitTextHeight.GRANULARITY;
        return hDiff;
    }

    async fit() {
        return new Promise((resolve, reject) => {
            if (this.proxy.getText() === "") return;
            this.shrink(resolve);
        });
    }

    async shrink(cb = () => { }) {
        if (this.diff > -FitTextHeight.TOLERANCE) return cb();

        this.proxy.fontSize = this.proxy.fontSize - FitTextHeight.GRANULARITY;
        if (this.proxy.fontSize <= FitTextHeight.MIN) {
            this.proxy.fontSize = FitTextHeight.MIN;
            return cb();
        }

        setTimeout(() => {
            this.shrink(cb);
        }, FitTextHeight.DELAY);
    }
}

export default FitTextHeight;

