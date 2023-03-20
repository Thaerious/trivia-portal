<script>
import Header from "@/components/Header.vue";
import FloatPanel from "@/components/FloatPanel.vue";
import OkPane from "@/components/OkPane.vue";
import { AtomSpinner } from 'epic-spinners'

export default {
    data() {
        return {
            currentFloat: [],
            hideSpinner: true
        }
    },
    methods: {
        goBack() {
            this.currentFloat[0].hide();
            this.currentFloat.shift();
            if (this.currentFloat.length > 0) {
                this.currentFloat[0].show();
            }
        },
        showFloat(float, event) {
            if (this.currentFloat.length > 0) {
                this.currentFloat[0].hide();
            }

            float.show(event);
            this.currentFloat.unshift(float);
        },
        message(message) {
            this.$refs.okPane.message = message;
            this.showFloat(this.$refs.okFloat);
        }
    },
    mounted() {
    },
    components: {
        Header,
        FloatPanel,
        OkPane,
        AtomSpinner
    },
}
</script>

<template>
    <Header></Header>
    <div class="spinner_container" :class="{ hidden: hideSpinner }">
        <atom-spinner class="spinner" :animation-duration="1000" :size="60" color="#ff1d5e" />
    </div>
    <FloatPanel ref="okFloat" back sticky>
        <OkPane ref="okPane" @ok="this.$root.goBack"></OkPane>
    </FloatPanel>
    <router-view></router-view>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/spinner.scss';
</style>
