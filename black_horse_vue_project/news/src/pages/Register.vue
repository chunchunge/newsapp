<template>
  <div class="login">
    <div class="rel">
      <span @click="$router.back()" class="del iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="userInput">
      <authinput type="text" placeholder="请输入手机号" rule="^\d{4,16}$" @input="setUserName" err_message="请输入正确的手机号"></authinput>
    </div>
     <div class="userName">
      <authinput type="text" placeholder="请输入昵称" rule="^\w{4,16}$" @input="setNiChen" err_message="请输入合法昵称"></authinput>
    </div>
    <div class="passInput">
      <authinput type="password" placeholder="请设置密码" rule="^\d{3,16}$" @input="setPwd" err_message="请输入合法密码"></authinput>
    </div>
    <div class="btn">
      <botton text="注册" @send="sendRegister"></botton>
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
  data(){
      return{
          username:'',
          userpwd:'',
          usernichen:''
      }
  },
  methods:{
      setUserName(name){
          this.username=name;
      },
      setPwd(pwd){
          this.userpwd=pwd;
      },
      setNiChen(nichen){
        this.usernichen=nichen;
      },
    //   registerSend(){
    //     this.$axios({
    //     url:'http://127.0.0.1:3000/register',
    //     method:'post',
    //     data:{
    //         username:this.username,
    //         nickname:this.usernichen,
    //         password:this.userpwd
    //     }
    // }).then(res=>{
    // console.log(res);
    
    //     if (res.data.statusCode && res.data.statusCode == 401) {
    //                 this.$toast.fail(res.data.message)
    //             }else {
    //                 this.$toast.success(res.data.message)
    //             }
        
    // })
    //   }
    sendRegister() {
            // 发送 ajax 请求
            this.$axios({
                url: 'http://127.0.0.1:3000/register',
                method: 'post',
                data: {
                    username: this.username,
                    password: this.userpwd,
                    nickname: this.usernichen
                }
            }).then( res => {
                // 应该根据返回数据弹出提示
                console.log(res.data.statusCode);
                // 接收到了登陆结果,那么根据结果的不同弹出提示获取而跳转页面
                if (res.data.statusCode && res.data.statusCode == 400) {
                    this.$toast.fail(res.data.message)
                }else {
                    this.$toast.success(res.data.message)
                }
            })
        }
  },
  
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
</style>