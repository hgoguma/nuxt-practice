<template>
    <b-list-group>
        <div class="list-wrapper" v-for="ele in todoList" :key="ele.id" @mouseleave="mouseLeaveEvt">
            <div class="list-item" @mouseover="mouseoverEvt(ele.id)">   
                <input type="checkbox" class="form-check-input" :checked="ele.checkedFlag" :id="ele.id" @click="checkClick(ele.id)">
                <label class="form-check-label" :for="ele.id" />
                <input type="text" class="todo-contents" :class="{done: ele.checkedFlag}" v-model="ele.contents" @blur="mouseLeaveEvt" @focus="mouseoverEvt(ele.id)">
            </div>
            <div class="btn-wrapper" v-show="hoverdId === ele.id">
                <b-button variant="outline" @click="modify(ele.id)">
                    <b-icon icon="pencil"></b-icon>
                </b-button>
                <b-button  variant="outline" @click="remove(ele.id)">
                    <b-icon icon="trash"></b-icon>
                </b-button>
            </div>
        </div>
    </b-list-group>
</template>

<style scoped>
    .list-wrapper {
        margin: 10px;
        display: flex;
    }

    .list-item {
        flex: 1 1;
        display: flex;
        align-items: center;
    }

    .form-check-input {
        display: none;
    }

    .form-check-input[type="checkbox"]+label {
        width: 33px;
        height: 33px;
        background-color: #eee;
        margin-right: 15px;
    }

    .form-check-input[type="checkbox"]:checked + label::before {
        content: "\2714";
        text-shadow: 1px 1px 1px rgba(0, 0, 0, .2);  
        font-size: 18px; 
        font-weight:600; 
        color: #fff;  
        background:#ccc;
        text-align: center;
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .btn.btn-outline:hover {
        background-color: #ccc;
    }

    .todo-contents {
        width: 100%;
        height: 33px;
        border: none;
    }
   
    .todo-contents:focus {
        outline: none;
        border-bottom: 1px solid #ced4da;
    }

    .todo-contents.done {
        color: #ced4da;
        text-decoration: line-through;
    }

    .btn-wrapper {
        margin-left: 5px;
    }

</style>

<script>
export default {
    props: ['todoList'],
    data() {
        return {
            hoverdId: ''
        }
    },
    methods: {
        checkClick(id) {
            this.$nuxt.$emit('check', id);
        },
        modify(id) {
            let todoItem = this.todoList[id];
            this.$nuxt.$emit('modify', todoItem);
        },
        remove(id) {
            this.$nuxt.$emit('remove', id);
        },
        mouseoverEvt(id) {
            this.hoverdId = id;
        },
        mouseLeaveEvt() {
            this.hoverdId = '';
        }
    }
    
}
</script>