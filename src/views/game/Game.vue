<script>
import FloatPanel from "@/components/FloatPanel.vue";
import Col from "./components/Col.vue";
import status from "@/utils/api/status.js";
import CatPane from "./components/CatPane.vue";
import GameStore from '@/utils/api/GameStore.js';

export default {
    name: 'Game',
    data() {
        return {
            currentCol: -1,
            currentRound: 1
        }
    },
    methods: {
        async showRound() {
            const res = await GameStore.getRound({
                gameid: this.gameid,
                round: this.currentRound
            });

            if (res.code !== 200 && res.message) {
                this.$root.message(res.message);
            }

            for (const c in res.data.categories) {
                this.$refs[`col${c}`].category.text = res.data.categories[c];
            }
        },
        editCategory(col) {
            this.currentCol = col;
            this.$refs.catPane.setText(this.$refs[`col${col}`].category.text);
            this.$root.showFloat(this.$refs.catFloat);
        },
        async updateCategory() {
            this.$root.goBack()

            const res = await GameStore.setCategory({
                gameid: this.gameid,
                round: this.currentRound,
                col: this.currentCol,
                description: this.$refs.catPane.getText()
            });

            if (res.code !== 200 && res.message) {
                this.$root.message(res.message);
            } else {
                this.$refs[`col${this.currentCol}`].category = this.$refs.catPane.getText();
            }
        }
    },
    async mounted() {
        const r = await status();
        if (!r.data["logged_in"]) {
            this.$router.push("/");
            return;
        }

        this.gameid = parseInt(this.id.substring(1));
        this.showRound();
    },
    props: ['id'],
    components: {
        Col,
        CatPane,
        FloatPanel
    }
}
</script>

<template>
    <div class="board">
        <Col ref="col1" @edit_category="() => this.editCategory(1)">
        </Col>
        <Col ref="col2" @edit_category="() => this.editCategory(2)">
        </Col>
        <Col ref="col3" @edit_category="() => this.editCategory(3)">
        </Col>
        <Col ref="col4" @edit_category="() => this.editCategory(4)">
        </Col>
        <Col ref="col5" @edit_category="() => this.editCategory(5)">
        </Col>
    </div>

    <FloatPanel ref="catFloat" title="Set Category" back sticky>
        <CatPane ref="catPane" @ok="updateCategory" />
    </FloatPanel>
</template>

<style lang="scss" scoped>
@import './game.scss';
</style>