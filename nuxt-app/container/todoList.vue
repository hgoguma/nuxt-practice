<template>
    <div>
        <AppTitle :title="title" :contents="contents" />
        <AppInput :icon="icon" :submit="addTodoList" />
        <todoList :todoList="todoList" />
    </div>
</template>

<script>
import AppTitle from '@/components/common/AppTitle';
import AppInput from '@/components/common/AppInput';
import todoList from '@/components/todoList/todoList';

export default {
    components: {
        AppTitle,
        AppInput,
        todoList
    },
    props: ['todoList'],
    data() {
        return {
            title: 'todoList',
            contents: '2020년 7월 15일 수요일',
            icon: 'plus'
        }
    },
    created() {
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
        },
        addTodoList(inputVal) {
            this.$store.dispatch('addTodoList', inputVal);
            this.getTodoList();
        }
    }
}
</script>