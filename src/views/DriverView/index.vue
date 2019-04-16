<template>
  <div>
    <div class="header">
      <label style="margin: auto 10px;font-weight: 500;">车辆详情 {{formData.name}}</label>
    </div>
    <div class="div-header">
      <el-row class="text-center head-footer">
        <el-col :span="20">
          <label>{{formData.name}}</label>
        </el-col>
        <el-col :span="4">
          <el-button type="text">语音通话</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="div-header">
      <el-form>
        <el-form-item label="上一站：">{{formData.stand}}</el-form-item>
        <el-form-item label="下一站：">{{formData.next}}</el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <foot :isChange="0"></foot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DriverView',
  data() {
    return {
      formData: {
        name: '',
        next: '广州市新塘聚散中心',
        stand: '广州大学城',
      },
    };
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
.footer {
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
}
</style>
