<template>
  <div>
    <homes />
    <van-tabs v-model="activeTab">
      <van-tab
        v-for="(tabItem,index) in tabList"
        :key="index"
        :title="tabItem.name">
        <div v-for="(post,index) in tabItem.posts" :key="index">
          {{post.title}}
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import homes from "../components/homes";
export default {
  components: {
    homes
  },
  data() {
    return {
      activeTab: localStorage.getItem("token") ? 1 : 0,
      tabList: []
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
        });
        this.tabList = data;
        // 获取完了 tab 数据, 马上使用默认 tab (头条) 获取文章列表数据
        this.getTabPosts(this.activeTab);
      });
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
          category: categoryId
        }
      }).then(res => {
        const { data } = res.data;
        this.tabList[tabIndex].posts = data;
      });
    }
  },
  watch:{
    // 监听分类的修改
    activeTab(newActiveTab){
      //没次切换分类都要重新发起ajax请求
      // 但是已经发过的已经存起来了所以先判断先前是否得到过数据
      if(this.tabList[newActiveTab].posts.length==0){
        // 如果这个分类里面的posts长度为0就证明没有
        this.getTabPosts(newActiveTab);
      }
    }
  }
};
</script>

<style>
</style>