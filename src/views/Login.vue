<script>
import FloatPanel from "../components/FloatPanel.vue";
import LoginPane from "../components/LoginPane.vue";
import EmailPane from '../components/EmailPane.vue';
import RegisterPane from '../components/RegisterPane.vue';
import OkPane from '../components/OkPane.vue';
import GooglePane from "../components/GooglePane.vue";

export default {
    name: 'Home',
    data() {
        return {
            currentFloat: ["loginFloat"]
        }
    },
    methods: {
        goBack() {
            this.$refs[this.currentFloat[0]].hide();
            this.currentFloat.shift();
            if (this.currentFloat.length > 0) {
                this.$refs[this.currentFloat[0]].show();
            }
        },
        showFloat(floatName, event) {
            this.$refs[this.currentFloat[0]].hide();
            this.$refs[floatName].show();
            this.currentFloat.unshift(floatName);
        },
        message(event) {
            this.$refs.okPane.message = event.message;
            this.showFloat("okFloat");
        }
    },
    mounted() {
        switch (this.$route.query.state) {
            case "email_confirmed":
                this.$refs.confirmFloat.show();
                break;
            case "email_not_confirmed":
                this.$refs.notConfirmFloat.show();
                break;
            default:
                this.$refs.loginFloat.show();
                break;
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
    <div @message='showFloat("okFloat")'>
        <FloatPanel ref="loginFloat" title="Login" sticky>
            <LoginPane @google='showFloat("googleFloat")' @email='showFloat("emailFloat")' />
        </FloatPanel>

        <FloatPanel ref="googleFloat" title="Login With Google" @back='goBack' back sticky>
            <GooglePane></GooglePane>
        </FloatPanel>

        <FloatPanel ref="emailFloat" title="Login With Email" @back='goBack' back sticky>
            <EmailPane @message='message($event)' @register='showFloat("registerFloat")' />
        </FloatPanel>

        <FloatPanel ref="registerFloat" title="Register New Account" @back='goBack' back sticky>
            <RegisterPane @message='message($event)'></RegisterPane>
        </FloatPanel>

        <FloatPanel ref="okFloat" title="Message" @back='goBack' back sticky>
            <OkPane ref="okPane" @ok="goBack"></OkPane>
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
@import '../assets/styles/pane.scss';

.container {
    display: flex;
    flex-direction: column;
}
</style>