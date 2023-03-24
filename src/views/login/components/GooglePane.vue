<script>
import CONST from "@/utils/constants.js";

export default {
    methods: {
        async googleAuth(response) {
            await this.$root.api(CONST.API.CREDENTIALS.VERIFY, {}, (res) => {
                this.$router.push("Lobby");
            });
        }
    }
}
</script>

<template>
    <div class="pane">
        <div>
            <GoogleLogin class="centered" :callback="googleAuth" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';

.centered {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>