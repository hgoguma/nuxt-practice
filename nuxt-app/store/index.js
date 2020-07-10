import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import pageModule from './modules/page'
import movieDataModule from './modules/movieData'



Vue.use(Vuex);

const createStore = () => {

    return new Vuex.Store({
        
        actions: {
            nuxtServerInit(vuexContext, context) {
                //console.log('nuxtServerInit!! 현재 상태 : ', vuexContext.state.user);
            },
        },

        modules: {
            user: userModule,
            page: pageModule,
            movieData: movieDataModule
        }
    })
};

export default createStore;