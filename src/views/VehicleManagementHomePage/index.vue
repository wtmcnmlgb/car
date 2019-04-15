<template>
  <div class="text-center">
    <el-header style="padding: 1px;" height="150">
      <div>
        <img src="../../assets/imgs/car.jpg" alt="微信" width="100%" height="150">
      </div>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="8">
          <div class="products" style="border-color: #1296DB;">
            <el-row>
              <h4>所有车辆</h4>
            </el-row>
            <el-row>
              <label>{{payform.amount}}</label>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="products" style="border-color: #1296DB;">
            <el-row>
              <h4>休息车辆</h4>
            </el-row>
            <el-row>
              <label>{{payform.amount}}</label>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="products" style="border-color: #1296DB;">
            <el-row>
              <h4>任务车辆</h4>
            </el-row>
            <el-row>
              <label>{{payform.amount}}</label>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <div style="padding: 20px;">
        <div>
          <el-button style="width: 100%;height: 100%;" @click="rest">
            <h3>休息车辆管理<h3 class="el-icon-arrow-right" style="padding-left: 10px;"></h3></h3>
          </el-button>
        </div>
        <div style="padding-top: 20px;">
          <el-button style="width: 100%;height: 100%;" @click="task">
            <h3>任务车辆管理<h3 class="el-icon-arrow-right" style="padding-left: 10px;"></h3></h3>
          </el-button>
        </div>
      </div>
    </el-main>
    <div class="footer">
      <foot></foot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehicleManagementHomePage',
  data() {
    return {
      payform: {
        amount: 12,
      },
    };
  },
  methods: {
    rest() {
      this.$router.push({
        path: '/rest_vehicle_management',
      });
    },
    task() {
      this.$router.push({
        path: '/task_vehicle_management',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: table;
  table-layout: fixed;
  width: 80px;
  height: 80px;
  margin: 30px auto 0 auto;
  padding: 5px;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
}
.product {
  // display: table;
  table-layout: fixed;
  max-width: 1000px;
  min-width: 250px;
  height: 50px;
  margin: 30px auto 0 auto;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
}
h3 {
  height: 15px;
  margin: auto;
}
.footer {
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
}
</style>
