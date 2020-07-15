<template>
    <div class="contents">
        <AppInput :icon="icon" :placeholder="placeholder" :submit="kakaoSearch" />
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="item in list" :key="item.id">
                {{item.place_name}}
            <a :href="item.place_url" target="_blank">
                <b-button variant="light" >
                    <b-icon icon="map"></b-icon>
                </b-button>
            </a>
            
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<style scoped>

    @import 'assets/style.css';

    .inputWrapper {
        margin: 20px;
    }
    .card.mb2 {
        cursor: pointer;
    }
</style>

<script>

import { axios } from '@nuxtjs/axios';
import AppInput from '@/components/common/AppInput';

export default {

    components: {
        AppInput
    },
    data() {
        return {
            placeholder: '지역을 입력해주세요',
            icon: 'search',
            list: []
        }
    },
    methods: {
        kakaoSearch(keyword) {
            let query = encodeURI(keyword + '맛집', 'UTF-8');
            this.$axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&category_group_code=FD6&sort=accuracy`)
            .then((res) => {
                res.data.documents.forEach(ele => {
                    ele.category_name = ele.category_name.split('>')[1];
                });
                console.log('res?', res.data.documents);
                this.list = res.data.documents;
            });
        }     
    }
}
</script>