<template>
  <div>
    <editherd labels="我的收藏"></editherd>
    <post :post="item" v-for="(item,index) in collectionList" :key="index"></post>
  </div>
</template>

<script>
import editherd from "../components/editherd";
import post from "../components/post";

export default {
  components: {
    editherd,
    post
  },
  data() {
    return {
      collectionList: []
    };
  },
  mounted() {
    this.$axios({
      url: "/user_star",
      method: "get"
    }).then(res => {
      this.collectionList = res.data.data;
      this.collectionList.forEach(element => {
        element.comment_length = element.comments.length;
        if (element.cover) {
          element.cover.forEach(element => {
            //    如果这个图片开头带上了 htttp 我们就知道他是一张普通图片,无需拼接
            // 如果这里没有 http 这个字符串 我们就认为这个图片需要拼接
            if (element.url.indexOf("http") < 0) {
              // 如果没有 http 这个字符串
              element.url = this.$axios.defaults.baseURL + element.url;
            }
          });
        }
      });
    });
  }
};
</script>


<style lang="less" scoped>
</style>