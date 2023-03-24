<script>
import FloatPanel from "@/components/FloatPanel.vue";
import Col from "./components/Col.vue";
import CONST from '@/utils/constants.js';
import CatPane from "./components/CatPane.vue";
import CellPane from "./components/CellPane.vue";

export default {
    name: 'Game',
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
        updateButtons() {
            if (this.current.round === 1) this.buttons.prev = false;
            else this.buttons.prev = true;
        },
        async showRound(round) {
            if (round) this.current.round = round;
            this.updateButtons();
            history.replaceState({}, null, `/game/${this.current.gameid}/${this.current.round}`);
    
            await this.$root.api(CONST.API.GAME_STORE.GET_ROUND,
                this.current,
                (res) => {
                    for (let i = 1; i <= 5; i++) {
                        const text = res.data.categories[i];
                        this.$refs[`col${i}`].setCategory(text ?? "");
                    }
                    for (let c = 1; c <= 5; c++) {
                        for (let r = 1; r <= 5; r++) {
                            const value = res.data.values[c][r].value;
                            this.$refs[`col${c}`].setValue(r, value ?? "");
                        }
                    }
                });
        },
        async editCell(col, row) {
            this.current.col = col;
            this.current.row = row;

            await this.$root.api(CONST.API.GAME_STORE.GET_QUESTION,
                this.current,
                (res) => {
                    this.$refs.cellPane.setQuestion(res.data?.question);
                    this.$refs.cellPane.setAnswer(res.data?.answer);
                    this.$refs.cellPane.setValue(res.data?.value);
                });

            this.$root.showFloat(this.$refs.cellFloat);
        },
        editCategory(col) {
            this.current.col = col;
            const text = this.$refs[`col${col}`].getCategory();
            this.$refs.catPane.setText(text);
            this.$root.showFloat(this.$refs.catFloat);
        },
        async updateCell() {
            console.log({
                ...this.current,
                value: this.$refs.cellPane.getValue(),
                question: this.$refs.cellPane.getQuestion(),
                answer: this.$refs.cellPane.getAnswer()
            });

            this.$root.goBack()
            this.$root.api(CONST.API.GAME_STORE.ADD_QUESTION, {
                ...this.current,
                value: this.$refs.cellPane.getValue(),
                question: this.$refs.cellPane.getQuestion(),
                answer: this.$refs.cellPane.getAnswer()
            }, (res) => {
                this.showRound()
            });
        },
        async updateCategory() {
            this.$root.goBack()
            this.$root.api(CONST.API.GAME_STORE.SET_CATEGORY, {
                gameid: this.current.gameid,
                round: this.current.round,
                col: this.current.col,
                description: this.$refs.catPane.getText()
            }, (res) => {
                this.$refs[`col${this.current.col}`].setCategory(this.$refs.catPane.getText());
            });
        }
    },
    async mounted() {
        await this.$root.api(CONST.API.CREDENTIALS.STATUS, {}, (res) => {            
            if (res.data["logged_in"]) {
                this.current.gameid = parseInt(this.$route.params.id);
                this.current.round = parseInt(this.$route.params.round);
                this.showRound();
            }
            else {
                this.$router.push("/");
            }
        });
    },
    props: ['id', 'round'],
    components: {
        Col,
        CatPane,
        FloatPanel,
        CellPane
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

    <FloatPanel ref="catFloat" title="Set Category" back sticky
        @show="this.$refs.catPane.onShow()"
    >
        <CatPane ref="catPane" @ok="updateCategory" />
    </FloatPanel>

    <FloatPanel ref="cellFloat" title="Set Question" back sticky>
        <CellPane ref="cellPane" @ok="updateCell" />
    </FloatPanel>
</template>

<style lang="scss" scoped>
@import './game.scss';
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