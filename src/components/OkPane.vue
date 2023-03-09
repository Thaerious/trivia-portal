<script>

export default {
    name: "OkPane",
    methods: {},
    computed: {
        message: {
            get() {
                return this.$refs.content.innerText;
            },
            set(value) {
                console.log(`message.set ${value}`);
                this.$refs.content.innerText = value;
            }
        }
    },
    components: {}
}
</script>

<template>
    <div class="container">
        <div ref="content" id="content" class="content"></div>        
        <div class="button green" @click="$emit('ok')">
            <span>Ok</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/pane.scss';

.content{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: whitesmoke;
    border: 1px solid black;
    color: black;
    min-height: 100px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
    padding: 15px;
}

</style>