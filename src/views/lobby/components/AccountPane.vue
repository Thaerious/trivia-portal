<script>

export default {
    methods: {
        async doLogout() {
            await this.$root.api(CONST.API.CREDENTIALS.LOGOUT, {}, (res) => {
                this.$router.push("/");
            });
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="button blue" @click="">
            <span>Account Settings</span>
        </div>        
        <div class="button green" @click="">
            <span>Join Game</span>
        </div>
        <div class="button yellow" @click="">
            <span>Create Game</span>
        </div>
        <div class="button orange" @click="">
            <span>Load Game</span>
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