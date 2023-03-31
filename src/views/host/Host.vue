<script>
import FloatPanel from "@/components/FloatPanel.vue";
import CONST from '@/utils/constants.js';
import Col from "@/views/game/components/Col.vue";

export default {
    name: 'Host',
    data() {
        return {
            current: {
                gameid: -1,
                col: -1,
                row: -1,
                round: 1
            },
            buttons: {
                prev: false
            }
        }
    },
    methods: {
        async show(data) {
            console.log("gamedata", data);
            // this.updateButtons();
                for (let i = 1; i <= 5; i++) {
                const text = data.game.categories[i];
                this.$refs[`col${i}`].setCategory(text ?? "");
            }
            for (let c = 1; c <= 5; c++) {
                for (let r = 1; r <= 5; r++) {
                    const value = data.game.values[c][r].value;
                    this.$refs[`col${c}`].setValue(r, value ?? "");
                }
            }
        },
    },
    async mounted() {
        let instance = {};

        await this.$root.api(
            CONST.API.GAME.GET,
            { idx: this.$route.params.id },
            res => instance = res.data
        );

        await this.$root.api(
            CONST.API.GAME_STORE.GET_ROUND,
            { gameid: instance.gameid, round: instance.current_round},
            res => this.show({ instance : instance, game : res.data })
        );
    },    
    props: ['id'],
    components: {
        Col,
        FloatPanel,
    }
}
</script>

<template>
    <div class="board_container">
        <div class="board">
            <Col ref="col1" @edit_category="() => this.editCategory(1)" @edit_cell="(event) => this.editCell(1, event)">
            </Col>
            <Col ref="col2" @edit_category="() => this.editCategory(2)" @edit_cell="(event) => this.editCell(2, event)">
            </Col>
            <Col ref="col3" @edit_category="() => this.editCategory(3)" @edit_cell="(event) => this.editCell(3, event)">
            </Col>
            <Col ref="col4" @edit_category="() => this.editCategory(4)" @edit_cell="(event) => this.editCell(4, event)">
            </Col>
            <Col ref="col5" @edit_category="() => this.editCategory(5)" @edit_cell="(event) => this.editCell(5, event)">
            </Col>
        </div>
        <div class="round_label">Round {{this.current.round}}</div>
        <div class="button_bar">
            <div :class="{disabled: !buttons.prev}" class="button green button__narrow" 
                @click="()=>this.showRound(--this.current.round)">
                <span>Prev</span>
            </div>
            <div class="button orange button__narrow" @click="this.$router.push('/lobby')">
                <span>Lobby</span>
            </div>
            <div class="button green button__narrow" @click="()=>this.showRound(++this.current.round)">
                <span>Next</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './host.scss';
@import '@/assets/styles/button.scss';

.round_label{
    justify-self: center;
    text-align: center;
    font-size: 2.5em;
    font-weight: bolder;
}

.button__narrow {
    width: 150px;
}
</style>