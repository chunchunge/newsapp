<template>
  <div>
    <editherd labels="我的关注" />
    <div class="guanZhu" v-for="item in myFollows" :key="item.id">
      <img class="left" :src="item.head_img" alt />
      <div class="banner">
        {{item.nickname}}
        <div class="times">2019-10-10</div>
      </div>
      <div class="right" @click="cancelFollow(item.id)">取消关注</div>
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
      myFollows: []
    };
  },
  methods: {
    loadPage() {
      // 获取数据
      this.$axios({
        url: "/user_follows",
        method: "get"
      }).then(res => {
        // console.log(res.data);

        // 将数据存在data里面
        this.myFollows = res.data.data;
        // 遍历这个数组
        this.myFollows.forEach(element => {
          // 如果有头像就拼进去没有的话就强制给他一个
          if (!element.head_img) {
            element.head_img = "../assets/images/capture_20191015202843328.jpg";
          } else {
            element.head_img = this.$axios.defaults.baseURL + element.head_img;
          }
        });
      });
    },
    cancelFollow(id) {
      // 拿到id之后发送ajax请求
      this.$axios({
        url: "/user_unfollow/" + id,
        method: "get"
      }).then(res => {
        // 取关成功然后刷新页面
        this.loadPage();
      });
    }
  },
  // 当页面加载完成之后发送ajax请求
  mounted() {
    this.loadPage();
  }
};
</script>

<style lang="less" scoped>
.guanZhu {
  height: 16.667vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.556vw 4.167vw;
  border-bottom: 1px solid #dedede;
  .left {
    width: 13.889vw;
    height: 13.889vw;
    background: #666;
    border-radius: 50%;
  }
  .banner {
    margin-left: 4.167vw;
    flex: 1;
    justify-content: space-between;
    .times {
      font-size: 4vw;
      color: #666;
      margin-top: 1.389vw;
    }
  }
  .right {
    width: 22.222vw;
    height: 8.333vw;
    background: #eee;
    border-radius: 5.556vw;
    font-size: 3.333vw;
    text-align: center;
    line-height: 8.333vw;
  }
}
</style>