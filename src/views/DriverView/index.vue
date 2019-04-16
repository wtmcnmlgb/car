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
        <el-col :span="8" class="col-pad">
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

    <state-information :openDialog.sync="isOpenType"></state-information>

    <el-dialog title="修改行车状态" :visible.sync="dialogOpen" custom-class="small">
      <!-- <el-radio v-model="radio" :label="1">
        任务状态
        <el-radio-group v-model="sun">
          <el-radio :label="1">行驶中</el-radio>
          <el-radio :label="2">休息中</el-radio>
        </el-radio-group>
      </el-radio>
      <el-radio v-model="radio" :label="2">休息状态</el-radio> -->
      <el-radio-group v-model="adminRole">
        <el-radio v-for="item in adminRoles" :key="item.id" :label="item.id">{{item.name}}</el-radio>
      </el-radio-group>

      <div slot="footer" class="level-center">
        <el-button size="small" type="primary" @click="submit">确认</el-button>
        <el-button size="small" @click="cancel">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import StateInformation from './components/StateInformation';

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
      adminRole: '',
      adminRoles: [{
        id: 1,
        name: '任务状态',
      }, {
        id: 2,
        name: '休息状态',
      }],
      // radio: 1,
      // sun: 1,
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
    submit() {
      console.log(this.adminRole);
    },
    cancel() {
      this.dialogOpen = false;
    },
    complete() {},
    amend() {
      this.isOpenType = true;
    },
  },
  components: {
    StateInformation,
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
