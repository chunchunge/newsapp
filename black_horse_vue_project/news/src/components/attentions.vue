<template>
  <div class="guanZhu">
    <div class="left"></div>
    <div class="banner">
      火星新闻播报
      <div class="times">2019-10-10</div>
    </div>
    <div class="right">取消关注</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.guanZhu {
  height: 16.667vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:5.556vw 4.167vw;
  border-bottom: 1px solid #dedede;
  .left {
    width: 13.889vw;
    height: 13.889vw;
    background: #666;
    border-radius: 50%;
  }
  .banner {
    margin-left:4.167vw;
    flex: 1;
    justify-content: space-between;
    .times {
      font-size: 4vw;
      color: #666;
      margin-top: 1.389vw;
    }
  }
  .right{
    width: 22.222vw;
    height: 8.333vw;
    background: #eee;
    border-radius: 5.556vw;
    font-size: 3.333vw;
    text-align: center;
    line-height: 8.333vw;
  }
}
</style>