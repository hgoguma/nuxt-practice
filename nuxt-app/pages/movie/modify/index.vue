<template>
    <b-container class="mb-2" style="margin-top: 50px;">
        <p style="text-align:center;">영화 수정</p>
        <b-img v-bind:src="singleData.poster_path" center alt="poster" style="height:300px;width:200px;" />
        <b-form style="margin-top:50px">
            <b-form-group label="한글 타이틀">
                <b-form-input v-model="singleData.title" type="text" required placeholder="한글 타이틀" /> 
            </b-form-group>
            <b-form-group label="영어 타이틀">
                <b-form-input v-model="singleData.original_title" type="text" required placeholder="영어 타이틀" />
            </b-form-group>

            <b-button type="submit" variant="primary" @click="submitForm">수정</b-button>
            <b-button type="reset" variant="danger" @click="resetForm">Reset</b-button>
        </b-form>
    </b-container>
</template>

<script>
const { modifyDataAPI } = require('../../../js/data.js');

// import axios from 'axios'

export default {
    created() {
        this.$store.dispatch('movieData/getMovieData', this.$router.history ? this.$router.history.current.query.movieId : this.$router.currentRoute.query.movieId);
    },
    computed: {
        singleData: {
            get() {
                return this.$store.getters['movieData/getSingleData']
            }
        },
        currentPageIndex : {
            get() { return this.$store.state.page.currentPageIndex },
            set(value) {  return this.$store.commit('page/currentPageIndex', value) },
        },
        modifySuccess: {
            get() {
                return this.$store.getters['movieData/getModifySuccess']
            }
        },
    },
    methods: {
        submitForm() {
            //공백 처리
            if(!this.singleData.title || !this.singleData.original_title) {
                alert('입력해주세요');
                return;
            }

            let result = modifyDataAPI(this.singleData);
            
            if(result == "success") {
                alert('수정 되었습니다.');
                this.$store.dispatch('movieData/initSingleData'); //singleData state 초기화
                return this.$router.push(`/movie/${this.currentPageIndex}`);
            }
        },
        resetForm() {
            this.singleData.title = "";
            this.singleData.original_title = "";
        },
    }
}
</script>