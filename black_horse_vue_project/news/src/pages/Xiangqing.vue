<template>
  <div>
    <xiangqingheard :post="post" />
    <div class="mainContent">
      <video
        src="https://video.pearvideo.com/mp4/adshort/20191031/cont-1617802-14542116_adpkg-ad_hd.mp4 "
        class="video"
        controls="controls"
        :poster="post.cover[0].url"
        v-if="post.type==2"
      ></video>
      <div class="litle">{{post.title}}</div>
      <div class="info" v-if="post.user">{{post.user.nickname}} 2019-10-31</div>
      <div class="content" v-html="post.content" v-if="post.type !==2"></div>
      <div class="actionBtns">
        <div class="like" @click="like">
          <span class="iconfont icondianzan" :class="{
        red:post.has_like
        }"></span>
          {{post.like_length}}
        </div>
        <div class="wechat">
          <span class="iconfont iconweixin"></span>
          <a
            href="https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Explanation_of_interface_privileges.html"
          >微信</a>
        </div>
      </div>
    </div>
    <xiangqingfoot :post="post" />
  </div>
</template>

<script>
import xiangqingheard from "../components/xiangqingheard";
import xiangqingfoot from "../components/xiangqingfoot";
export default {
  components: {
    xiangqingheard,
    xiangqingfoot
  },
  data() {
    return {
      postId: this.$route.params.id,
      post: {}
    };
  },
  mounted() {
    //   获取动态带来的id
    //根据id请求数据渲染页面
    console.log(this.postId);

    this.$axios({
      url: "/post/" + this.postId,
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.post = data;
      console.log(this.post);
    });
  },
  methods: {
    like() {
      // console.log('点击了点赞按钮');
      this.$axios({
        url: "/post_like/" + this.post.id,
        method: "get"
      }).then(res => {
        // console.log(res.data);
        const { message } = res.data;
        // 这个点赞的接口, 是可以有两种功能的, 如果你没有点赞,这个功能就是添加点赞,
        // 如果你已经点过赞,然后再触发一次这个接口,其实就是取消了点赞
        if (message == "点赞成功") {
          this.post.has_like = true;
          this.post.like_length += 1;
        } else if (message == "取消成功") {
          this.post.has_like = false;
          this.post.like_length -= 1;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mainContent {
  padding: 2.778vw;
  padding-bottom: 22.222vw;
}
.title {
  font-size: 5.556vw;
  color: #333;
}
.info {
  margin: 5.556vw;
}
.content {
  padding-bottom: 16.667vw;
  /deep/ img {
    max-width: 100%;
  }
}
.video {
  width: 100%;
}
.actionBtns {
  margin: 5.556vw 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .like,
  .wechat {
    border: 1px solid #333;
    height: 8.333vw;
    line-height: 8.333vw;
    text-align: center;
    border-radius: 4.167vw;
    padding: 0 4.167vw;
    .iconfont {
      margin-right: 3px;
    }
  }
  .wechat {
    .iconfont {
      color: #00c800;
    }
  }
}
</style>