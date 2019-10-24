<template>
  <div class="login">
      <div class="tops"></div>
    <div class="hearder">
      <img src="../assets/images/u338.png" alt />
    </div>
    <div class="banner">
      <img src="../assets/images/u339.png" alt />
    </div>
    <div class="inputs">
        <input type="text" placeholder="请输入用户名"><br>
        <input type="password" name="" id="" placeholder="请输入密码"><br>
        <div class="dengLu">登录</div>
    </div>
    <div class="buttons"></div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
.tops{
    width: 375px;height: 40px;
    background: #666;
    position: fixed;
    top:0;
    left:0;
}
.login {
  width: 375px;
  height: 667px;
  background: #dedede;
 margin-left: -8px;
 position: relative;
}
.hearder {
  width: 30px;
  height: 30px;
 position: fixed;
 top:55px;
 left:15px;
}
.banner{
    width: 200px;
    height: 200px;
    position: fixed;
    top:100px;
    left:50px;
    
}
.inputs{
    width: 360px;
    height: 50px;
 position: fixed;
    top:300px;
    
}
input{
    border:none;
    outline: none;
    width: 245px;
    border-bottom: 1px solid #333;
    background: #dedede;
    margin-top:20px;
    margin-left:-55px;
   padding-bottom: 5px;
   
}
img{
    width: 100%;
}
.dengLu{
    width: 200px;height: 40px;
    background: red;
    color:#fff;
    line-height: 40px;
    border-radius: 25px;
    margin:49px;
}
.buttons{
    width: 375px;height: 40px;
    background: #333;
    position: fixed;
    bottom:0;
    left:0;
}
</style>