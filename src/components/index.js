// 全局安装自定义组件
import Vue from 'vue';
import mPagination from './mPagination';
import testCom from './testCom';
import foot from './foot';
import driverFoot from './driverFoot';
import goPrevious from './goPrevious';
import blueLoading from './blueLoading';

Vue.component(mPagination.name, mPagination); // 分页
Vue.component(testCom.name, testCom);
Vue.component(foot.name, foot);
Vue.component(driverFoot.name, driverFoot);
Vue.component(goPrevious.name, goPrevious); // 返回上一页
Vue.component(blueLoading.name, blueLoading);
