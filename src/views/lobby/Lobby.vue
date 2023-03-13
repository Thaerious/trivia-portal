<script>
import FloatPanel from "../../components/FloatPanel.vue";
import MainPane from "./components/MainPane.vue";

export default {
    name: 'Home',
    data() {
        return {
            currentFloat: ["mainFloat"]
        }
    },
    methods: {
        goBack() {
            this.$refs[this.currentFloat[0]].hide();
            this.currentFloat.shift();
            if (this.currentFloat.length > 0) {
                this.$refs[this.currentFloat[0]].show();
            }
        },
        showFloat(floatName, event) {
            console.log(this.currentFloat);
            this.$refs[this.currentFloat[0]].hide();
            this.$refs[floatName].show();
            this.currentFloat.unshift(floatName);
        },
        message(event) {
            this.$refs.okPane.message = event.message;
            this.showFloat("okFloat");
        }
    },
    mounted() {
        console.log("Lobby Mounted");
        this.showFloat("mainFloat");
    },
    components: {
        FloatPanel,
        MainPane
    }
}
</script>

<template>
    <FloatPanel ref="mainFloat" title="Famous Trivia" sticky>
        <MainPane></MainPane>
    </FloatPanel>
</template>