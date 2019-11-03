<template>
  <div>
    <editherd labels="更多跟帖"></editherd>
   <comment 
            :commentItem="item" 
            v-for="(item,index) in comments" 
            :key="index" 
            @reply="reply"/>
         <xiangqingfoot
            :post="post" 
            :isActive="replyActive"
            :replyObj="replyObj"
            @newComment="getComments"/>
  </div>
</template>

<script>
import editherd from "../components/editherd";
import comment from "../components/comment";
import xiangqingfoot from '../components/xiangqingfoot'
export default {
  components: {
    editherd,
    comment,
    xiangqingfoot
  },
  data() {
    return {
      postId: this.$route.params.id,
      comments: [],
       replyActive: 0,
            post: {},
            replyObj:{}
    };
  },
  mounted() {
    // 当页面加载完成后需要请求数据
    this.$axios({
      url: '/post/'+this.postId,
      method: "get"
    }).then(res => {
      // 将数据放入本地中去
      const { data } = res.data;
     this.post = data;
    });
       this.getComments();
  },
     methods: {
        reply(replyObj){
            console.log('点击了id为'+replyObj.id+'的回复按钮');
            // 我们接受到了子组件的自定义事件触发然后我们需要,弹起回复框
            // 这里是我点击了的回复的那个 id
            this.replyObj = replyObj
            this.replyActive += 1;
        },
        getComments() {
            // 一进来就要根据 postId 获取评论数据
            this.$axios({
                url: '/post_comment/'+this.postId,
                method: 'get'
            }).then(res => {
                const {data} = res.data;
                // 这里的 data 就是我们想要获取的评论数组,每一个元素都是一条评论
                // 要先储存到页面组件得 data 当中
                this.comments = data;
            })
        }
     }
}
</script>

<style>
</style>