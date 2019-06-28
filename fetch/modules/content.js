import {fetch_json} from '../api'
export default {
  // 获取内容
  content_get_news_detail (params) {
    return fetch_json('/sw_portal/portal/contentInfo/queryContent', params)
  }
}
