const state = () => ({
    isLoggedIn: false,
    loginFailure: false,
    user: {
        id: '',
        name: '',
    }
});


const getters = {
    getIsLoggedIn(state) {
        return state.isLoggedIn;
    }
}

const mutations = {
    
    setIsLoggedIn(state, data) {
        state.isLoggedIn = data;
    },
    setLoginFailure(state, data) {
        state.loginFailure = data;
    },
    setUserName(state, data) {
        state.user.name = data;
    }
}

const actions = {
    loginAction(context, form) {
        //로그인 하기
        if(form.id === 'user' && form.password === '1004') {
            context.commit('setIsLoggedIn', true);
            context.commit('setUserName', '유저');
        } else {
            context.commit('setLoginFailure', true);
        }
    },
    
}

export default {
    nameSpaced : true,
    state,
    getters,
    mutations,
    actions
}