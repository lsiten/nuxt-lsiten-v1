import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import configs from '../configs/index'

Vue.prototype.axios = axios
// axios 配置
axios.defaults.timeout = 60000 * 3
// 后台接口公共前缀
// axios.defaults.baseURL = '/api';
// 线上后台接口  http://api.hostdev.ennjoy.cn http://www.ennjoy.cn/YinKe
// axios.defaults.baseURL = 'http://10.19.40.2:9009'
// axios.defaults.baseURL = 'http://10.8.10.130:8088'
// axios.defaults.baseURL = 'http://10.8.10.41:9009'
// axios.defaults.baseURL = 'http://10.8.10.41:9009'
// axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.baseURL = configs.api.baseUrl || 'http://www.singlewindow.gx.cn/api'
axios.defaults.withCredentials = false

// POST传参序列化
axios.interceptors.request.use((config) => {
  // let oldData = config.data;
  if (!config.data) {
    config.data = {}
  }
  // config.headers["Set-Cookie"] = "token:"+store.state.user.token;
  if (config.method === 'post') {
    if (!config.headers['Content-Type']) { config.data = qs.stringify(config.data) } else { config.data = JSON.stringify(config.data) }
  }
  if (!config.headers['Content-Type']) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  }
  return config
}, (error) => {
  console.log('请求网络异常')
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  let filename = res.headers['filename'] || null
  if (filename) {
    return {
      data: res.data,
      filename: filename
    }
  } else {
    let response = res.data
    if (response.resultFlag) {
      return res
    } else if (parseInt(response.errcode) === 304) {
      return Promise.reject(response)
    } else {
      return Promise.reject(response)
    }
  }
}, (error) => {
  console.log('返回数据网络异常')
  if (error.response) {
    switch (error.response.status) {
      case 404:
        // 后台返回的404
        Vue.$router.push('404')
        break
      case 403:
        // 后台返回的403
        Vue.$router.push('403')
    }
  }
  return Promise.reject(error)
})

export function fetch (url, params, headers) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, headers).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function fetch_json (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    }}).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function dowload_json (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'arraybuffer'}).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}
