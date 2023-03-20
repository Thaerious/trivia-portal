<script>

export default {
    methods: {
        getText() {
            window.x = this.$refs.content;
            return this.$refs.content.value;
        },
        setText(value) {
            this.$refs.content.value = value;
        }
    },
    components: {},
    computed: {
        text: {
            get() {
                return this.$refs.content.value;
            },
            set(v) {
                this.$refs.content.value = v;
            }
        }
    },
}
</script>

<template>
    <div class="container">
        <textarea ref="content" rows="10"></textarea>
        <div class="button green" @click="$emit('ok')">
            <span>Ok</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>