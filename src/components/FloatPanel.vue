<script>
export default {
    name: "FloatPanel",
    props: {
        title: String,
        sticky: Boolean,
        back: Boolean
    },
    methods: {
        hide() {
            this.hidden = true;
            this.visible = false;
            this.initial = false;
        },
        show() {
            this.hidden = false;
            this.visible = true;
            this.initial = false;
        },
        goBack() {
            this.$refs[this.currentFloat[0]].hide();
            this.currentFloat.shift();
            if (this.currentFloat.length > 0) {
                this.$refs[this.currentFloat[0]].show();
            }
        },
        showFloat(floatName) {
            this.$refs[this.currentFloat[0]].hide();
            this.$refs[floatName].show();
            this.currentFloat.unshift(floatName);
        },        
    },
    data() {
        return {
            hidden: false,
            visible: false,
            initial: true,
            currentFloat: ["loginFloat"]
        }
    }
}
</script>

<template>
    <div :class="{ initial: initial, hidden: hidden, visible: visible }" class="popup-background"
        v-on="{ click: !sticky ? hide : null }">
        <div class="popup-content">
            <div class="popup-header">
                <div v-if="back" @click='$emit("back")' class='gg-arrow-left'></div>
                <div class="title">{{ title }}</div>
            </div>
            <div class="popup-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/gg-arrow-left.css';

.popup-background {
    position: fixed;
    display: block;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.0);
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    margin: 0px;
    overflow: hidden;

    --color-background-active: rgba(0, 0, 64, 0.2);
    --color-background-inactive: rgba(255, 255, 255, 0.0);

    &.initial {
        visibility: hidden;
    }

    &.hidden {
        z-index: 999;
        animation: 1s hide forwards;

        .popup-content {
            animation: sweepout 1s forwards;
        }
    }

    &.visible {
        animation: 1s show forwards;

        .popup-content {
            animation: sweepin 1s forwards;
        }
    }
}

.popup-content {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    width: 50%;
    min-width: 500px;
    max-width: 750px;
    background-color: var(--color-panel-background);
    z-index: 1001;
}

.popup-header {
    background-color: var(--color-panel-header);
    text-align: center;
    color: whitesmoke;
    border-radius: 10px 10px 0px 0px;
    user-select: none;

    .title{
        text-align: center;
        font-size: var(--font-size-panel-header);
        font-weight: var(--font-weight-panel-header);
    }
}

.popup-body {
    padding: 25px;
    font-size: var(--font-size-panel);
    font-weight: var(--font-weight-panel);
    color: whitesmoke;
}

@keyframes hide {
    from {
        visibility: visible;
        background-color: var(--color-background-active);
    }

    to {
        visibility: hidden;
        background-color: var(--color-background-inactive);
    }
}

@keyframes show {
    from {
        visibility: hidden;
        background-color: var(--color-background-inactive);
    }

    to {
        visibility: visible;
        background-color: var(--color-background-active);
    }
}

@keyframes sweepout {
    0% {
        transform: translate(-50%, -50%);
        left: 50%
    }

    30% {
        transform: translate(-50%, -50%);
        left: 45%
    }

    100% {
        transform: translate(0%, -50%);
        left: 100%
    }
}

@keyframes sweepin {
    0% {
        transform: translate(-100%, -50%);
        left: 0;
    }

    70% {
        transform: translate(-50%, -50%);
        left: 55%
    }

    100% {
        transform: translate(-50%, -50%);
        left: 50%
    }
}
</style>