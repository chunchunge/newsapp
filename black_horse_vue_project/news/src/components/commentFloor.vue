<template>
  <div>
    <div class="floorWrapper">
      <div class="meta">
        <div class="info">
         {{floorItem.user.nickname}}
          <span class="time">2个小时前</span>
        </div>
        <div class="btnReply">回复</div>
      </div>
      <div class="floorContent">{{floorItem.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
    props:[
        "floorItem"
    ]
};
</script>

<style lang="less" scoped>
.floorWrapper {
  border: 1px solid #eee;
  background: #f8f8f8;
  padding: 2.778vw;
  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .time {
      font-size: 14px;
      color: #888;
    }
    .btnReply {
      font-size: 14px;
      color: #888;
    }
  }
  .floorContent {
    margin: 2.778vw 0;
  }
}
</style>