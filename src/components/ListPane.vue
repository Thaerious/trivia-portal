<script>
import { createVNode, render } from "vue";
import ListItem from './ListItem.vue';

export default {
    data() {
        return {
            selected: [],
            contents: []
        }
    },
    methods: {
        addItem(label, data) {
            this.contents.push({
                label: label,
                data: data
            });
        },
        select(item) {
            if (this.multi) {
                if (this.selected.indexOf(item) == -1) {
                    this.selected.push(item);
                    item.selected = true;
                } else {
                    this.selected.splice(this.selected.indexOf(item), 1);
                    item.selected = false;
                }
            } else {
                for (const i of this.selected) i.selected = false;
                item.selected = true;
                this.selected.splice(0);
                this.selected.push(item);
            }
        },
        getSelected() {
            const r = [];
            for (const item of this.selected) {
                r.push(item.$el.getAttribute("content-data"));
            }
            return r;
        },
        clear() {
            for (const i of this.selected) i.selected = false;
            this.selected.splice(0);
            this.contents.splice(0);
        }
    },
    props: {
        multi: Boolean,
    },
    components: {
        ListItem
    }
}
</script>

<template>
    <div class="list_pane__outer">
        <div ref="inner" class="list_pane__inner">
            <ListItem v-for="item in contents" :content-data="item.data">{{ item.label }}</ListItem>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list_pane__outer {
    width: 95%;
    background-color: whitesmoke;
    border-radius: 10px;
    align-self: center;
    max-height: 45vh;
    overflow: hidden;

    .list_pane__inner {
        display: flex;
        flex-direction: column;
        left: 0;
        top: 0;
        width: 99%;
        height: 100%;
        background-color: whitesmoke;
        color: black;
        padding: 10px;
        align-items: center;
        justify-content: left;
        max-height: 45vh;
        min-height: 15vh;
        overflow-y: scroll;
        overflow-x: hidden;
    }
}
</style>