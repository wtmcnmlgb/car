<template>
  <div>
    <div class="header">
      <label style="margin: auto 10px;font-weight: 500;">{{formData.name}} 车辆详情</label>
    </div>
    <div class="div-header">
      <el-row class="text-center">
        <el-col :span="20" class="col-pad">
          <label>{{formData.name}}</label>
        </el-col>
        <el-col :span="4">
          <el-button type="text">语音通话</el-button>
        </el-col>
      </el-row>
      <el-row class="text-center head-footer">
        <el-col :span="20" class="col-pad">
          <label>{{formData.type}}</label>
        </el-col>
        <el-col :span="4">
          <el-button type="text" @click="modify">修改状态</el-button>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="16" class="col-pad">
          <label>{{formData.type}}</label>
        </el-col>
        <el-col :span="8" class="col-pad" style="text-align: right;">
          <el-button size="small" @click="complete">完成</el-button>
          <el-button size="small" @click="amend">修改</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="div-header">
      <el-row>
        <el-col :span="5" class="col-pad">上一站：</el-col>
        <el-col :span="16" class="col-pad">{{formData.stand}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="5" class="col-pad">下一站：</el-col>
        <el-col :span="14" class="col-pad">{{formData.next}}</el-col>
        <el-col :span="5">
          <el-button :loading="loading" type="text" @click="reached">已到达</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <driver-foot :isChange="isChange"></driver-foot>
    </div>

    <state-information :openDialog.sync="isOpenType" @refresh="getTableData"></state-information>
    <while-travel :openDialog.sync="dialogOpen"></while-travel>
  </div>
</template>

<script>
import StateInformation from './components/StateInformation';
import WhileTravel from './components/WhileTravel';

export default {
  name: 'DriverView',
  data() {
    return {
      isOpenType: false,
      loading: false,
      formData: {
        name: '粤A 123456',
        next: '广州市新塘聚散中心',
        stand: '广州大学城',
        type: '行驶中',
      },
      isChange: 0,
      dialogOpen: false,
    };
  },
  watch: {
    'radio'(val) {
      if (val === 2) {
        this.sun = '';
      }
    },
  },
  methods: {
    getTableData() {
      console.log('dada');
    },
    reached() {
      this.loading = true;
      this.$confirm('确认已到达？').then(() => {
        this.loading = false;
        this.$message.success('到达成功！');
      }).catch(() => {
        this.loading = false;
        this.$message.warning('取消到达！');
      });
    },
    modify() {
      this.dialogOpen = true;
    },
    complete() {},
    amend() {
      this.isOpenType = true;
    },
  },
  components: {
    StateInformation,
    WhileTravel,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #f0f0ff;
  height: 25px;
  padding-top: 5px;
}
.div-header {
  padding: 10px 10px 0 10px;
}
.head-footer {
  border-bottom: 1px solid black;
  // padding: 0 10px;
}
.footer {
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
}
.col-pad {
  padding: 12px 0;
}
</style>
