<template>
  <div>
    <editherd labels="我的跟帖"></editherd>
    <div class="item" v-for="item in commentList" :key="item.id">
      <div class="data">2019-10-10</div>
      <div class="parent" v-if="item.parent">
        <div class="name">回复:{{item.parent.user.nickname}}</div>
        <div class="parentcomtent">{{item.parent.content}}</div>
      </div>
      <div class="maincontent">{{item.content}}</div>
      <div class="postOrigin">原文:{{item.post.title}}</div>
    </div>
  </div>
</template>

<script>
import editherd from "../components/editherd";
export default {
  components: {
    editherd: editherd
  },
  data() {
    return {
      commentList: []
    };
  },
  mounted() {
    this.$axios({
      url: "/user_comments",
      method: "get"
    }).then(res => {
      this.commentList = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.item {
  font-size: 14px;
  padding: 5.556vw;
  border-bottom: 1px solid #eee;
}
.data {
  color: #999;
}
.postOrigin {
  margin-top: 2.778vw;
  color: #888;
}
.parent {
  margin-top: 2.778vw;
  padding: 5.556vw;
  color: #888;
  background: #eee;
  .parentContent {
    margin-top: 2.778vw;
  }
}
.maincontent {
  margin-top: 2.778vw;
}
</style>