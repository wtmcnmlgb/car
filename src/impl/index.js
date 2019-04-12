import Vue from 'vue';
import apis from './apis';

const apiObj = {};
for (let req of apis) {
  let reqList = req.list;
  if (Array.isArray(reqList)) {
    // for (let reqItem of reqList) {
    //   apiObj[`${req.module}_${reqItem.method}`] = function (params, doCanCancelRequest = false, doEncrypt = false) {
    //     return new Promise(function (resolve, reject) {
    //       let type, path, data, tokenFlag, headers, opts;
    //       // 如果参数只是传了data数据
    //       if (!params.hasOwnProperty('data')) {
    //         data = params;
    //       } else { // 如果参数包括请求类型等等请求配置
    //         type = params.type;
    //         path = params.path;
    //         data = params.data;
    //         tokenFlag = params.tokenFlag;
    //         headers = params.headers;
    //         opts = params.opts;
    //       }
    //       if (type === undefined) {
    //         type = reqItem.type;
    //       }
    //       if (path === undefined) {
    //         path = reqItem.path;
    //       }
    //       if (tokenFlag === undefined && reqItem.tokenFlag !== undefined) {
    //         tokenFlag = reqItem.tokenFlag;
    //       }
    //       return axiosSet({ type, path, data, resolve, reject, tokenFlag, headers, opts }, doCanCancelRequest, doEncrypt);
    //     });
    //   };
    // }
  }
}

// 请求函数挂载到vue实例原型，$api属性
Vue.prototype.$api = apiObj;

export default apiObj;
