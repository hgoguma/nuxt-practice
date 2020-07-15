<template>
    <div>
        <div class="info">
            할 일 {{ todoList.filter(element => element.checkedFlag === false).length }} 개 남음
        </div>
        <b-list-group>
            <!-- <div class="list-wrapper" v-for="ele in todoList" :key="ele.id" @mouseleave="mouseLeaveEvt">
                <div class="list-item" @mouseover="mouseoverEvt(ele.id)">   
                    <input type="checkbox" class="form-check-input" :checked="ele.checkedFlag" :id="ele.id" @click="checkClick(ele.id)">
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
            </div> -->
                <draggable 
                    :list="todoList"
                    :disabled="!enabled"
                    :move="checkMove"
                    @start="dragging = true"
                    @end="dragging = false"
                >
                    <div class="list-item-wrapper" v-for="ele in todoList" :key="ele.id" @mouseleave="mouseLeaveEvt">
                        <div class="list-item"  @mouseover="mouseoverEvt(ele.id)">   
                            <input type="checkbox" class="form-check-input" :checked="ele.checkedFlag" :id="ele.id" @click="checkClick(ele.id)">
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
                </draggable>
        </b-list-group>
    </div>
</template>

<style scoped>

    .info {
        text-align: center;
    }
    
    .list-item-wrapper {
        margin: 10px;
        display: flex;
    }

    .list-item {
        flex: 1 1;
        display: flex;
        align-items: center;
    }

    .form-check-input {
        position: static;
        margin: 0;
    }

    .form-check-input[type="checkbox"]+label {
        width: 33px;
        height: 33px;
        background-color: #eee;
        margin-right: 15px;
        display: none;
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
import draggable from 'vuedraggable';

export default {
    props: ['todoList'],
    components: {
        draggable
    },
    data() {
        return {
            hoverdId: '',
            enabled: true,
            dragging: false
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
        },
        checkMove: function(e) {
            window.console.log("Future index: " + e.draggedContext.futureIndex);
        }
    }
    
}
</script>