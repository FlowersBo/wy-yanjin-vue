/**
 * Created by Flowers博爵 on 2018/11/29.
 */
import Mock from 'mockjs'
import dataHome from './datahome.json'
import dataNav from './datanav.json'
import dataTopic from './datatopic.json'

Mock.mock('/datahome',{code:0,data:dataHome})
Mock.mock('/datanav',{code:0,data:dataNav})
Mock.mock('/datatopic',{code:0,data:dataTopic})
