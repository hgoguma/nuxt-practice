<template>
    <div class="inputWrapper">
        <b-form-input class="input-custom" v-model="inputVal" type="text" :placeholder="placeholder"></b-form-input>
        <b-button variant="light" @click="submitBtn">
            <b-icon :icon="icon"></b-icon>
        </b-button>
    </div>
</template>

<style scoped>
    .inputWrapper {
        margin: 20px;
        display: flex;
    }

    .input-custom {
        border: none;
        border-bottom: 1px solid #ced4da;
        border-radius: 0;
        margin-right: 10px;
    }
</style>

<script>
export default {
    props: ['icon', 'placeholder', 'submit'],
    data() {
        return {
            inputVal: ''
        }
    },
    methods: {
        submitBtn() {
            if(this.inputVal.trim() === '' ) {
                return;
            }
            this.submit(this.inputVal);
            this.inputVal = '';
        }
    }
}
</script>