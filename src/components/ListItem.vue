<script>

export default {
    data() {
        return {
            selected: false
        }
    }
}
</script>

<template>
    <div :class="{selected: selected}" class="outer" @click="this.$parent.select(this)">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';

@font-face {
    font-family: "password";
    src: url("@/assets/fonts/password.woff");
}

.outer {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(0, 0, 0, 0.25);
    }

    &.selected {
        background-color: rgba(0, 128, 255, 0.15);
        border: 1px solid rgba(0, 128, 255, 0.25);

        &:hover {
            background-color: rgba(0, 128, 255, 0.20);
            border: 1px solid rgba(0, 128, 255, 0.35);
        }
    }
}
</style>