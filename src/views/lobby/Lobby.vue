<script>
import FloatPanel from "../../components/FloatPanel.vue";
import status from "@/utils/api/status.js";
import GameStore from '@/utils/api/GameStore.js';
import extractData from '@/utils/extractData.js';
import MainPane from "./components/MainPane.vue";
import ManagePane from "./components/ManagePane.vue";

export default {
    name: 'Lobby',
    methods: {
        async newGame() {
            this.$root.hideSpinner = false;
            const res = await GameStore.newGame(extractData(this.$el));
            if (res.code !== 200) {
                this.$root.message(res.message);
            } else {
                this.$router.push("Game");
            }
            this.$root.hideSpinner = true;
            console.log(res);
        }
    },
    async mounted() {
        try {
            const r = await status();
            if (r.data["logged_in"]) {
                this.$root.showFloat(this.$refs.mainFloat);
            }
            else {
                this.$router.push("/");
            }
        }
        catch (exception) {
            this.$root.message(exception);
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
            <MainPane @navigate="(event) => this.$root.showFloat(this.$refs[event])"
                @logout="() => this.$router.push('Lobby')" />
        </FloatPanel>

        <FloatPanel ref="manageFloat" title="Famous Trivia" back sticky>
            <ManagePane @navigate="(event) => this.$root.showFloat(this.$refs[event])" />
        </FloatPanel>

        <FloatPanel ref="nameFloat" title="Enter Game Name" back sticky>
            <div class="container">                
                <div class="textInput" name="gamename" spellcheck="false" contenteditable></div>
                <div class="button green" @click="newGame">
                    <span>Ok</span>
                </div>
            </div>
        </FloatPanel>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
</style>