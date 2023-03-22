<script>
import CONST from "@/utils/constants.js";
import FloatPanel from "@/components/FloatPanel.vue";
import OkPane from '@/components/OkPane.vue';
import GooglePane from "./components/GooglePane.vue";
import LoginPane from "./components/LoginPane.vue";
import EmailPane from './components/EmailPane.vue';
import RegisterPane from './components/RegisterPane.vue';

export default { 
    name: 'Home',
    async mounted() {
        await this.$root.api(CONST.API.CREDENTIALS.STATUS, {}, (res) => {
            if (res.data["logged_in"]) {
                this.$router.push('Lobby');
            }
            else {
                this.$root.showFloat(this.$refs.loginFloat);
            }
        });
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
                @email='this.$root.showFloat(this.$refs.emailFloat)' 
                @navigate='(event) => this.$router.push("second")'
                />
        </FloatPanel>

        <FloatPanel ref="googleFloat" title="Login With Google" back sticky>
            <GooglePane/>
        </FloatPanel>

        <FloatPanel ref="emailFloat" title="Login With Email" back sticky>
            <EmailPane 
                @register='this.$root.showFloat(this.$refs.registerFloat)' />
        </FloatPanel>

        <FloatPanel ref="registerFloat" title="Register New Account" back sticky>
            <RegisterPane/>
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