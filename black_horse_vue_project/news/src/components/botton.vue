<template>
  <div class="btn" @click="send">{{text}}</div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    send() {
      this.$emit("send");
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  width: 88.333vw;
  height: 13.333vw;
  border-radius: 6.667vw;
  background: red;
  text-align: center;
  color: #fff;
  line-height: 13.333vw;
  margin-top: 13.889vw;
}
</style>