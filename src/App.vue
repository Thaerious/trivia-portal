<script>
import Header from "./components/Header.vue";

export default {
    data() {
        return {}
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
    },
    components: {
        Header
    }, 
}
</script>

<template>
    <Header></Header>
    <router-view></router-view>
</template>

<style scoped>
</style>
