<template>
  <div>
    <div class="heard">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <div class="tital">{{labels}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["labels"]
};
</script>

<style lang="less" scoped>
.heard {
  display: flex;
  justify-content: space-between;
  height: 16.667vw;
  line-height: 16.667vw;
  padding: 0 5.556vw;
  .tital {
    flex: 1;
    text-align: center;
    font-size: 3.889vw;
    font-weight: 900;
    margin-right: 5.556vw;
  }
}
</style>