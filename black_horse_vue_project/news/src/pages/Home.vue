<template>
  <div>
      <homes/>
      <van-tabs v-model="activeTab">
        <van-tab
        v-for="(tabItem,index) in tabList" :key="index"
        :title="tabItem.name">
          内容 {{tabItem.name}}
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import homes from "../components/homes"
export default {
  components:{
    homes
  },
  data(){
    return{
      activeTab:localStorage.getItem('token')?1:0,
      tabList:[]
    }
  },
  // 页面加载结束后发送ajax请求
  mounted(){
   this.initTabList();
  },
  methods:{
    initTabList(){
       this.$axios({
      url:'/category',
      method:'get'
    }).then(res=>{
      // 解构data
      const {data}=res.data;
      this.tabList=data;
    })
    }
  }
  }
</script>

<style>

</style>