<script>
import logout from "@/utils/api/logout.js";
import { AtomSpinner } from 'epic-spinners'

export default {
        data() {
            return {
                hideSpinner: true
            }
        },
        methods: {
            async doLogout() {
                try {
                    this.hideSpinner = false;
                    const result = await logout();

                    if (result.code === 200) {
                        this.$router.push("/");
                    }
                    else if (result.message) {
                        this.$root.message(result.message);
                    }
                    else {
                        this.$root.message("logout failed");
                    }
                } catch (exception) {
                    this.$root.message(exception);
                } finally {
                    this.hideSpinner = true;
                }
            },
            async test() {
                console.log(this.$parent);
            }
        },
        components: {
            AtomSpinner,
        },
        directives: {
            focus
        }
    }
</script>

<template>
    <div class="container">
        <div class="spinner_container" :class="{ hidden: hideSpinner }">
            <atom-spinner class="spinner" :animation-duration="1000" :size="60" color="#ff1d5e" />
        </div>
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