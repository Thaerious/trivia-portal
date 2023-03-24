<script>
import Cell from "./Cell.vue";

export default {
    name: 'Col',
    methods: {
        getCategory() {
            return this.$refs.category.getText();
        },
        setCategory(value) {
            this.$refs.category.setText(value);
        },
        getValue(row) {
            return this.$refs[`cell${row}`].getText();
        },
        setValue(row, value) {
            this.$refs[`cell${row}`].setText(value);
        }        
    },
    components: {
        Cell
    }
}
</script>

<template>
    <div class="col">
        <Cell ref="category" @click="$emit('edit_category')"></Cell>
        <Cell ref="cell1" @click="$emit('edit_cell', 1)"></Cell>
        <Cell ref="cell2" @click="$emit('edit_cell', 2)"></Cell>
        <Cell ref="cell3" @click="$emit('edit_cell', 3)"></Cell>
        <Cell ref="cell4" @click="$emit('edit_cell', 4)"></Cell>
        <Cell ref="cell5" @click="$emit('edit_cell', 5)"></Cell>
    </div>
</template>

<style lang="scss" scoped>
@import '../game.scss';
</style>