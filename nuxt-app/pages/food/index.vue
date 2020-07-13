<template>
    <div class="container">
        <seachInput :placeholderMsg="this.placeholderMsg" />
        
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                Cras justo odio
                <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <b-badge variant="primary" pill>2</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
                Morbi leo risus
                <b-badge variant="primary" pill>1</b-badge>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<style scoped>
    .inputWrapper {
        margin: 20px;
    }
    .card.mb2 {
        cursor: pointer;
    }
</style>

<script>

import { axios } from '@nuxtjs/axios';
import seachInput from '../../components/common/searchInput';

export default {

    // asyncData ({ $axios }) {
    //     //https://api.themoviedb.org/3/movie/now_playing?api_key=519648d6f7a0d2c3ea75a37b32d653b9&language=ko&page=1

    //     return $axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=%EC%97%AC%EC%9D%98%EB%8F%84%20%EB%A7%9B%EC%A7%91&category_group_code=FD6&sort=accuracy`)
    //     .then((res) => {
    //         console.log('res?', res.data.documents);
    //         return {
    //             foodList: res.data.documents
    //         }

    //     })
    // },

    components: {
       seachInput
    },
    data() {
        return {
            placeholderMsg: '지역을 입력해주세요',
            list: []
        }
    },
    created() {
        this.$nuxt.$on('search', (keyword) => {
            let query = encodeURI(keyword + '맛집', 'UTF-8');
            this.$axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&category_group_code=FD6&sort=accuracy`)
            .then((res) => {
                res.data.documents.forEach(ele => {
                    ele.category_name = ele.category_name.split('>')[1];
                });
                console.log('res?', res.data.documents);
                this.list = res.data.documents;
            });
        });
    },
    methods: {
        kakaoSearch(query) {
            console.log('kakaoMap');
            location.href=url;
        }
     
    }
}
</script>