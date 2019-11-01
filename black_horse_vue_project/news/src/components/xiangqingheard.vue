<template>
  <div class="heard">
    <div class="left">
      <div class="jiantou">
        <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      </div>
      <div class="new">
        <span class="iconfont iconnew"></span>
      </div>
    </div>
    <div class="right reds" v-if="!post.has_follow" @click="follow">关注</div>
    <div class="rights" v-else-if="post.has_follow" @click="unfollow">已关注</div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  methods: {
    follow() {
      // 发送ajax请求关注用户
      this.$axios({
        url: "/user_follows/" + this.post.user.id,
        method: "get"
      }).then(res => {
        const { message } = res.data;
        console.log(message);

        if (message == "关注成功") {
          this.post.has_follow = true;
        }
      });
    },
    unfollow() {
      this.$axios({
        url: "/user_unfollow/" + this.post.user.id,
        method: "get"
      }).then(res => {
        const { message } = res.data;

        if (message == "取消关注成功") {
          console.log(message);
          this.post.has_follow = false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.heard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 16.667vw;
  line-height: 16.667vw;
  padding: 4.167vw;
  box-sizing: border-box;
}
.left {
  display: flex;
  height: 15vw;
  line-height: 15vw;

  .iconjiantou2 {
    font-size: 5vw;
  }
  .new {
    margin-left: 1.667vw;
    .iconnew {
      font-size: 15vw;
    }
  }
}
.right,
.rights {
  font-size: 3.333vw;
  background: #eee;
  border-radius: 10vw;
  height: 4vw;
  line-height: 4vw;
  padding: 1.111vw 3.333vw;
}
.reds {
  background: red;
}
</style>