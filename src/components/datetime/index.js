import datetime from './datetime';

datetime.install = function (Vue) {
  Vue.component(datetime.name, datetime);
};

export default datetime;
