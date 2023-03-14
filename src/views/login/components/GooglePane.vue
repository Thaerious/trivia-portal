<script>
import verify from "@/utils/api/verify.js";
import { AtomSpinner } from 'epic-spinners'

export default {
    data() {
        return {
            hideSpinner: true
        }
    },
    methods: {
        async googleAuth(response) {
            try {
                this.hideSpinner = false;
                const result = await verify(response.credential);
                
                if (result.json.message) {
                    this.$root.message(result.json.message);
                }
                else if (result.status === 200) {
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