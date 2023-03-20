<script>
import extractData from '@/utils/extractData.js';
import login from "@/utils/api/login.js";
import { AtomSpinner } from 'epic-spinners'

export default {
    data() {
        return {
            hideSpinner: true
        }
    },
    methods: {
        doLogin: async function () {
            try {
                this.hideSpinner = false;
                const result = await login(extractData(this.$el));
                
                if (result.data.message) {
                    this.$root.message(result.data.message);
                }
                else if (result.code === 200) {
                    this.$emit("success");
                }
            } catch (exception) {
                this.$root.message(exception);
            } finally {
                this.hideSpinner = true;
            }
        }
    },
    components: {
        AtomSpinner,
    },
}
</script>

<template>
    <div class="container">
        <div class="spinner_container" :class="{ hidden: hideSpinner }">
            <atom-spinner class="spinner" :animation-duration="1000" :size="60" color="#ff1d5e" />
        </div>        
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