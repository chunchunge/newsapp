<template>
  <div>
    <editherd labels="编辑资料"></editherd>
    <div class="img">
      <img class="imgs" :src="profile.head_img" alt />
    </div>
    <profiled label="昵称" :desl="profile.nickname" />
    <profiled label="密码" desl="******" />
    <profiled label="性别" :desl="profile.gender" />
  </div>
</template>

<script>
import editherd from "../components/editherd";
import profiled from "../components/prolifed";
export default {
  components: {
    editherd: editherd,
    profiled: profiled
  },
  data() {
    return {
      profile: {}
    };
  },
  mounted() {
    // 当页面加载完发送ajax请求
    this.$axios({
      // url后面需要带上用户的id
      url: "/user/" + localStorage.getItem("user_id"),
      method: "get",
      headers: {
        // 验证用户登录状态
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      // 将请求得到的数据保存在data里面
      this.profile = res.data.data;
      if (!this.profile.head_img) {
        // 如果数据库没有头像,强行设置一个默认的
        this.profile.head_img = "/static/imgs/avatar.jpg";
      } else {
        // 如果有头像数据,我们还要拼接数据库基准路径才能获取到头像真正地址
        this.profile.head_img =
          this.$axios.defaults.baseURL + this.profile.head_img;
      }
      this.profile.gender = this.profile.gender == 0 ? "小姐姐" : "小哥哥";
    });
  }
};
</script>

<style lang="less" scoped>
.img {
  text-align: center;
  padding: 5.556vw 0;
  .imgs {
    width: 20.833vw;
    border-radius: 50%;
  }
}
</style>