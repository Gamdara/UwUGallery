import Vue from 'vue'
import Vuex from 'vuex'
import json from '@/data.json'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images : json
  },
  getters: {
    getImages: (state) => (id) => {
      return state.images[id]
    },
    maxLength: state => {
      return state.images.length
    },
    randomize: state => {
      return state.images
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
