<template>
  <el-dialog title="休息状态信息修改" :visible.sync="isOpenType" custom-class="small" :append-to-body="true">
    <el-form ref="form" :model="form" @submit.native.prevent label-width="120px">
      <el-form-item label="休息原因：">
        <el-radio-group v-model="form.radio">
          <el-radio :label="1">故障</el-radio>
          <el-radio :label="2">车检</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="开始休息时间：">
        <datetime v-model="form.start_time"></datetime>
      </el-form-item>
      <el-form-item label="预计结束时间：">
        <datetime v-model="form.end_time"></datetime>
      </el-form-item>
      <el-form-item label-width="0px" class="text-center">
        <el-button size="small" type="primary" :loading="loading" @click="submit">确认</el-button>
        <el-button size="small" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'StateInformation',
  props: {
    openDialog: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      isOpenType: false,
      form: {
        radio: '',
        start_time: '',
        end_time: '',
      },
    };
  },
  watch: {
    isOpenType(val) {
      // if (!val) {
      //   this.form = '';
      // }
      this.$emit('update:openDialog', val);
    },
    openDialog(val) {
      this.isOpenType = val;
    },
  },
  methods: {
    submit() {
      console.log('this.form', this.form);
    },
    cancel() {
      this.isOpenType = false;
      this.$emit('refresh');
    },
  },
};
</script>
