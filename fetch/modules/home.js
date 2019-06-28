import {fetch, fetch_json} from '../api'
export default {
  /* 获取中央apps */
  home_get_center_app_list (params) {
    return fetch('sw_portal/portal/apply/central_standard', params)
  },
  /* 获取地方apps */
  home_get_local_app_list (params) {
    return fetch_json('sw_portal/portal/apply/local_standard', params)
  },
   /* 获取地方apps */
   home_get_news (params) {
    return fetch_json('/sw_portal/portal/contentInfo/queryList', params)
  }
}
