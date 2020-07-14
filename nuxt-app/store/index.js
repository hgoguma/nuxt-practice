import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import pageModule from './modules/page'
import movieDataModule from './modules/movieData'
import todoListModule from './modules/todoList'



Vue.use(Vuex);

const createStore = () => {

    return new Vuex.Store({
        
        actions: {
            nuxtServerInit(vuexContext, context) {
            },
        },

        modules: {
            user: userModule,
            page: pageModule,
            movieData: movieDataModule,
            todoList: todoListModule
        }
    })
};

export default createStore;