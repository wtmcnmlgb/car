<template>
  <div>
    <div class="header">
      <el-row>
        <el-col :span="2">
          <go-previous></go-previous>
        </el-col>
        <el-col :span="10">
          <div style="padding-top: 6px;">任务车辆管理</div>
        </el-col>
      </el-row>
    </div>
    <div style="padding: 10px">
      <el-input size="small" placeholder="请输入车牌号">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div style="text-align: center;">
      <el-button size="medium" type="primary" plain @click="newest">最新</el-button>
      <el-button size="medium" type="danger" plain @click="risk">危险</el-button>
    </div>
    <div>
      <div v-for="(item,index) in retaData" :key="index" class="div-header">
        <el-row class="div-footer">
          <el-col :span="16">
            <div class="div-name">{{item.name}}</div>
            <div v-if="type === 2">状态：{{item.type}}</div>
            <div v-if="type === 2">时间：{{item.time}}</div>
            <div v-if="type === 1">4h内异常次数：{{item.amount}}</div>
          </el-col>
          <el-col :span="8">
            <el-button size="small" type="primary" @click="details(item)">详情</el-button>
            <el-button size="small" @click="determine(item)">确认</el-button>
          </el-col>
        </el-row>
      </div>
      <m-pagination :total="total" @handleFn="handleFn"></m-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskVehicleManagement',
  data() {
    return {
      total: 0,
      formData: {
        audit_status: '',
      },
      retaData: [
        {
          name: '粤A 66688',
          type: '车检',
          time: '2019/01/05 12:00:00',
          amount: '12',
        }, {
          name: '粤A 88856',
          type: '车检',
          time: '2019/03/05 12:00:00',
          amount: '15',
        }, {
          name: '粤A 99866',
          type: '车检',
          time: '2019/03/05 12:00:00',
          amount: '5',
        }, {
          name: '粤A 88566',
          type: '车检',
          time: '2019/03/05 12:00:00',
          amount: '50',
        },
      ],
      type: 1,
    };
  },
  methods: {
    newest() {
      this.type = 1;
    },
    risk() {
      this.type = 2;
    },
    details(item) {
      console.log('item.name', item.name);
      this.$router.push({
        path: '/information_details',
      });
    },
    determine(item) {
      console.log('item.name', item.name);
    },
    handleFn(obj) {
      Object.assign(this.formData, obj);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #f0f0ff;
}
.div-header {
  padding: 0 10px;
}
.div-name {
  font-size: 18px;
}
.div-footer {
  border-bottom: 1px solid black;
  padding-bottom:10px;
  padding-top: 10px;
}
</style>
