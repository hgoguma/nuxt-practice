const { fetchData, getMovieDataAPI, modifyDataAPI } = require('../../js/data');

// initial state
const state = {
    totalData: 0,
    movieData: [],
    singleData: {},
    modifySuccess: false,
}

const getters = {
    getMovieData(state) {
        return state.movieData;
    },
    getTotalData(state) {
        return state.totalData;
    },
    getSingleData(state) {
        return state.singleData;
    },
    getModifySuccess(state) {
        return state.modifySuccess;
    }
}

// mutations
const mutations = {
    initMovieData(state) {
        state.movieData = [];
    },

    initSingleData(state) {
        state.singleData = {};
    },

    setData(state, data) {
        state.totalData = data.totalData;
        state.movieData = data.results;
    },
    
    singleData(state, data) {
        state.singleData = data;
    },

    setModifySuccess(state, data) {
        state.modifySuccess = data;
    }

    // modifiedMovieData(state, modifiedData) {
    //     let index = state.movieData.findIndex( element => element.id === modifiedData.id ); //해당되는 배열의 index 가져오기
    //     Vue.set(state.movieData, index, modifiedData);
    //     //Vue.set(수정할 state, key값 or index , 대체할 state)
    //     //state.movieData[index] = modifiedData; -> 그냥 할당하면 vue가 state의 변화를 감지 못함.
    // }
}

// actions
const actions = {
    initMovieData(context) { //movieData 초기화
        context.commit('initMovieData');
    },

    initSingleData(context) { //movieData 초기화
        context.commit('initSingleData');
    },

    setData(context, pageOption) {
        context.dispatch('initMovieData');
        let data = fetchData(pageOption);
        context.commit('setData', data);
    },

    getMovieData(context, payload) {
        let data = getMovieDataAPI(payload);
        context.commit('singleData', data);
    },

    setModifySuccess(context, payload) {
        context.commit('setModifySuccess', payload);  
    },

    modifyData(context, payload) {
        console.log('modifyData 액션!!');
        let result = modifyDataAPI(payload);
        debugger;
        if(result == "success") {
            console.log('API 통신 성공!');
            debugger;
            context.dispatch('setModifySuccess', true);
            context.dispatch('initSingleData');
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}