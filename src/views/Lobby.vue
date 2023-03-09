<script>
import FloatPanel from "../components/FloatPanel.vue";

export default {
    name: 'Home',
    data() {
        return {}
    },
    methods: {
    },
    mounted() {
        this.$refs.aboutPanel.show();
    },
    components: {
        FloatPanel
    }
}
</script>

<template>
    <FloatPanel ref="aboutPanel" title="Lobby" sticky>
        <div>Famous Trivia</div>
        <div>v2.0a</div>
        <router-link to="/">Home</router-link><br>
    </FloatPanel>
</template>