<template>
  <div class="hearder" >
    <span class="iconfont iconnew"></span>
    <div class="middle">
        <div class="search">
            <span class="iconfont iconsearch"></span>
            搜索新闻
        </div>
    </div>
    <router-link to="/profile">
        <span class="iconfont iconwode"></span>
    </router-link>
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
        background: red;
        height: 13.889vw;
        color:#fff;
        padding :0 2.778vw;
    }
    .middle{
        flex:1;
        .search{
            width: 60.222vw;
            height: 10.333vw;
            line-height: 10.333vw;
            text-align: center;
            margin:0 4.7vw;
            background: rgba(255,255,255,0.4);
            border-radius: 5.166vw;
        }
    }
    .iconnew{
        font-size: 15vw;
    }
    .iconwode {
        font-size: 8.889vw;
        color:#fff;
        opacity: 0.6;
    }
</style>