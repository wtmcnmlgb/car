<template>
  <div>
    <div class="header">
      <el-row>
        <el-col :span="2">
          <go-previous></go-previous>
        </el-col>
        <el-col :span="10">
          <div style="padding-top: 6px;">休息车辆管理</div>
        </el-col>
      </el-row>
      <!-- <go-previous></go-previous>
      <label style="margin: auto 10px;font-weight: 500;">休息车辆管理</label> -->
    </div>
    <div style="padding: 10px">
      <el-input size="small" placeholder="请输入车牌号">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div>
      <el-row v-for="(item,index) in retaData" :key="index" class="div-footer">
        <el-col :span="20">
          <div class="div-name">{{item.name}}</div>
          <div>休息原因：{{item.type}}</div>
          <div>开始时间：{{item.star_time}}</div>
          <div>结束时间：{{item.end_time}}</div>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" size="small" @click="complete">完成</el-button>
        </el-col>
      </el-row>
      <m-pagination :total="total" @handleFn="handleFn"></m-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestVehicleManagement',
  data() {
    return {
      formData: {},
      retaData: [
        {
          name: '粤A 66688',
          type: '车检',
          star_time: '2019/01/05 12:00:00',
          end_time: '2019/02/05 12:00:00',
        }, {
          name: '粤A 88856',
          type: '车检',
          star_time: '2019/03/05 12:00:00',
          end_time: '2019/05/05 12:00:00',
        }, {
          name: '粤A 88856',
          type: '车检',
          star_time: '2019/03/05 12:00:00',
          end_time: '2019/05/05 12:00:00',
        }, {
          name: '粤A 88856',
          type: '车检',
          star_time: '2019/03/05 12:00:00',
          end_time: '2019/05/05 12:00:00',
        },
      ],
      total: 0,
    };
  },
  methods: {
    complete() {
      const h = this.$createElement;
      this.$msgbox({
        title: '确认结束休息状态？',
        message: h('p', null, [
          h('span', null, '同时变更为任务状态？'),
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中';
            instance.confirmButtonLoading = false;
            done();
          } else {
            done();
          }
        },
      }).catch(() => {});
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
.div-name {
  // padding-top: 10px;
  font-size: 18px;
}
.div-footer {
  border-bottom: 1px solid black;
  padding:10px;
}
</style>
