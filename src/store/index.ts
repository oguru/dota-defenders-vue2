import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        test: {
            id: 1,
            name: 'testname'
        },
        hero: {}
    },

    //Functions used to return values from the store. Use these when comput­ations need to be performed on the state value before they are passed to the caller. (You can also access the state directly.)
    getters: {
        getHero: state => state.hero
    },

    //functions to change the data on the store - use store.commit('nameOfFn', payload)
    //payload is an argument or object of arguments
    mutations: {
        updateHero: (state, payload) => {
            state.hero = { ...state.hero, payload }
        }
    },

    //sits between code and mutations - can perform async. Best to use instead of commit. Uses context which acts as the store (name: context = {context.commit('mutationName')})
    //Use store.dispatch('nameOfAction')
    actions: {
        // commitHero: (state, payload) => {
        //     updateH
        // }
    },

    //
    modules: {}
})

export default store
