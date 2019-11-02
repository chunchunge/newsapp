<template>
  <div>
    <div class="hearder">
      <span class="iconfont iconjiantou2" @click="back"></span>
      <div class="middle">
        <span class="iconfont iconsearch"></span>
        <input type="text" v-model="searchText" class="searchText" placeholder="请输入想要搜索的内容" />
      </div>
      <div class="btn" @click="search">搜索</div>
    </div>
    <div v-if="resultList.length > 0">
      <post :post="item" v-for="(item, index) in resultList" :key="index" />
    </div>
    <div class="suggestion" v-else>
      <div class="history">
        <h2>历史记录</h2>
      </div>
      <div class="hot">
        <h2>热门搜索</h2>
        <span v-for="(item,index) in hotList" :key="index" @click="seatchByWord(item)">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import post from "../components/post";
export default {
  components: {
    post
  },
  data() {
    return {
      searchText: "",
      resultList: [],
      hotList: []
    };
  },
  watch: {
    searchText() {
      // 每次搜索词的变化,我都监听
      if (this.searchText == "") {
        // 搜索词被清空
        // 先清空搜索结果
        // 自然导致推荐页显示出来
        this.resultList = [];
      }
    }
  },
  mounted() {
    this.getHotList();
  },
  methods: {
    seatchByWord(item) {
      this.searchText = item;
      this.search();
    },
    back() {
      if (this.searchText) {
        this.searchText = "";
      } else {
        this.$router.back();
      }
    },
    getHotList() {
      // 应该发送 ajx 请求
      // 获取到热门搜索数组
      this.hotList = ["关晓彤", "王祖贤", "女歌手 "];
    },
    search() {
      this.$axios({
        url: "/post_search",
        method: "get",
        params: {
          keyword: this.searchText
        }
      }).then(res => {
        const { data } = res.data;
        this.resultList = data;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.hearder {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.778vw;
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