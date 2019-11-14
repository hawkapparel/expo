import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
	data : {},
})

export const getters = {
	
}

export const mutations = {
	setData(state, payload){
		state.data = payload;
	}
}

export const actions = {
	nuxtServerInit ( { commit }, { store, params, query, route, redirect } ) {

	},
}
