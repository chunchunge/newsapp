<template>
  <div>
    <homes/>
    <van-tabs v-model="activeTab" sticky swipeable>
      <van-tab v-for="(tabItem,index) in tabList" :key="index" :title="tabItem.name">
        <van-list
        v-model="loading"
        :finished="tabItem.finished"
        finished-text="没有更多了"
        @load="loadMorePost"
        :immediate-check="false">
        <post :post="post" v-for="(post,index) in tabItem.posts" :key="index"></post>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import homes from "../components/homes";
import post from '../components/post';
export default {
  components: {
    homes,
    post
  },
  data() {
    return {
      activeTab: localStorage.getItem("token") ? 1 : 0,
      tabList: [],
      pageSize:5,
      loading:false,
    };
  },
  // 页面加载结束后发送ajax请求
  mounted() {
    this.initTabList();
  },
  methods: {
    initTabList() {
      this.$axios({
        url: "/category",
        method: "get"
      }).then(res => {
        // 解构data
        const { data } = res.data;
        // 分别给每个tab的data加上一个数组来放相对页面的数据
        data.forEach(element => {
          element.posts = [];
          element.currentPage=1;
          element.finishes=false;
        });
        this.tabList = data;
        // 获取完了 tab 数据, 马上使用默认 tab (头条) 获取文章列表数据
        this.getTabPosts(this.activeTab);
      });
    },
    loadMorePost(){
      this.tabList[this.activeTab].currentPage+=1;
      // 再次发ajax获取数据
      this.getTabPosts(this.activeTab);
      console.log("到底了");
      
    },
    getTabPosts(tabIndex) {
      // 通过id获取相应数据
      const categoryId = this.tabList[tabIndex].id;
      // 发送ajax请求
      this.$axios({
        url: "/post",
        method: "get",
        // 如果是 get 请求可以使用 params 的属性来带参数
        params: {
          category: categoryId,
          pageSize:this.pageSize,
          pageIndex:this.tabList[tabIndex].currentPage
        }
      }).then(res => {
        const { data } = res.data;
        // 需要将之前的数据和新的和在一起
        const newData=[...this.tabList[tabIndex].posts,...data];
        this.tabList[tabIndex].posts=newData;
        // 此时隐藏加载中三个字
        this.loading=false;
        // 将finished设置为true结束ajax避免继续加载
        if(data.length<this.pageSize){
          this.tabList[this.activeTab].finished=true;
        }
      });
    }
  },
  watch: {
    // 监听分类的修改
    activeTab(newActiveTab) {
      //没次切换分类都要重新发起ajax请求
      // 但是已经发过的已经存起来了所以先判断先前是否得到过数据
      if (this.tabList[newActiveTab].posts.length == 0) {
        // 如果这个分类里面的posts长度为0就证明没有
        this.getTabPosts(newActiveTab);
      }
    },
    
  }
};
</script>

<style>
</style>