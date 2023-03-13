<script>
import GoogleLogo from '@/assets/google.png';
import status from '@/utils/api/status.js';

export default {
    methods: {        
    },
    data() {
        return {
            GoogleLogo: GoogleLogo
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="button red" @click="$emit('google')">
            <img class="icon" src="../assets/google.svg" alt="Google Icon">
            <span class="label">Login With Google</span>
        </div>
        <div class="button yellow" @click="$emit('email')">
            <img class="icon" src="../assets/email.png" alt="Email Icon">
            <span>Login With Email</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
}

.button {
    display: flex;
    width: 60%;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    align-items: center;
    align-self: center;
    justify-content: center;
    height: 75px;
    cursor: pointer;

    &:hover {
        border: 1px solid black;
    }

    .icon {
        width: 20px;
        height: 20px;
        margin: 10px
    }

    &.yellow {
        background-color: rgb(207, 185, 74);
    }

    &.blue {
        background-color: rgb(7, 120, 223);
    }

    &.red {
        background-color: rgb(185, 49, 32);
    }
}
</style>