import {fetch, fetch_json} from '../api'
export default {
  // 获取左侧菜单
  com_get_menu (params) {
    return fetch_json('/sw_portal/portal/MenuListController/getPortalMenuList', params)
  }
}
