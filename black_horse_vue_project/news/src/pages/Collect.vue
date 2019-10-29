<template>
  <div>
    <editherd labels="我的收藏"></editherd>
    <div v-for="item in collectiionList" :key="item.id">
      <div class="list1" v-if="item.cover.length == 1">
        <div class="left">
          <div class="top">{{item.title}}</div>
          <div class="botton">
            <span class="lefts">{{item.user.nickname}}</span>
            <span class="rights">{{item.comments.length}}跟帖</span>
          </div>
        </div>
        <img :src="item.cover[0].url" alt />
      </div>
      <div class="list2" v-else>
        <div class="top">{{item.title}}</div>
        <div class="pics">
          <div class="imgWrapper">
            <img :src="item.cover[0].url" alt />
          </div>
          <div class="imgWrapper">
            <img :src="item.cover[1].url" alt />
          </div>
          <div class="imgWrapper">
            <img :src="item.cover[2].url" alt />
          </div>
        </div>

        <div class="botton">
          <span class="lefts">{{item.user.nickname}}</span>
          <span class="rights">{{item.comments.length}}跟帖</span>
        </div>
      </div>
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
      collectiionList: []
    };
  },
  mounted() {
    this.$axios({
      url: "/user_star",
      method: "get"
    }).then(res => {
      this.collectiionList = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.list1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.778vw 2.778vw;
  border-bottom: 1px solid #eee;
}

img {
  width: 33vw;
  height: 23.556vw;
  object-fit: cover;
}

.left {
  .top {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 4.167vw;
  }

  height: 23.556vw;
  padding-right: 2.778vw;
  flex: 1;
  align-content: space-between;

  .botton {
    font-size: 3.333vw;

    color: #999;
  }
}
.list2 {
  padding: 5.556vw;
  border-bottom: 1px solid #eee;
  .botton {
    font-size: 3.333vw;
    color: #999;
  }
  .pics {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .imgWrapper {
      width: 32%;
      height: 20.556vw;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>