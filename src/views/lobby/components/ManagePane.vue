<script>
import { AtomSpinner } from 'epic-spinners'

export default {
    data() {
        return {
            hideSpinner: true
        }
    },
    methods: {
        
    },
    components: {
        AtomSpinner,
    }
}
</script>

<template>
    <div class="container">
        <div class="spinner_container" :class="{ hidden: hideSpinner }">
            <atom-spinner class="spinner" :animation-duration="1000" :size="60" color="#ff1d5e" />
        </div>
        <div class="button blue" @click="">
            <span>New</span>
        </div>        
        <div class="button yellow" @click="">
            <span>Load</span>
        </div>
        <div class="button red" @click="">
            <span>Delete</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>