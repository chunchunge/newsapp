<template>
  <div>
      <div class="hearder">
        <span class="iconfont iconjiantou2" @click="$router.back()"></span>
        <div class="middle">
          <span class="iconfont iconsearch"></span>
          <input type="text" v-model="searchText" class="searchText" placeholder="请输入想要搜索的内容">
        </div>
        <div class="btn" @click="search">搜索</div>
      </div>
      <post :post='item' v-for="(item, index) in resultList" :key="index"/>
  </div>
</template>

<script>
import post from '../components/post'
export default {
  components: {
        post
    },
  data(){
    return{
      searchText:'',
      resultList: []
    }
  },
  methods:{
    search(){
      this.$axios({
        url:'/post_search',
        method:'get',
        params:{
          keyword:this.searchText
        }
      }).then(res=>{
        const {data}=res.data;
        this.resultList=data;
      })
    }
  }
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