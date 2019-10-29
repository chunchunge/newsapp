<template>
  <div>
      <div class="videoPost" v-if="post.type==2">
        <div class="title">{{post.title}}</div>
        <div class="cover">
         <img :src="post.cover[0].url" class="coverImg" alt />
        <div class="btnWrapper">
            <div class="iconfont iconshipin"></div>
        </div>
        </div>
         <div class="info">{{post.user.nickname}} {{post.comment_length}}跟帖</div>
      </div>
    <div class="singleImgPost" v-else-if="post.cover.length>0&&post.cover.length<3">
      <div class="left">
        <div class="title">{{post.title}}</div>
        <div class="info">{{post.user.nickname}} {{post.comment_length}}跟帖</div>
      </div>
      <img :src="post.cover[0].url" class="imgRight" alt />
    </div>
    <div class="multipImgPost" v-else-if="post.cover.length>=3">
      <div class="title">{{post.title}}</div>
      <div class="covers">
        <img :src="post.cover[0].url" class="coverImg" alt />
        <img :src="post.cover[1].url" class="coverImg" alt />
        <img :src="post.cover[2].url" class="coverImg" alt />
      </div>
      <div class="info">{{post.user.nickname}} {{post.comment_length}}跟帖</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="less" scoped>
.singleImgPost {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.778vw;
  border-bottom: 1px solid #eee;
  .left {
    flex: 1;
    height: 20.833vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2.778vw;
    .title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .info {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-size: 14px;
      color: #888;
    }
  }
  .imgRight {
    width: 33.611vw;
    height: 20.833vw;
    object-fit: cover;
  }
}
.multipImgPost{
    padding:2.778vw;
    border-bottom: 1px solid #eee;
    .title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .covers{
        display: flex;
        justify-content: space-between;
        margin:2.778vw 0;
        .coverImg{
            width: 33%;
            height: 20.556vw;
            object-fit: cover;
        }
    }
     .info {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-size: 14px;
      color: #888;
    }
}
.videoPost{
    padding:2.778vw;
    border-bottom: 1px solid #eee;
.title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .cover{
        margin:2.778vw 0;
        position: relative;
        .coverImg{
            width: 100%;
            height: 47.222vw;
            object-fit: cover;
        }
        .btnWrapper{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .iconfont{
                height: 15.278vw;
                line-height: 15.278vw;
                width:15.278vw;
                border-radius: 50%;
                background: #ccc;
                text-align: center;
                font-size: 12.778vw;
                color: #fff;
            }
        }
    }
    .info {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-size: 14px;
      color: #888;
    }
}
</style>