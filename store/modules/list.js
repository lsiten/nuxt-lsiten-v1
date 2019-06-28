import api from '../../fetch/modules/list'
import * as types from '../types'

const state = () => ({
  title: '',
  menu: [],
  news: []
})

const getters = {
  'list_get_menu': state => state.menu,
  'list_get_title': state => state.title,
  'list_get_news': state => state.news
}

const mutations = {
  [types.LIST_SET_MENU] (state, menu) {
    state.menu = menu
  },
  [types.LIST_SET_TITLE] (state, title) {
    state.title = title.menuName || ''
  },
  [types.LIST_SET_NEWS] (state, news) {
    state.news = news
  }
}

const actions = {
  list_get_menu ({commit}, param) {
    return new Promise((resolve, reject) => {
      api.list_get_menu(param)
        .then(res => {
          if (parseInt(res.body.menuLevel) > 1) {
            resolve && resolve(res.body)
          } else {
            commit(types.LIST_SET_MENU, (res.body.children || []))
            commit(types.LIST_SET_TITLE, res.body)
          }
        })
        .catch(err => {
          // reject(err)
          console.log(err)
        })
    })
  },
  list_get_news ({commit}, param) {
    return new Promise((resolve, reject) => {
      api.list_get_news(param)
        .then(res => {
          commit(types.LIST_SET_NEWS, (res.body.datas || []))
          resolve(res.body)
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
