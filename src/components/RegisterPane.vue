<script>
import extractData from '../utils/extractData.js';
import CONST from '../utils/constants.js';
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
                
                const result = await fetch(CONST.API.REGISTER, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(extractData(this.$el))
                });
                const json = await result.json();
                if (json.message) {
                    this.$emit("message", { message: json.message });
                }
                else if (result.status === 200) {
                    this.$emit("message", { message: CONFIRMATION_MESSAGE });
                }
            } catch (exception) {
                this.$emit("message", { message: exception });
            } finally {
                this.hideSpinner = true;
            }
        },
        checkPassword: function () {
            const data = extractData(this.$el);     
            if (data.password !== data.confirm) {
                this.$emit("message", { message: "Passwords do not match." });
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
    <div class="container">
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
@import '../assets/styles/pane.scss';

.spinner_container {
    position: absolute;
    background-color: rgba(12, 12, 12, 0.5);
    width: 150px;
    height: 150px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    border-radius: 75px;
}

.spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.hidden {
    display: none;
}
</style>