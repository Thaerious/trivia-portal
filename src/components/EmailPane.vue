<script>
export default {
    methods: {
        here() {
            console.log("HERE");
        }
    }
}
</script>

<template>
    <div class="container">       
        <div class="label">Username</div> 
        <div class="textInput" spellcheck="false" contenteditable></div>
        <div class="label">Password</div> 
        <div class="textInput password" spellcheck="false" contenteditable=""></div>
        <div class="button yellow" @click="$emit('login')">
            <span>Login</span>
        </div>
        <div class="button blue" @click="$emit('register')">
            <span>Register</span>
        </div>        
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/pane.scss';
</style>