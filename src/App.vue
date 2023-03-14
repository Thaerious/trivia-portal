<script>
import Header from "@/components/Header.vue";
import FloatPanel from "@/components/FloatPanel.vue";
import OkPane from "@/components/OkPane.vue";

export default {
    data() {
        return {
            currentFloat: []
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

            float.show();
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
        OkPane
    },
}
</script>

<template>
    <Header></Header>
    <FloatPanel ref="okFloat" back sticky>
        <OkPane ref="okPane" @ok="this.$root.goBack"></OkPane>
    </FloatPanel>
    <router-view></router-view>
</template>

<style scoped></style>
