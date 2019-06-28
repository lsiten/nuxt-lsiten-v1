import {fetch, fetch_json} from '../api'
export default {
  // 获取左侧菜单
  list_get_menu (params) {
    return fetch_json('/sw_portal/portal/MenuListController/getPortalMenuList', params)
  },
  // 获取新闻列表
  list_get_news (params) {
    return fetch_json('/sw_portal/portal/contentInfo/queryList', params)
  }
}
