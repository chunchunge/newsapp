<template>
  <div class="procha" @click="jumpPage">
    <div class="left">{{label}}</div>
    <div class="right">
      {{desl}}
      <span class="iconfont iconjiantou1"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "desl"],
  methods: {
    jumpPage() {
      //触发一个自定义事件,告诉父组件这个按钮被点击了
      this.$emit("jump", this.label);
    }
  }
};
</script>

<style lang="less" scoped>
.procha {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vw;
  border-bottom: 1px solid #999;
  margin-left: 4.167vw;
  .right {
    font-size: 14px;
    color: #dedede;
    margin-right: 2.778vw;
  }
}
</style>