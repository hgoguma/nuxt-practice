<template>
    <div>
        <PageOption @changePage="changePage"  />
        
        <b-container class="mb-2">
            <b-button variant="outline-primary" @click="onClickNewMovie()">새로 만들기</b-button>
        </b-container>

        <List @renderingPage="renderingPage" />
        
        <Pagination @changePage="changePage" />
    </div>
</template>

<script>
import PageOption from '../../components/PageOption'
import List from '../../components/List'
import Pagination from '../../components/Pagination'

const { fetchData } = require('../../js/data');


export default {
    components: {
        PageOption,
        List,
        Pagination,
    },
    asyncData({ store, params }) {
        //들어오는 파라미터를 currentPageIndex 로 세팅해야 url로 직접 접근 할 때 제대로된 페이지 접근 가능
        store.dispatch('page/setCurrentPageIndex', parseInt(params.id));
        return {
            id: parseInt(params.id)
        }
    },
    created() {
        console.log(' _id 컴포넌트 created!!');
        this.renderingPage();
    },
    computed: {
        currentPageIndex : {
            get() { return this.$store.state.page.currentPageIndex },
            set(value) {  return this.$store.commit('page/currentPageIndex', value) },
        },
        pageOption: {
            get() {
                return this.$store.getters['page/getPageOption']
            },
            set(newVal) {
                return this.$store.dispatch('page/setPageOption', newVal);
            }
        },
        totalData: {
            get() {
                return this.$store.getters['movieData/getTotalData']
            },
        },
    },
    methods: {
        //API 호출해서 데이터 가져오기
        fetchData() {
            let option = {
                currentPageIndex : this.id,
                pageOption : this.pageOption
            }
            this.$store.dispatch('movieData/setData', option);
        },
        //페이징처리
        setPaginationAction() {
            let payload = {
                currentPageIndex : this.id,
                pageOption : this.pageOption
            }
            this.$store.dispatch('page/chagePageAndSetPagination', payload);
        },
        //데이터 가져오고 페이징 처리
        renderingPage() {
            this.fetchData();
            this.setPaginationAction();
        },
        changePage() {
            if(this.currentPageIndex === 1) {
                this.renderingPage();
            }
            this.$router.push(`/movie/${this.currentPageIndex}`); //현재 세팅된 currentPageIndex로 router 바꾸기
        },
        onClickNewMovie() {
            this.$router.push('/movie/newMovie');
        }
    }
}
</script>