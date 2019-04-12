<template>
  <el-dialog title="更多状态（近4h内）" :visible.sync="isOpen" custom-class="small">
    <div>
      <div v-for="(item,index) in typeData" :key="index" class="div-header">
        <div class="div-footer">
          <el-row>
            <el-col :span="10">{{item.name}}</el-col>
            <el-col :span="14">{{item.time}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="12" v-if="item.speed">超速速度：{{item.speed}}</el-col>
            <el-col :span="12" v-if="item.limit">限制速度：{{item.limit}}</el-col>
            <el-col :span="12" v-if="item.drive">连续驾驶：{{item.drive}}</el-col>
            <el-col :span="12" v-if="item.rest">中途休息：{{item.rest}}</el-col>
          </el-row>
        </div>
      </div>
      <m-pagination :total="total" @handleFn="handleFn"></m-pagination>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'moreData',
  props: {
    openDialog: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      total: 0,
      formData: {},
      typeData: [
        {
          name: '超速',
          time: '2019/04/08 12:20:45',
          speed: '80',
          limit: '60',
        }, {
          name: '疲劳驾驶',
          time: '2019/05/08 13:25:00',
          drive: '6h',
          rest: '0min',
        }, {
          name: '超速',
          time: '2019/06/01 16:55:45',
          speed: '90',
          limit: '80',
        },
      ],
    };
  },
  watch: {
    isOpen(val) {
      this.$emit('update:openDialog', val);
    },
    openDialog(val) {
      this.isOpen = val;
    },
  },
  methods: {
    handleFn(obj) {
      Object.assign(this.formData, obj);
    },
  },
};
</script>

<style lang="scss" scoped>
.div-header {
  padding: 0 10px;
}
.div-footer {
  border-bottom: 1px solid black;
  padding:10px;
}
</style>
