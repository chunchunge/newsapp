<template>
  <div>
    <floor v-if="floorItem.parent" :floorItem="floorItem.parent" :parentLength="parentLength-1"
     @reply="reply" />
    <div class="floorWrapper">
      <div class="meta">
        <div class="info">
          {{parentLength}} : {{floorItem.user.nickname}}
          <span class="time">2个小时前</span>
        </div>
        <div class="btnReply" @click="reply">回复</div>
      </div>
      <div class="floorContent">{{floorItem.content}}</div>
    </div>
  </div>
</template>

<script>
//  <!-- 当我们的 floorItem 有 parent 的时候,就要递归的调用自己,每次都将拿到的 floorItem.parent 传进去,作为下一个 楼层组件得 floorItem -->
export default {
  name: "floor",
  props: ["floorItem", "parentLength"],
    methods: {
        reply(data) {
            // 这个函数,有可能是自己触发的,
            // 那么这个 data 就是点击事件本身,没有 id
            // 我就应该往上一层传递自己的 id 

            // 也有可能是前一层递归的子组件触发,
            // 这个 data 就会是前一层带过来的那个对象
            // 里面有 id

            // 如果 data.id 存在证明 是前面的递归层传出来的数据
            // 我要原封不动继续往下传

            if (data.id) {
                this.$emit('reply', data)
            }else {
                 this.$emit('reply', {
                    id: this.floorItem.id
                })
            }

           
        }
    }
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