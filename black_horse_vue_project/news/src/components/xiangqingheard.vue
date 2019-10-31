<template>
  <div class="heard">
    <div class="left">
      <div class="jiantou">
        <span class="iconfont iconjiantou2"  @click="$router.back()"></span>
      </div>
      <div class="new">
        <span class="iconfont iconnew"></span>
      </div>
    </div>
    <div class="right">已关注</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.heard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 16.667vw;
  line-height: 16.667vw;
  padding: 4.167vw;
  box-sizing: border-box;
}
.left {
  display: flex;
  height: 15vw;
  line-height: 15vw;

  .iconjiantou2 {
    font-size: 5vw;
  }
  .new {
    margin-left: 1.667vw;
    .iconnew {
      font-size: 15vw;
    }
  }
}
.right {
  font-size: 3.333vw;
  background: #eee;
  border-radius:10vw;
  height: 4vw;
  line-height: 4vw;
  padding: 1.111vw 3.333vw;
}
</style>