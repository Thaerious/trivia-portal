<script>
import ListPane from '@/components/ListPane.vue';
import CONST from "@/utils/constants.js";

export default {
    methods: {
        async refresh() {
            await this.$root.api(CONST.API.GAME_STORE.LIST_GAMES, {}, (res) => {
                this.$refs.listPane.clear();
                for (const datum of res.data) {
                    this.$refs.listPane.addItem(datum.gamename, datum.gameid);
                }
            });
        },
        async doDelete(event) {
            const gameid = this.$refs.listPane.getSelected()[0];
            await this.$root.api(CONST.API.GAME_STORE.DELETE_GAME, {gameid : gameid}, (res) => {
                this.refresh();
            });            
        },
        async host(event) {
            const gameid = this.$refs.listPane.getSelected()[0];
            await this.$root.api(CONST.API.GAME.START, { gameid: gameid }, (res) => {
                this.$router.push(`/host/${res.data.idx}`);
            });
        }
    },
    components: { ListPane },
    mounted() {
        this.refresh();
    }
}
</script>

<template>
    <div class="pane">
        <ListPane ref="listPane"></ListPane>
        <div class="button_bar">
            <div class="button blue" 
                @click="host">
                <span>Host</span>
            </div>            
            <div class="button green" @click="$emit('navigate', 'nameFloat')">
                <span>New</span>
            </div>            
            <div class="button orange" 
                @click="$emit('load', this.$refs.listPane.getSelected()[0])">
                <span>Edit</span>
            </div>
            <div class="button red" @click="doDelete">
                <span>Delete</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>