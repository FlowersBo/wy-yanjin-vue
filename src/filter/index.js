/**
 * Created by Flowers博爵 on 2018/12/1.
 */
import Vue from 'vue'
import moment from 'moment'
Vue.filter('date_format',(value, format)=>{
  return moment(value).format(format||'YYYY-MM-DD HH:mm:ss')
})
