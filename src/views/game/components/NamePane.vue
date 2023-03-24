<script>
import extractData from '@/utils/extractData.js';
import login from "@/utils/api/login.js";

export default {
    data() {},
    methods: {
        newGame() {
            console.log("here");
            GameStore.newGame(extractData(this.$el));
        }
    },
    components: {},
}
</script>

<template>
    <div class="pane">
        <div class="button green" @click="newGame">
            <span>Ok</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>