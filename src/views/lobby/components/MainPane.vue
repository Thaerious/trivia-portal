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
                const body = await logout.body();

                if (body.message) {
                    this.$emit("message", { message: body.message });
                }
                else if (result.status === 200) {
                    this.$emit("logout");
                }
            } catch (exception) {
                this.$emit("message", { message: exception });
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