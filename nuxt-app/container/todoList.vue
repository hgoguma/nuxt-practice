<template>
    <div>
        <div class="title-wrapper">
            <h3>todoList</h3>
            <p>2020년 7월 14일 화요일</p>
        </div>
        <div>
            <AppInput />
        </div>
        <div>
            <div class="info">
                할 일 {{ todoList.filter(element => element.checkedFlag === false).length }} 개 남음
            </div>
            <todoList :todoList="this.todoList" />
        </div>
        <!-- <div>
            전체 삭제 버튼
        </div> -->
    </div>
</template>

<style scoped>
    h3, p, .info {
        text-align: center;
    }

    .title-wrapper {
        background-color: #333333;
        color: #fff;
        padding: 15px;
    }
   
</style>

<script>
import AppInput from '../components/common/AppInput';
import todoList from '../components/todoList/todoList';

export default {
    components: {
        AppInput,
        todoList
    },
    props: ['todoList'],
    created() {
        this.$nuxt.$on('submit', (inputVal) => {
            this.$store.dispatch('addTodoList', inputVal);
            this.getTodoList();
        });

        this.$nuxt.$on('check', (id) => {
            this.$store.dispatch('setCheckFlag', id);
            this.getTodoList();
        });

        this.$nuxt.$on('modify', (todoItem) => {
            this.$store.dispatch('modifyTodoItem', todoItem);
            this.getTodoList();
        });

        this.$nuxt.$on('remove', (id) => {
            this.$store.dispatch('removeTodoItem', id);
            this.getTodoList();
        });
    },
    methods: {
        getTodoList() {
            this.todoList = this.$store.getters['getTodoList'];
        }
    }
    
}
</script>