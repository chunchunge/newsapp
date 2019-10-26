<template>
  <div class="login">
    <div class="rel">
      <span class="del iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="userInput">
      <authinput
        type="text"
        placeholder="请输入手机号"
        rule="^\d{4,16}$"
        @input="setUserName"
        err_message="请输入正确的手机号"
      ></authinput>
    </div>
    <div class="passInput">
      <authinput
        type="password"
        placeholder="请输入密码"
        rule="^\d{3,16}$"
        @input="setPwd"
        err_message="请输入正确的密码"
      ></authinput>
    </div>
    <div class="btn">
      <botton text="登录" @send="sendLogin"></botton>
    </div>
    <div class="sengqing">
      还没有账号,
      <router-link class="red" to="/register">立即注册</router-link>
    </div>
  </div>
</template>

<script>
import authinput from "../components/authinput";
import botton from "../components/botton";

export default {
  components: {
    authinput: authinput,
    botton: botton
  },
  data() {
    return {
      username: "",
      userpwd: ""
    };
  },
  methods: {
    setUserName(name) {
      this.username = name;
    },
    setPwd(pwd) {
      this.userpwd = pwd;
    },
    sendLogin() {
      //   ajax请求
      this.$axios({
        url: "/login",
        method: "post",
        data: {
          username: this.username,
          password: this.userpwd
        }
      }).then(res => {
        if (!res.data.statusCode) {
          // 保存数据
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("user_id", res.data.data.user.id);
          // 然后弹出提示框
          this.$toast.success(res.data.message);
          // 设置定时跳转
          setTimeout(() => {
            this.$router.push({
              path: "/"
            });
          }, 1000);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  padding: 5.556vw;
}

.rel {
  display: flex;
  .iconicon-test {
    font-size: 7.5vw;
  }
}
.logo {
  text-align: center;
  .iconnew {
    font-size: 35vw;
    color: red;
  }
}
.sengqing {
  text-align: center;
  margin-top: 13.889vw;
  .red {
    color: red;
  }
}
</style>