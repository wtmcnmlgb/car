<template>
  <div>
    <div class="header">
      <el-row>
        <el-col :span="2">
          <go-previous></go-previous>
        </el-col>
        <el-col :span="10">
          <div style="padding-top: 6px;">车辆详情</div>
        </el-col>
      </el-row>
    </div>
    <div class="div-header">
      <el-row class="text-center head-footer">
        <el-col :span="20">
          <label>{{formData.name}}</label>
          <p>{{formData.car_type}}</p>
        </el-col>
        <el-col :span="4">
          <el-button type="text">语音通话</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="div-header">
      <el-form>
        <el-form-item label="最近状态：">
          {{formData.type}} {{formData.time}}
          <el-button type="text" style="float: right;" @click="moth">更多<div class="el-icon-arrow-right"></div></el-button>
        </el-form-item>
        <el-form-item label="下一站：">{{formData.next}}</el-form-item>
        <el-form-item label="司机：">{{formData.car}}</el-form-item>
        <el-form-item label="联系电话：">{{formData.phone}}</el-form-item>
      </el-form>
    </div>
    <more-data :openDialog.sync="isOpen"></more-data>
    <div class="div-header">实时位置</div>
  </div>
</template>

<script>
import moreData from './components/moreData';

export default {
  name: 'InformationDetails',
  data() {
    return {
      isOpen: false,
      formData: {
        name: '粤A 66869',
        car_type: '行驶中',
        type: '疲劳驾驶',
        time: '2019/04/08 12:12:30',
        next: '广州市莘潭路中心街道',
        car: '张三敢',
        phone: '15678546546',
      },
    };
  },
  methods: {
    moth() {
      this.isOpen = true;
    },
  },
  components: {
    moreData,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #f0f0ff;
}
.div-header {
  padding: 10px 10px 0 10px;
}
.head-footer {
  border-bottom: 1px solid black;
  padding: 0 10px;
}
</style>
