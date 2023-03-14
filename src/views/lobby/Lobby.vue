<script>
import FloatPanel from "../../components/FloatPanel.vue";
import MainPane from "./components/MainPane.vue";
import ManagePane from "./components/ManagePane.vue";
import status from "@/utils/api/status.js";
import router from "@/router";

export default {
    name: 'Home',
    methods: {
        doLogout() {
            router.push("/");
        }
    },
    async mounted() {
        const body = await status.body();
        if (body.data["logged_in"]) {
            this.$root.showFloat(this.$refs.mainFloat);
        }
        else {
            router.push("/");
        }
    },
    components: {
        FloatPanel,
        MainPane,
        ManagePane
    }
}
</script>

<template>
    <div>
        <FloatPanel ref="mainFloat" title="Famous Trivia" sticky>
            <MainPane 
                @navigate="(event)=>this.$root.showFloat(this.$refs[event])"
                @logout="doLogout" 
            />
        </FloatPanel>
        <FloatPanel ref="manageFloat" title="Famous Trivia" back sticky>
            <ManagePane />
        </FloatPanel>
    </div>
</template>