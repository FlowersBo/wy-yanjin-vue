/**
 * Created by Flowers博爵 on 2018/11/29.
 */
import {RECEIVE_DATA_HOME,RECEIVE_DATA_NAV,RECEIVE_DATA_TOPIC,RECEIVE_INDEX} from './mutation-type'
export default {
  [RECEIVE_DATA_HOME](state,{datahome}){
    state.datahome=datahome
  },
  [RECEIVE_DATA_NAV](state,{datanav}){
    state.datanav=datanav
  },
  [RECEIVE_DATA_TOPIC](state,{datatopic}){
    state.datatopic=datatopic
  },
  [RECEIVE_INDEX](state,{index}){
   state.index=index
  }
}
