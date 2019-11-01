<template>
  <div>
      <div class="hearder">
        <span class="iconfont iconjiantou2"></span>
        <div class="middle">
          <span class="iconfont iconsearch"></span>
          <input type="text" class="searchText" placeholder="请输入想要搜索的内容">
        </div>
        <div class="btn">搜索</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .hearder{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:2.778vw;
    }
    .middle {
        width: 58.667vw;
        height: 10.556vw;
        line-height: 10.556vw;
        border: 1px solid #888;
        border-radius: 5.278vw;
        padding: 0 4.167vw;
        .searchText {
            height: 9vw;
            line-height: 9vw;
            width: 50.556vw;
            border: none;
            outline: none;
        }
    }
</style>