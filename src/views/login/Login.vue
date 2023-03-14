<script>
import FloatPanel from "@/components/FloatPanel.vue";
import OkPane from '@/components/OkPane.vue';
import status from "@/utils/api/status.js";
import router from "@/router";

import GooglePane from "./components/GooglePane.vue";
import LoginPane from "./components/LoginPane.vue";
import EmailPane from './components/EmailPane.vue';
import RegisterPane from './components/RegisterPane.vue';

export default { 
    name: 'Home',
    data() { 
        return {}
    },
    methods: {        
        goLobby() {
            router.push('Lobby');
        }
    },
    async mounted() {
        const body = await status.body();
        if (body.data["logged_in"]) {
            this.goLobby();
        }
        else {
            this.$root.showFloat(this.$refs.loginFloat);
        }
    },
    components: {
        FloatPanel,
        LoginPane,
        EmailPane,
        RegisterPane,
        OkPane,
        GooglePane
    }
}
</script>

<template>
    <div>
        <FloatPanel ref="loginFloat" title="Login" sticky>
            <LoginPane 
                @google='this.$root.showFloat(this.$refs.googleFloat)' 
                @email='this.$root.showFloat(this.$refs.emailFloat)' />
        </FloatPanel>

        <FloatPanel ref="googleFloat" title="Login With Google" back sticky>
            <GooglePane
                @success='goLobby'/>
        </FloatPanel>

        <FloatPanel ref="emailFloat" title="Login With Email" back sticky>
            <EmailPane 
                @success='goLobby'
                @register='this.$root.showFloat(this.$refs.registerFloat)' />
        </FloatPanel>

        <FloatPanel ref="registerFloat" title="Register New Account" back sticky>
            <RegisterPane/>
        </FloatPanel>

        <FloatPanel ref="confirmFloat" title="Email Confirmed" sticky>
            <div class="container">
                <div class="button green" @click="closeEmailConfirmed">
                    <span class="label">Continue</span>
                </div>
            </div>
        </FloatPanel>

        <FloatPanel ref="notConfirmFloat" title="Email Not Confirmed" sticky>
            <div class="container">
                <div class="button red" @click="closeEmailConfirmed">
                    <span class="label">Continue</span>
                </div>
            </div>
        </FloatPanel>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';

.container {
    display: flex;
    flex-direction: column;
}
</style>