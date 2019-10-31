<template>
  <div>
    <xiangqingheard />
    <div class="normalPost">
        <div class="litle">
            {{post.title}}
        </div>
        <div class="info" v-if="post.user">
               {{post.user.nickname}} 2019-10-31
        </div>
        <div class="content" v-html="post.content">

        </div>
    </div>
    <xiangqingfoot/>
  </div>
</template>

<script>
import xiangqingheard from "../components/xiangqingheard";
import xiangqingfoot from "../components/xiangqingfoot";
export default {
  components: {
    xiangqingheard,
    xiangqingfoot
  },
  data() {
        return{
            postId: this.$route.params.id,
            post: {}
        }
    },
  mounted(){
    //   获取动态带来的id
    //根据id请求数据渲染页面
    console.log(this.postId);
    
    this.$axios({
        url:'/post/'+this.postId,
        method:'get'
    }).then(res=>{
         const {data} = res.data;
        this.post=data;
        console.log(this.post);
        
    })
  }
};
</script>

<style lang="less" scoped>
.normalPost  {
    padding: 2.778vw;
}
.title {
    font-size: 5.556vw;
    color: #333;
}
.info {
    margin: 5.556vw;
}
.content {
    padding-bottom: 16.667vw;
    /deep/ img {
        max-width: 100%;
    }
}
</style>