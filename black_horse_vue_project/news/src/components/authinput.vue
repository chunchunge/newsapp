<template>
  <input
    class="input"
    :class="{
      error:!isOk
  }"
    :type="type"
    :placeholder="placeholder"
    @input="dataChange"
    @blur="showTips"
    
  />
</template>

<script>
export default {
  props: ["type", "placeholder", "rule", "err_message"],
  data() {
    return {
      isOk: true
    };
  },
  methods: {
    dataChange($event) {
      //   创建正则表达式
      if (!$event.target.value) {
        this.isOk = true;
      } else {
        var regex = new RegExp(this.rule);
        // 验证输入的数据并存起来
        this.isOk = regex.test($event.target.value);
      }

      this.$emit("input", $event.target.value);
    },
    showTips(){
        if(!this.isOk){
            // console.log(this.err_message);
             this.$toast.fail(this.err_message)
        }
        
    }
  }
};
</script>

<style lang="less" scoped>
.input {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1.5px solid #666;
  padding: 3.778vw 0;
  box-sizing: border-box;
  font-size: 5vw;
}
.error {
  border-color: red;
}
</style>