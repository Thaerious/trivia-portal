<script>
import extractData from '@/utils/extractData.js';
import CONST from "@/utils/constants.js";

export default {
    methods: {
        doLogin: async function () {
            await this.$root.api(CONST.API.CREDENTIALS.LOGIN, extractData(this.$el), (res) => {
                this.$router.push("Lobby");
            });
        }
    },
    components: {},
}
</script>

<template>
    <div class="container">
        <div class="label">Username</div>
        <div class="textInput" name="username" spellcheck="false" contenteditable></div>
        <div class="label">Password</div>
        <div class="textInput password" name="password" spellcheck="false" contenteditable=""></div>
        <div class="button yellow" @click="doLogin">
            <span>Login</span>
        </div>
        <div class="button blue" @click="$emit('register')">
            <span>Register</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>