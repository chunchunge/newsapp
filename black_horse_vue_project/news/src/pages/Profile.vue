<template>
  <div class="profiles">
    <div class="top" @click="efitProfile">
    <div class="left">
      <!-- <img v-if="!profile.head_img" class="imgs" src="@/assets/images/capture_20191015202843328.jpg" alt="">
       <img v-else class="imgs" :src="'http://127.0.0.1:3000'+profile.head_img" alt=""> -->
       <img :src="profile.head_img" class="imgs" alt="">
    </div>
    <div class="right">
      <span v-if="profile.gender == 1" class="iconfont iconxingbienan"></span>
      <span v-else class="iconfont iconxingbienv"></span>
    {{profile.nickname}}
      <div class="times">2019-10-10</div>
    </div>
    
    <span class="iconfont iconjiantou1"></span>
    </div>
    <profiled  label="我的关注"  desl="关注的用户" @jump="attentionss"/>
    <profiled  label="我的跟帖"  desl="跟帖/回复" @jump="jumpPage"/>
    <profiled  label="我的收藏"  desl="文章/视频" @jump="jumpPage"/>
    <profiled  label="设置"  @jump="efitProfile"/>
    <profiled  label="退出登录"  @jump="logOut"/>

  </div>
</template>

<script>
import profiled from '../components/prolifed'
export default {
    components:{
       profiled:profiled
    },
    data(){
      return{
        profile:{

        }
      }
    },
    methods:{
      logOut(){
        // 清楚token
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        this.$router.replace({
          path:'/login'
        })
      },
      jumpPage(){

        
      },
      efitProfile(){
        this.$router.push({
          path:'./EditFile'
        })
      },
      attentionss(){
        this.$router.push({
          path:'./attention'
        })
      }
    },
    mounted(){
      // 页面加载完就发送ajax请求用户数据
      this.$axios({
        url:'/user/'+localStorage.getItem('user_id'),
        method:'get',
        headers:{
          Authorization: localStorage.getItem('token')
        }
      }).then( res => {
            // console.log(res);    
            // 数据获取完毕
            // 我们想要的数据都在 res.data.data 里面
            // 将这些数据存放到 这个组件得 data 里面的 profile 字段中
            this.profile = res.data.data;
            if(!this.profile.head_img){
              this.profile.head_img="../assets/images/capture_20191015202843328.jpg"
            }else{
              this.profile.head_img=this.$axios.defaults.baseUrl+this.profile.head_img
            }
            console.log(this.profile);
            
        })
    }
       
    
}
</script>

<style lang="less" scoped>
.profiles{
  .top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:8.333vw;
  border-bottom: 5px solid #999;
}
}
.right{
  flex: 1;
  justify-content: space-between;
  margin-left:4.167vw;
  .times{
    font-size: 4vw;color:#666;
    margin-top:1.389vw;
  }
  .iconxingbienan{
    color:skyblue;
  }
}
 .imgs{
   width: 19.444vw;
   border-radius: 50%;

 }
</style>