/**
* Dynamically adjust the font size to fit the text within an element.
* The the target proxy must have a 'fontSize' field which is used
* by the style sheet to set font size.
*/
class FitTextWidth {
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
        let wDiff = this.element.parentElement.offsetWidth - this.element.scrollWidth;
        wDiff = Math.trunc(wDiff / FitTextWidth.GRANULARITY) * FitTextWidth.GRANULARITY;
        return wDiff;
    }

    async fit() {
        return new Promise((resolve, reject) => {
            if (this.proxy.getText() === "") return;            
            this.shrink(
                () => this.grow(resolve)
            );
        }); 
    }

    async shrink(cb = () => { }) {        
        if (this.diff > -FitTextWidth.TOLERANCE) return cb();

        this.proxy.fontSize = this.proxy.fontSize - FitTextWidth.GRANULARITY;
        if (this.proxy.fontSize <= FitTextWidth.MIN) {
            this.proxy.fontSize = FitTextWidth.MIN;
            return cb();
        }

        setTimeout(() => {
            this.shrink(cb);
        }, FitTextWidth.DELAY);
    }

    grow(cb = () => { }) {
        if (this.diff < FitTextWidth.TOLERANCE) return cb();
        
        this.proxy.fontSize = this.proxy.fontSize + FitTextWidth.GRANULARITY;
        if (this.proxy.fontSize >= FitTextWidth.MAX) {
            this.proxy.fontSize = FitTextWidth.MAX
            return cb();
        }

        setTimeout(() => {
            this.grow(cb);
        }, FitTextWidth.DELAY);
    }
}

export default FitTextWidth;

