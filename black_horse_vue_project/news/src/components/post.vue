<template>
  <div> 
      <div class="singleImgPost">
          <div class="left">
              <div class="title">{{post.title}}</div>
              <div class="info">{{post.user.nickname}} {{post.comment_length}}跟帖</div>
          </div>
          <img :src="post.cover[0].url" class="imgRight" alt="">
         
      </div>
  </div>
</template>

<script>
export default {
    props:[
        'post'
    ]
}
</script>

<style lang="less" scoped>
    .singleImgPost{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:2.778vw;
        border-bottom: 1px solid #eee;
        .left{
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
        .imgRight{
            width: 33.611vw;
            height: 20.833vw;
            object-fit: cover;
        }
    }
</style>