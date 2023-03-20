<script>
import FloatPanel from "@/components/FloatPanel.vue";
import Col from "./components/Col.vue";
import status from "@/utils/api/status.js";
import NamePane from "./components/NamePane.vue";

export default {
    name: 'Game',
    data() {
        return {}
    },
    methods: {},
    async mounted() {
        const r = await status();
        if (!r.data["logged_in"]) {
            this.$router.push("/");
        }
    },
    props: ['gameid'],
    components: {
        Col,
        NamePane,
        FloatPanel
    }
}
</script>

<template>
    <div class="board">
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
    </div>
</template>

<style lang="scss" scoped>
@import './game.scss';
</style>