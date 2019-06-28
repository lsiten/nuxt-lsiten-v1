import api from '../../fetch/modules/home'
import * as types from '../types'

const state = () => ({
  centerApplist: {},
  localApplist: {}
})

const getters = {
  'home_get_center_app_list': state => state.centerApplist,
  'home_get_local_app_list': state => state.localApplist
}

const mutations = {
  [types.HOME_SET_CENTER_APP_LIST] (state, apps) {
    state.centerApplist = apps
  },
  [types.HOME_SET_LOCAL_APP_LIST] (state, apps) {
    state.localApplist = apps    
  }
}

const actions = {
  home_get_center_app_list ({commit}, param) {
    return new Promise((resolve, reject) => {
      api.home_get_center_app_list(param).then(res => {
        if (res.resultFlag) {
          commit(types.HOME_SET_CENTER_APP_LIST, res.body)
          resolve(res.body)
        } else {
           // reject(err)
           console.log(res)
        }
      }).catch(err => {
        // reject(err)
        console.log(err)
      })
    })
  },
  home_get_local_app_list ({commit}, param) {
    return new Promise((resolve, reject) => {
      api.home_get_local_app_list(param).then(res => {
        if (res.resultFlag) {
          commit(types.HOME_SET_LOCAL_APP_LIST, res.body)
          resolve(res.data)
        } else {
          // reject(res)
          console.log(res)
        }
      }).catch(err => {
        // reject(err)
        console.log(err)
      })
    })
  },
  home_get_news ({commit}, param) {
    return new Promise((resolve, reject) => {
      api.home_get_news(param).then(res => {
        if (res.resultFlag) {
          resolve(res)
        } else {
          // reject(res)
          console.log(res)
        }
      }).catch(err => {
        // reject(err)
        console.log(err)
      })
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
