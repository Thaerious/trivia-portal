<script>
import ListPane from '@/components/ListPane.vue';
import CONST from "@/utils/constants.js";

export default {
    methods: {
        async refresh() {}
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
            <div class="button green" @click="$emit('navigate', 'nameFloat')">
                <span>Join</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>