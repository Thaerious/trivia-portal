<script>
import CONST from "@/utils/constants.js";

export default {
    methods: {
        async doLogout() {
            await this.$root.api(CONST.API.CREDENTIALS.LOGOUT, {}, (res) => {
                this.$router.push("/");
            });
        }
    },
    directives: {
        focus
    }
}
</script>

<template>
    <div class="pane">
        <div class="button blue" @click="">
            <span>Account Settings</span>
        </div>
        <div class="button green" @click="$emit('navigate', 'joinFloat')">
            <span>Join Game</span>
        </div>
        <div class="button yellow" @click="$emit('navigate', 'manageFloat')">
            <span>Manage Games</span>
        </div>
        <div class="button orange" @click="$emit('navigate', 'hostFloat')">
            <span>Host Game</span>
        </div>
        <div class="button red" @click="doLogout">
            <span>Logout</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>