<script>
import FitTextWidth from "@/utils/FitTextWidth";
import FitTextHeight from "@/utils/FitTextHeight";

export default {
    name: 'Cell',
    data() {
        return {
            font: {
                color: 'whitesmoke',
                size: '1em'
            }
        }
    },
    computed: {
        fontSize: {
            get() {
                return parseFloat(this.font.size);
            },
            set(value) {
                this.font.size = value + "em";
            }
        }    
    },
    methods: {
        async setText(value) {
            this.$refs.inner_text.innerText = value;
            const fitWidth = new FitTextWidth(this, this.$refs.inner_text);
            const fitHeight = new FitTextHeight(this, this.$refs.inner_text);

            await fitWidth.fit();
            await fitHeight.fit();
        },
        getText() {
            return this.$refs.inner_text.innerText
        }
    },
    components: {},
    mounted() {}
}
</script>

<template>
    <div class="cell">
        <div ref="fit_to" class="fit-text">
            <div ref="inner_text" class="text"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../game.scss';
.cell{
    font-size: calc(var(--reference-width) * 0.05);
    font-variant: small-caps;
}

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
    line-height: 100%;
}
</style>