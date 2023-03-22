<script>
import CONST from "@/utils/constants.js";
import FloatPanel from "../../components/FloatPanel.vue";
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
                this.$root.message(res.code + "\n" + res.message);
            } else {
                this.$router.push(`Game:${res.data}`);
            }
            this.$root.hideSpinner = true;
        },
        async listGames() {
            this.$root.hideSpinner = false;
            const res = await GameStore.newGame(extractData(this.$el));
            if (res.code !== 200) {
                this.$root.message(res.code + "\n" + res.message);
            } else {
                this.$router.push(`Game:${res.data}`);
            }
            this.$root.hideSpinner = true;
        },
        onLoad(event) {
            this.$router.push(`Game:${event[0]}`);
        }      
    },
    async mounted() {
        await this.$root.api(CONST.API.CREDENTIALS.STATUS, {}, (res) => {
            if (res.data["logged_in"]) {
                this.$root.showFloat(this.$refs.mainFloat);
            }
            else {
                this.$router.push("/");
            }
        });
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
            <MainPane @navigate="(event) => this.$root.showFloat(this.$refs[event])" />
        </FloatPanel>

        <FloatPanel @show="this.$refs.managePane.refresh()" ref="manageFloat" title="Manage Games" back sticky>
            <ManagePane ref="managePane" 
                @navigate="(event) => this.$root.showFloat(this.$refs[event])" 
                @load="onLoad"
            />
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