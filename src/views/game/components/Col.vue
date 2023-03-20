<script>
import Cell from "./Cell.vue";

export default {
    name: 'Col',
    methods: {}, 
    components: {
        Cell
    },
    computed: {
        category: {
            get() {
                return this.$refs.category;
            },
            set(value) {
                this.$refs.category.text = value;
            }
        }
    },    
}
</script>

<template>
    <div class="col">
        <Cell ref="category" @click="$emit('edit_category')"></Cell>
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