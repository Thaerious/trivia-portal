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
        }
    },
    components: { ListPane },
    mounted() {
        this.refresh();
    }
}
</script>

<template>
    <div class="container">
        <ListPane ref="listPane"></ListPane>
        <div class="button_bar">
            <div class="button green" @click="$emit('navigate', 'nameFloat')">
                <span>New</span>
            </div>
            <div class="button orange" @click="$emit('load', this.$refs.listPane.getSelected())">
                <span>Load</span>
            </div>
            <div class="button red" @click="">
                <span>Delete</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>