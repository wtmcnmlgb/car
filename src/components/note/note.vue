<template>
  <!-- <div class="note">
    <div class="box">
      <el-button size="medium" type="text">首页</el-button>
    </div>
    <div class="box">
      <el-button size="medium" type="text">我的</el-button>
    </div>
  </div> -->
  <div class="btnBox" >
    <span class="btn" v-for="(item,index) in msg" :key="index" :class="{ isActive:isChange === item}" @click="isChoose(index,item)">{{item.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'note',
  data() {
    return {
      msg: [{
        name: '首页',
        id: 1,
      }, {
        name: '我的',
        id: 2,
      }],
      isChange: 1,
    };
  },
  methods: {
    isChoose(index) {
      console.log('index', index);
      if (index === 0) {
        this.$router.push({
          path: '/home_page',
        });
      } else if (index === 1) {
        this.$router.push({
          path: '/my_home',
        });
      }
      if (index !== this.isChange) {
        this.isChange = index;
        this.isChange = 1;
      } else {
        this.isChange = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// .box{
//   float:left;
//   width:50%;
//   border:1px solid black;
//   box-sizing:border-box;
//   -moz-box-sizing:border-box; /* Firefox */
//   -webkit-box-sizing:border-box; /* Safari */
// }
*{
  padding: 0;
  margin: 0;
}
.btnBox{
  margin: auto;
  text-align: center;
}
.btn{
  float:left;
  width:50%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #CCCCCC;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  text-align: center;
  padding-top: 10px;
}
.isActive{
  background: #00A8E6;
}
</style>
