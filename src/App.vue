<script>
import FloatPanel from './components/FloatPanel.vue';
import Header from "./components/Header.vue";

export default {
    data() {
        return {}
    },
    methods: {
    },
    mounted() {
    },
    components: {
        Header,
        FloatPanel,
    },
}
</script>

<template>
    <Header></Header>
    <router-view></router-view>
</template>

<style scoped>
</style>
