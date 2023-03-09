export default function (app) {
    app.directive('bubble', (el, binding, vnode) => {
        Object.keys(binding.modifiers).forEach(event => {
            console.log(`bubble ${event}`);
            console.log(vnode);
            
            // Bubble events of Vue components
            if (vnode.componentInstance) {
                console.log("here");
                vnode.componentInstance.$on(event, (...args) => {
                    console.log(`on ${event}`);
                    vnode.context.$emit(event, ...args)
                })

                // Bubble events of native DOM elements
            } else {
                el.addEventListener(event, payload => {
                    vnode.context.$emit(event, payload)
                })
            }
        })
    })
};