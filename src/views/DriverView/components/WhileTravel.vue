<template>
  <el-dialog title="修改行车状态" :visible.sync="dialogOpen" custom-class="small">
    <div style="height: 150px;">
      <el-row>
        <el-radio v-model="radio" label="1">
          任务状态
          <el-row style="text-indent: 1em;">
            <el-radio-group v-model="adminRole">
              <el-row>
                <el-radio :label="3">行驶中</el-radio>
              </el-row>
              <el-row>
                <el-radio :label="6">休息中</el-radio>
              </el-row>
            </el-radio-group>
          </el-row>
        </el-radio>
      </el-row>
      <el-row>
        <el-radio v-model="radio" label="2">休息状态</el-radio>
      </el-row>
    </div>
    <div slot="footer" class="level-center">
      <el-button size="small" type="primary" @click="submit">确认</el-button>
      <el-button size="small" @click="cancel">取消</el-button>
    </div>

    <state-information :openDialog.sync="isOpenType" @close="closeSelf"></state-information>
  </el-dialog>
</template>

<script>
import StateInformation from './StateInformation';

export default {
  name: 'WhileTravel',
  props: {
    openDialog: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      dialogOpen: false,
      radio: '1',
      adminRole: '',
      adminRoles: [{
        id: 1,
        name: '任务状态',
      }, {
        id: 2,
        name: '休息状态',
      }],
      isOpenType: false,
    };
  },
  watch: {
    dialogOpen(val) {
      this.$emit('update:openDialog', val);
    },
    openDialog(val) {
      this.dialogOpen = val;
    },
    'radio'(val) {
      if (val === '2') {
        this.adminRole = '';
      }
    },
  },
  methods: {
    submit() {
      console.log(this.adminRole);
      if (this.radio === '2') {
        this.isOpenType = true;
      }
    },
    cancel() {
      this.dialogOpen = false;
    },
    closeSelf() {
      this.dialogOpen = false;
      this.$emit('refresh');
    },
  },
  components: {
    StateInformation,
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  padding: 5px 0;
}
</style>
