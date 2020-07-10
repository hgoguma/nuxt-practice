<template>
    <b-container class="mb-2" style="margin-top: 50px;">
        <p style="text-align:center;">새 영화 추가</p>
        <b-form>
            <b-form-group label="한글 타이틀">
                <b-form-input v-model="form.title" type="text" required placeholder="한글 타이틀" />
            </b-form-group>

            <b-form-group label="영어 타이틀">
                <b-form-input v-model="form.original_title" type="text" required placeholder="영어 타이틀" />
            </b-form-group>

            <b-button type="submit" variant="primary" @click.prevent="submitForm">Submit</b-button>
            <b-button type="reset" variant="danger" @click="resetForm">Reset</b-button>
        </b-form>
    </b-container>
</template>

<script>

const { saveData } = require('../../../js/data');

export default {

    data() {
        return {
            form: {
                title: '',
                original_title: '',
            },
        }
    },
    methods: {
        submitForm() {
            //공백 처리
            if(!this.form.title || !this.form.original_title) {
                alert('입력해주세요');
                return;
            }
            let result = saveData(this.form);
            if(result.result == "success" && result.id) {
                console.log('저장 됨!');
                //저장되었으면 다시 전 페이지로 이동!
                this.$router.go('-1');
            }
            this.form = {};
        },
        resetForm() {
            this.form = {};
        }
    }
}
</script>