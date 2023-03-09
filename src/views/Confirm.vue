<script>
import FloatPanel from "../components/FloatPanel.vue";

export default {
    name: 'Confirm',
    data() {
        return {}
    },
    methods: {
        goHome() {
            this.$router.push("/");
        },        
    },
    mounted() {
        this.$refs.confirmPanel.show();
    },
    components: {
        FloatPanel
    }
}
</script>

<template>
    <FloatPanel ref="confirmPanel" title="Email Confirmed" sticky>
        <div class="container">
            <div class="button green" @click="goHome">
                <span class="label">Continue</span>
            </div>
        </div>
    </FloatPanel>
</template>

<style lang="scss" scoped>
@import '../assets/styles/button.scss';

.container {
    display: flex;
    flex-direction: column;
}
</style>