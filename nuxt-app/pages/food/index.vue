<template>
    <div class="container">
        <div class="inputWrapper">
            <b-row>
                <b-col cols="8">
                     <b-form-input v-model="keyword" type="text" placeholder="지역을 입력해주세요"></b-form-input>
                </b-col>
                <b-col>
                    <b-button variant="primary" @click="search">
                        <b-icon icon="search"></b-icon>
                    </b-button>
                </b-col>
            </b-row>
        </div>
        
        <b-container class="mb-2">
            <b-row cols="4" cols-md="4" cols-xl="4">
                <b-col md="3" v-for="(ele, idx) in list" :key="idx">
                    <b-card
                        :title="ele.place_name"
                        style="max-width: 20rem;"
                        class="card mb-2"
                        @click="kakaoMap(ele.place_url)"
                    >
                        <b-card-text>
                            {{ele.category_name}}
                        </b-card-text>
                        <!-- <b-button href="#" variant="primary">
                            <b-icon icon="star"></b-icon>
                        </b-button> -->
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
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

// import { BIcon } from 'bootstrap-vue';
import { axios } from '@nuxtjs/axios';

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
       
    },
    data() {
        return {
            keyword: '',
            list: []
        }
    },
    methods: {
        search() {
            console.log('검색!');
            let query = encodeURI(this.keyword + '맛집', 'UTF-8');

            this.$axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&category_group_code=FD6&sort=accuracy`)
            .then((res) => {
                res.data.documents.forEach(ele => {
                    ele.category_name = ele.category_name.split('>')[1];
                });
                console.log('res?', res.data.documents);
                this.list = res.data.documents;
            })

        },
        kakaoMap(url) {
            console.log('kakaoMap');
            location.href=url;
        }
     
    }
}
</script>