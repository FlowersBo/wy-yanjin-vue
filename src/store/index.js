/**
 * Created by Flowers博爵 on 2018/11/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
