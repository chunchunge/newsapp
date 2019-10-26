<template>
  <div>
    <div class="heard">
      <span class="iconfont iconjiantou2"></span>
      <div class="tital">编辑资料</div>
    </div>
    <div class="img">
      <img class="imgs" src="../assets/images/capture_20191015202843328.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {};
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
.img {
  text-align: center;
  padding:5.556vw 0;
  .imgs {
    width: 20.833vw;
    border-radius: 50%;
  }
}
</style>