import api from '../../fetch/modules/com'
import * as types from '../types'

const state = () => ({
  loading: false,
  menu: []
})

const getters = {
  'com_get_menu': state => state.menu
}

const mutations = {
  [types.COM_SET_MENU] (state, menu) {
    let navs = [
      {
        id: 1,
        name: '首页'
      }
    ];
    (menu.children || []).map(item => {
      navs.push({
        id: item.menuId,
        name: item.menuName
      })
    })
    state.menu = navs
  }
}

const actions = {
  com_get_menu ({commit}, param) {
    return new Promise((resolve, reject) => {
      api.com_get_menu(param)
        .then(res => {
          commit(types.COM_SET_MENU, res.body)
          resolve && resolve(res)
        })
        .catch(err => {
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
