<template>
    <div>
        <editherd labels='编辑资料'></editherd>
        <div class="img">
      <img class="imgs" src="../assets/images/capture_20191015202843328.jpg" alt />
    </div>
         <profiled  label="昵称"  desl="火星网友" />
         <profiled  label="密码"  desl="******" />
         <profiled  label="性别"  desl="男" />
    </div>
</template>

<script>
import editherd from "../components/editherd"
import profiled from "../components/prolifed"
export default {
    components:{
        editherd:editherd,
        profiled:profiled
    }
}
</script>

<style lang="less" scoped>
.img {
  text-align: center;
  padding:5.556vw 0;
  .imgs {
    width: 20.833vw;
    border-radius: 50%;
  }
}
</style>