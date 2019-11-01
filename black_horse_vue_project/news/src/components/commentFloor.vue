<template>
  <div>
    <floor v-if="floorItem.parent" :floorItem="floorItem.parent" :parentLength="parentLength-1" />
    <div class="floorWrapper">
      <div class="meta">
        <div class="info">
          {{parentLength}} : {{floorItem.user.nickname}}
          <span class="time">2个小时前</span>
        </div>
        <div class="btnReply">回复</div>
      </div>
      <div class="floorContent">{{floorItem.content}}</div>
    </div>
  </div>
</template>

<script>
//  <!-- 当我们的 floorItem 有 parent 的时候,就要递归的调用自己,每次都将拿到的 floorItem.parent 传进去,作为下一个 楼层组件得 floorItem -->
export default {
  name: "floor",
  props: ["floorItem", "parentLength"]
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