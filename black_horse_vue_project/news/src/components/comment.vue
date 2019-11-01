<template>
  <div>
    <div class="commentWrapper">
      <div class="meta">
        <img class="avatar" src="../assets/images/capture_20191015202843328.jpg" alt />
        <div class="info">
          <div class="name">火星网友</div>
          <div class="time">2小时前</div>
        </div>
        <div class="btnReply" @click="reply">回复</div>
      </div>
      <commentFloor
        v-if="commentItem.parent"
        :floorItem="commentItem.parent"
        :parentLength="parentLength"
      />
      <div class="commentContent">{{commentItem.content}}</div>
    </div>
  </div>
</template>

<script>
import commentFloor from "./commentFloor";
export default {
  components: {
    commentFloor
  },

  props: ["commentItem"],
  data() {
    return {
      parentLength: this.countParent(0, this.commentItem)
    };
  },
  methods: {
    countParent(num, obj) {
      if (obj.parent) {
        return this.countParent(num + 1, obj.parent);
      } else {
        return num;
      }
    },
    reply() {
      // 点击的时候将数据传给子组件
      this.$emit("reply", {
        id: this.commentItem.id
      });
    }
  }
};
</script>

<style lang="less" scoped>
.commentWrapper {
  border-bottom: 1px solid #eee;
  padding: 5.556vw 2.778vw;
}
.meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  .avatar {
    width: 9.722vw;
    height: 9.722vw;
    border-radius: 50%;
    object-fit: cover;
  }
  .info {
    flex: 1;
    padding-left: 2.778vw;
    .time {
      font-size: 14px;
      color: #888;
    }
  }
  .btnReply {
    font-size: 14px;
    color: #888;
  }
}
.commentContent {
  margin-top: 5.556vw;
}
</style>