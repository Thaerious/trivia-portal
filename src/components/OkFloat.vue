<script>
import FloatPanel from "@/components/FloatPanel.vue";

export default {
    name: "OkFloat",
    methods: {
        show() {
            console.log(this.$refs.floatPanel);
            window.x = this.$refs.floatPanel;
        }
    },
    computed: {
        message: {
            get() {
                return this.$refs.content.innerText;
            },
            set(value) {
                console.log(`message.set ${value}`);
                this.$refs.content.innerText = value;
            }
        }
    },
    components: {
        FloatPanel
    }
}
</script>

<template>
    <FloatPanel ref="floatPanel">
        <div class="container">
            <div ref="content" id="content" class="label"></div>
            <div class="button green" @click="$emit('ok')">
                <span>Ok</span>
            </div>
        </div>
    </FloatPanel>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
</style>