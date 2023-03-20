<script>
import Cell from "./Cell.vue";

export default {
    name: 'Col',
    data() {
        return {}
    },
    methods: {}, 
    components: {
        Cell
    }    
}
</script>

<template>
    <div class="col">
        <Cell ref="header"><slot></slot></Cell>
        <Cell>100</Cell>
        <Cell>200</Cell>
        <Cell>300</Cell>
        <Cell>400</Cell>
        <Cell>500</Cell>
    </div>
</template>

<style lang="scss" scoped>
    @import '../game.scss';
</style>