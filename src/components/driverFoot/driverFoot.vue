<template>
  <div class="btnBox" >
    <span class="btn" v-for="(item,index) in msg" :key="index" :class="{ isActive:change === item.id}" @click="isChoose(index,item)">{{item.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'driverFoot',
  props: {
    isChange: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      msg: [{
        name: '首页',
        id: 0,
      }, {
        name: '我的',
        id: 1,
      }],
      change: this.isChange,
    };
  },
  methods: {
    isChoose(index) {
      console.log('index', index);
      if (index === 0) {
        this.$router.push({
          path: '/driver_view',
        });
      } else if (index === 1) {
        this.$router.push({
          path: '/driver_home',
        });
      }
      if (index !== this.change) {
        this.change = index;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
