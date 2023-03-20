/**
 * Set the font-size as a multiple of the css variable --fit-text-unit.
 * Style example: calc(45 * var(--fit-text-unit))
 */
class FitText {
    static GRANULARITY = 5;
    static DELAY = 0;
    static TOLERANCE = 5;

    constructor(proxy, element, target) {
        this.proxy = proxy;
        this.element = element;
        this.target = target;
    }

    get diff() {
        let hDiff = this.element.parentElement.offsetHeight - this.element.scrollHeight;
        let wDiff = this.element.parentElement.offsetWidth - this.element.scrollWidth;

        hDiff = Math.trunc(hDiff / FitText.GRANULARITY) * FitText.GRANULARITY;
        wDiff = Math.trunc(wDiff / FitText.GRANULARITY) * FitText.GRANULARITY;

        return {
            height: hDiff,
            width: wDiff
        }
    }

    notify(cb) {
        this.direction = 0;
        setImmediate(() => this.onResize(cb));
    }

    fit() {
        this.shrink("width",
            () => this.grow("width",
                () => this.shrink("height",
                    () => this.grow("height")
                )
            )
        );
    }

    async shrink(axis, cb = () => { }) {
        if (this.diff[axis] > (-1 * FitText.TOLERANCE)) return cb();
        this.proxy.size = this.proxy.size - FitText.GRANULARITY;
        setTimeout(() => {
            this.shrink(axis);
        }, FitText.DELAY);
    }

    grow(axis, cb = () => { }) {
        if (this.diff[axis] < FitText.TOLERANCE) return cb();
        this.proxy.size = this.proxy.size + FitText.GRANULARITY;
        setTimeout(() => {
            this.grow(axis);
        }, FitText.DELAY);
    }
}

export default FitText;

