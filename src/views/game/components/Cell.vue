<script>
import FitText from "@/utils/FitText";

export default {
    name: 'Cell',
    data() {
        return {
            font: {
                color: 'whitesmoke',
                size: '50px'
            }
        }
    },
    computed: {
        size: {
            get() {
                return parseInt(this.font.size);
            },
            set(value) {
                this.font.size = value + "px";
            }
        }
    },
    methods: {},
    components: {},
    mounted() {
        const fitText = new FitText(this, this.$refs.inner_text, this.$refs.fit_to);
        fitText.fit();

        window.addEventListener("resize", (event) => {
            if (this.onResize) clearTimeout(this.onResize);
            this.onResize = setTimeout(() => {
                fitText.fit();
                this.onResize = undefined;
            }, 500);
        });
    }
}
</script>

<template>
    <div class="cell">
        <div ref="fit_to" class="fit-text">
            <div ref="inner_text" class="text">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../game.scss';

.fit-text {
    position: absolute;
    width: 80%;
    height: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.text {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    color: v-bind('font.color');
    font-size: v-bind('font.size');
}
</style>