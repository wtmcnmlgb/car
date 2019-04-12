<template>
  <el-dialog title="更改信息" :visible.sync="isOpen" custom-class="small">
    <blue-loading v-show="formLoad" w="50px" h="50px"></blue-loading>
    <el-form :model="formData" label-width="80px">
      <el-form-item label="姓名">
        <el-input size="small" v-model.trim="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input size="small" v-model.trim="formData.password"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="level-center">
      <el-button :loading="loading" size="small" type="primary" @click="submit">确认</el-button>
      <el-button :loading="loading" size="small" @click="cancel">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'userEdit',
  props: {
    openDialog: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      formLoad: false,
      formData: {
        name: 's',
        password: 'www',
      },
      isOpen: false,
    };
  },
  watch: {
    isOpen(val) {
      this.$emit('update:openDialog', val);
    },
    openDialog(val) {
      this.isOpen = val;
      if (!val) {
        Object.keys(this.formData)
          .forEach((key) => {
            this.formData[key] = '';
          });
      } else {
        // this.formData.name = this.mercNo;
        // if (this.channelNo !== '' && this.productType !== '') {
        // }
      }
    },
  },
  methods: {
    submit() {
      console.log(this.formData);
      this.isOpen = false;
    },
    cancel() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
