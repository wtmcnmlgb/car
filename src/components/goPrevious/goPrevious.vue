<template>
  <el-button icon="el-icon-arrow-left" class="back-previous-page" type="text" size="small" @click="go">
    <!-- <slot>{{$t('返回上一页')}}</slot> -->
  </el-button>
</template>

<script>
export default {
  name: 'goPrevious',
  methods: {
    go() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.back-previous-page {
  margin: 0 0 5px 0;
}
</style>
