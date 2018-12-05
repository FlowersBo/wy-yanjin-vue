/**
 * Created by Flowers博爵 on 2018/11/29.
 */
import {RECEIVE_DATA_HOME,RECEIVE_DATA_NAV,RECEIVE_DATA_TOPIC,RECEIVE_INDEX} from './mutation-type'
import {reqDataHome,reqDataNav,reqDataTopic} from '../api'
export default {
  async getDataHome({commit},cb){
    const result=await reqDataHome()
    if(result.code===0){
      const datahome=result.data
      commit(RECEIVE_DATA_HOME,{datahome})
      typeof cb==='function'&& cb()
    }
  },
  async getDataNav({commit},cb){
    const result=await reqDataNav()
    if(result.code===0){
      const datanav=result.data
      commit(RECEIVE_DATA_NAV,{datanav})
      typeof cb==='function'&& cb()
    }
  },
  async getDataTopic({commit},cb){
    const result=await reqDataTopic()
    if(result.code===0){
      const datatopic=result.data
      commit(RECEIVE_DATA_TOPIC,{datatopic})
      typeof cb==='function'&& cb()
    }
  },
  getIndex({commit},{index}){
    commit(RECEIVE_INDEX,{index})
    
    console.log(index);
  }
}


