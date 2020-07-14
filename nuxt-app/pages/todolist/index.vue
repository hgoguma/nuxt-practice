<template>
    <div class="contents">
        <div class="contents-wrapper">
            <todoList :todoList="todoList" />
        </div>
    </div>
</template>

<style scoped>

    .contents-wrapper {
        max-width: 768px;
        min-height: 400px;
        margin: 0 auto;
    }

</style>

<script>
import todoList from '../../container/todoList';

export default {

    components: {
        todoList,
    },

    asyncData({store}) {
        return {
            todoList: store.getters['getTodoList']
        }
    },

    data() {
        return {
            
        }
    },
    created() {
        
    },
    methods: {
       
     
    }
}
</script>