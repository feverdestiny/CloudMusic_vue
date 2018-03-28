import Vue from 'vue'
import Vuex from 'vuex'
import play from './modules/play'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    play,
  },
  getters
})

export default store
