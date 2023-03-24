<script>

export default {
    methods: {
        getText() {
            return this.$refs.content.value;
        },
        setText(value) {
            this.$refs.content.value = value;
        },
        onShow() {
            setTimeout(() => {
                this.$refs.content.focus();
            }, 100);
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
    <div class="pane">
        <textarea ref="content" rows="10" tabindex="1"></textarea>
        <div ref="button" class="button green" 
            tabindex="0"
            @click="$emit('ok')">
            <span>Ok</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>