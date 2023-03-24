<script>

export default {
    methods: {
        getAnswer() {
            return this.$refs.answer.value;
        },
        setAnswer(value) {
            this.$refs.answer.value = value ?? "";
        },
        getQuestion() {
            return this.$refs.question.value;
        },
        setQuestion(value) {
            this.$refs.question.value = value ?? "";
        },
        getValue() {
            if (this.$refs.value.innerText.trim() !== "") {
                return parseInt(this.$refs.value.innerText);
            } else {
                return null;
            }
        },
        setValue(value) {
            this.$refs.value.innerText = value ?? "";
        }
    },
    components: {},
    computed: {
        text: {
            get() {
                return this.$refs.content.value;
            },
            set(v) {
                this.$refs.content.value = v;
            }
        }
    },
}
</script>

<template>
    <div class="pane">
        <div class="label">Question</div>
        <textarea ref="question" rows="6"></textarea>
        <div class="label">Answer</div>
        <textarea ref="answer" rows="6"></textarea>
        <div class="label">Value</div>
        <div class="textInput" ref="value" name="value" spellcheck="false" contenteditable></div>
        <div class="button green" @click="$emit('ok')">
            <span>Ok</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/pane.scss';
@import '@/assets/styles/spinner.scss';
</style>