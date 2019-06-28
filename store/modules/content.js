import api from '../../fetch/modules/content'

const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  content_get_news_detail ({commit}, param) {
    return new Promise((resolve, reject) => {
      api.content_get_news_detail(param)
        .then(res => {
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
