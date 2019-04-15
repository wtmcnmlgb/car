import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = (r) => require.ensure([], () => r(require('@views/login')), 'login');
const VehicleManagementHomePage = (r) => require.ensure([], () => r(require('@views/VehicleManagementHomePage')), 'VehicleManagementHomePage');
const AccountManagement = (r) => require.ensure([], () => r(require('@views/AccountManagement')), 'AccountManagement');
const RestVehicleManagement = (r) => require.ensure([], () => r(require('@views/RestVehicleManagement')), 'RestVehicleManagement');
const TaskVehicleManagement = (r) => require.ensure([], () => r(require('@views/TaskVehicleManagement')), 'TaskVehicleManagement');
const VechicleDetails = (r) => require.ensure([], () => r(require('@views/VechicleDetails')), 'VechicleDetails');
const InformationDetails = (r) => require.ensure([], () => r(require('@views/InformationDetails')), 'InformationDetails');
const DriverView = (r) => require.ensure([], () => r(require('@views/DriverView')), 'DriverView');
const DriverHome = (r) => require.ensure([], () => r(require('@views/DriverHome')), 'DriverHome');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/vehicle_management_home_page',
      name: '首页',
      component: VehicleManagementHomePage,
    },
    {
      path: '/account_management',
      name: '我的',
      component: AccountManagement,
    },
    {
      path: '/rest_vehicle_management',
      name: '休息车辆管理',
      component: RestVehicleManagement,
    },
    {
      path: '/task_vehicle_management',
      name: '任务车辆管理',
      component: TaskVehicleManagement,
    },
    {
      path: '/vechicle_details',
      name: '任务车辆详细',
      component: VechicleDetails,
    },
    {
      path: '/information_details',
      name: '详情信息',
      component: InformationDetails,
    },
    {
      path: '/driver_view',
      name: '汽车信息',
      component: DriverView,
    },
    {
      path: '/driver_home',
      name: '司机信息',
      component: DriverHome,
    },
  ],
});
