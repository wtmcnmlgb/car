<template>
  <el-row class="login">
    <h3 class="text-center">车辆管理</h3>
    <el-form :model="form" :rules="formRules" ref="form" label-width="80px">
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account" placeholder="账号" style="width: 250px;"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码" style="width: 250px"></el-input>
      </el-form-item>
    </el-form>
    <div style="padding: 10px 80px;">
      <el-button type="primary" @click="submit" style="width: 100%;">提交</el-button>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        account: '',
        password: '',
      },
    };
  },
  computed: {
    formRules() {
      return {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      };
    },
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.form.account === 'admin' && this.form.password === '123456') {
            this.$message.success({
              showClose: true,
              message: '登录成功!',
              type: 'success',
              duration: 800,
            });
            this.$router.push({
              path: '/vehicle_management_home_page',
            });
          } else if (this.form.account === '粤A 123456' && this.form.password === '123456') {
            this.$message.success({
              showClose: true,
              message: '登录成功!',
              type: 'success',
              duration: 800,
            });
            this.$router.push({
              path: '/driver_view',
            });
          } else {
            this.$message.error({
              showClose: true,
              message: '账号或密码错误',
              type: 'error',
              duration: 800,
            });
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #FFFFFF;
  border-radius: 5px;
}
.login-head-bg {
  height: 130px;
  // background: no-repeat url(../../assets/imgs/login-head-bg.jpg);
  background-size: 100% 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.login-form {
  padding: 10px 20px;
}
</style>
