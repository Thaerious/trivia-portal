<script>
import extractData from '@/utils/extractData.js';
import CONST from '@/utils/constants.js';
import { AtomSpinner } from 'epic-spinners'

const CONFIRMATION_MESSAGE = "Your account has been registered and a confirmation email has been sent."

export default {
    data() {
        return {
            hideSpinner: true
        }
    },
    methods: {
        doRegister: async function () {
            try {
                if (!this.checkPassword()) return;
                this.hideSpinner = false;
                
                const result = await fetch(CONST.API.CREDENTIALS.REGISTER, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(extractData(this.$el))
                });
                const json = await result.json();
                if (json.message) {
                    this.$root.message(json.message);
                }
                else if (result.status === 200) {
                    this.$root.message(CONFIRMATION_MESSAGE);
                }
            } catch (exception) {
                this.$root.message(exception);

            } finally {
                this.hideSpinner = true;
            }
        },
        checkPassword: function () {
            const data = extractData(this.$el);     
            if (data.password !== data.confirm) {
                this.$root.message("Passwords do not match.");
                return false;
            }
            return true;
        }
    },
    components: {
        AtomSpinner,
    },
}
</script>

<template>
    <div class="pane">
        <div class="spinner_container" :class="{ hidden: hideSpinner }">
            <atom-spinner class="spinner" :animation-duration="1000" :size="60" color="#ff1d5e" />
        </div>
        <div class="label">Username</div>
        <div class="textInput" name="username" spellcheck="false" contenteditable></div>
        <div class="label">Email</div>
        <div class="textInput" name="email" spellcheck="false" contenteditable></div>
        <div class="label">Password</div>
        <div class="textInput password" name="password" spellcheck="false" contenteditable=""></div>
        <div class="label">Confirm Password</div>
        <div class="textInput password" name="confirm" spellcheck="false" contenteditable=""></div>
        <div class="button yellow" @click="doRegister">
            <span>Register</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>