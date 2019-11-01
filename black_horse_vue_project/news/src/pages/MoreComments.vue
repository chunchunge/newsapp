<template>
  <div>
       <editherd labels="更多跟帖"></editherd>
         <comment :commentItem="item" v-for="(item,index) in comments" :key="index"/>
  </div>
</template>

<script>
import editherd from "../components/editherd"
import comment from '../components/comment'
export default {
components:{
    editherd,
    comment
},
data(){
    return{
        postId:this.$route.params.id,
        comments:[]
    }
},
mounted(){
    // 当页面加载完成后需要请求数据
    this.$axios({
        url:'/post_comment/'+this.postId,
        method:'get'
    }).then(res=>{
        // 将数据放入本地中去
        const {data}=res.data;
        this.comments=data;
    })
}
}
</script>

<style>


</style>