<script>
import Header from "@/components/Header.vue";
import FloatPanel from "@/components/FloatPanel.vue";
import OkPane from "@/components/OkPane.vue";
import { AtomSpinner } from 'epic-spinners'
import api from "@/utils/apiFetch.js";

export default {
    data() {
        return {
            currentFloat: [],
            hideSpinner: true
        }
    },
    methods: {
        goBack() {
            this.currentFloat[0].hide();
            this.currentFloat.shift();
            if (this.currentFloat.length > 0) {
                this.currentFloat[0].show();
            }
        },
        showFloat(float, event) {
            if (this.currentFloat.length > 0) {
                this.currentFloat[0].hide();
            }

            float.show(event);
            this.currentFloat.unshift(float);
        },
        message(message, title) {
            if (title) this.$refs.okFloat.setTitle(title);
            this.$refs.okPane.message = message;
            this.showFloat(this.$refs.okFloat);
        },
        /**
         * Call api endpoint at 'url', returns the result with the 
         * http response code in the .code field.
         * By convention the return value is in the .data field.
         */
        async api(url, body, onSuccess) {
            try {
                if (!this.spinnerTimeout) {
                    this.spinnerTimeout = setTimeout(() => {
                        this.hideSpinner = false;
                        delete this.spinnerTimeout;
                    }, 250);
                }
            
                const result = await api(url, body);

                if (result.message && result.code !== 200) {
                    this.message(result.code + "\n" + result.message);
                    console.log(result);
                }
                else if (result.code === 200) {
                    onSuccess(result);
                }
                else {
                    this.message(result?.message, result.code);
                }
            } catch (exception) {
                console.log(exception);
                this.message(exception, 'Exception');
            } finally {
                if (this.spinnerTimeout) {
                    clearTimeout(this.spinnerTimeout);
                    delete this.spinnerTimeout;
                }
                this.hideSpinner = true;
            }
        }
    },
    mounted() {
    },
    components: {
        Header,
        FloatPanel,
        OkPane,
        AtomSpinner
    },
}
</script>

<template>
    <Header></Header>
    <div class="spinner_container" :class="{ hidden: hideSpinner }">
        <atom-spinner class="spinner" :animation-duration="1000" :size="60" color="#ff1d5e" />
    </div>
    <FloatPanel ref="okFloat" title="alert" back sticky>
        <OkPane ref="okPane" @ok="this.$root.goBack"></OkPane>
    </FloatPanel>
    <router-view></router-view>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/spinner.scss';
</style>
