// 全局安装自定义组件
import Vue from 'vue';
import mPagination from './mPagination';
import testCom from './testCom';
import note from './note';
import goPrevious from './goPrevious';
import blueLoading from './blueLoading';

Vue.component(mPagination.name, mPagination); // 分页
Vue.component(testCom.name, testCom);
Vue.component(note.name, note);
Vue.component(goPrevious.name, goPrevious); // 返回上一页
Vue.component(blueLoading.name, blueLoading);
