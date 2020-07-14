<template>
    <div class="inputWrapper">
        <b-form-input class="input-custom" v-model="inputVal" type="text"></b-form-input>
        <b-button variant="light" @click="submitBtn">
            <b-icon icon="plus"></b-icon>
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
            $nuxt.$emit('submit', this.inputVal);
            this.inputVal = '';
        }
    }
}
</script>