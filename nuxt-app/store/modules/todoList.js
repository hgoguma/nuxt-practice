const state = () => ({
    todoList: []
});


const getters = {
    getTodoList(state) {
        return state.todoList;
    }
}

const mutations = {
    setTodoList(state, data) {
        state.todoList.push(data);
    },
    setCheckFlag(state, idx) {
        state.todoList[idx].checkedFlag = !state.todoList[idx].checkedFlag;
    },
    removeTodoItem(state, idx) {
        state.todoList.splice(idx, 1);
    },
    modifyTodoItem(state, ele) {
        let idx = state.todoList.findIndex(element => element.id === ele.id);
        state.todoList[idx].contents = ele.contents;
    }
}

const actions = {
    addTodoList(context, contents) {
        let data = {
            id: context.state.todoList.length,
            contents: contents,
            checkedFlag: false
        }
        context.commit('setTodoList', data);
    },
    setCheckFlag(context, id) {
        let idx = context.state.todoList.findIndex(element => element.id === id);
        context.commit('setCheckFlag', idx);
    },
    removeTodoItem(context, id) {
        let idx = context.state.todoList.findIndex(element => element.id === id);
        context.commit('removeTodoItem', idx);
    },
    modifyTodoItem(context, ele) {
        context.commit('modifyTodoItem', ele);
    }
}

export default {
    nameSpaced : true,
    state,
    getters,
    mutations,
    actions
}