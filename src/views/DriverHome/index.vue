<template>
  <div>
    <div class="label">
      <label>{{form.name}}</label>
    </div>
    <el-form label-width="100px" style="margin: 0 auto;">
      <el-form-item label="已绑定">
        <el-button type="text" @click="modify">修改</el-button>
      </el-form-item>
      <el-form-item label="司机">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="联系电话">
        <span>{{form.phone}}</span>
      </el-form-item>
      <el-form-item label="" label-width="0px" class="text-center">
        <el-button :loading="loading" type="primary" @click="onSubmit" size="medium">退出登录</el-button>
      </el-form-item>
    </el-form>
    <user-edit :openDialog.sync="isOpen"></user-edit>
    <div class="footer">
      <foot :isChange="isChange"></foot>
    </div>
  </div>
</template>

<script>
import userEdit from './components/userEdit';

export default {
  name: 'DriverHome',
  data() {
    return {
      loading: false,
      form: {
        name: '李四',
        phone: '88888888',
      },
      isOpen: false,
      isChange: 1,
    };
  },
  methods: {
    modify() {
      this.isOpen = true;
    },
    onSubmit() {
      this.loading = true;
      this.$confirm('确认退出登录？').then(() => {
        this.loading = false;
        this.$router.push({
          path: '/login',
        });
      }).catch(() => {
        this.loading = false;
      });
    },
  },
  components: {
    userEdit,
  },
};
</script>

<style lang="scss" scoped>
.label {
  text-align: center;
  padding-top: 20px;
  font-size: 18px;
}
.footer {
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
}
</style>
