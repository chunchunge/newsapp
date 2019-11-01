<template>
<div>
    <div class="foot" v-if="!isFocus">
    <input type="text" placeholder="写跟帖" @focus="showArea" />
    <div class="right">
      <div class="num">{{post.comment_length}}</div>
      <span class="iconfont iconpinglun-" ></span>
      <span class="iconfont iconshoucang" :class="{
                red: post.has_star
            }" @click="star"></span> 
       <a href="https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Explanation_of_interface_privileges.html">
      <span class="iconfont iconfenxiang"></span>
       </a>
    </div>
  </div>
    <div class="footer" v-if="isFocus">
        <textarea  class="footers" v-model="comment" placeholder="回复：@火星网友1" @blur="handleBlur"  ref="commentArea"></textarea>
        <div class="fasong" @click="send">
            发送
        </div>
    </div>
</div>
  
</template>

<script>
export default {
  props:[
    'post'
  ],
   data(){
       return{
           isFocus:false,
           comment:''
       }
   },
   methods:{
        handleBlur(){
            if(!this.comment){
              this.isFocus=false
            }
        },
        send(){
          this.comment="";
          this.isFocus=false;
        },
       showArea(){
           this.isFocus=true
            this.$nextTick(()=>{
                // 这个函数是告诉 vue 在下一次渲染完毕的时候
                // 再执行这段代码
                // 一般用在这些代码强烈依赖于渲染后的页面状态的那种代码
                this.$refs.commentArea.focus();
            })
       },
       star(){
         this.$axios({
           url:'/post_star/'+this.post.id,
           method:'get'
         }).then(res=>{
           const {message}=res.data;
           if(message=="收藏成功"){
             this.post.has_star=true
           }else if(message=="取消成功"){
             this.post.has_star=false
           }
         })
       }
   }
};
</script>

<style>
.foot,
.footer {
  background: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 1.389vw 4.167vw;

}

input {
  border: none;
  outline: none;
  font-size: 3.333vw;
  padding: 2.778vw 5.556vw;
  background: #dedede;
  border-radius: 20vw;
  width: 40.278vw;
}
.right {
  margin-left: 7.556vw;
}
.iconfont {
  font-size: 6.389vw;
  margin-left: 3.167vw;
}
.iconpinglun- {
  position: relative;
}
.num {
  position: absolute;
  top: 0.833vw;
  left: 65.333vw;
  z-index: 2;
  background: red;
  color: #fff;
  border-radius: 1000px;
  padding: 1.001px 0.833vw;
  font-size: 3.333vw;
}
textarea{
    border:none;
    outline: none;
    background: #dedede;
    border-radius: 6.5vw;
    width: 70.889vw;
    height: 25vw;
    font-size: 14px;
    padding:2.778vw;
    box-sizing: border-box;
     resize: none;
}
.fasong{
    background: red;
    color:#fff;
    font-size: 3.333vw;
    margin-left:2.778vw;
    padding:1.389vw 5.556vw;
    border-radius: 277.778vw;
    margin-top: 5.556vw;

}
.red {
    color: red;
}
</style>