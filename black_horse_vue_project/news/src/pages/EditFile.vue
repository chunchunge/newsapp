<template>
  <div>
    <editherd labels="编辑资料"></editherd>
    <div class="img">
      <img class="imgs" :src="profile.head_img" alt />
    </div>
    <profiled label="昵称" :desl="profile.nickname" @jump="isShowNickname = true" />
    <profiled label="密码" desl="******" @jump="isShowPwd = true"/>
    <profiled label="性别" :desl="profile.gender"  @jump="isShowGender=true"/>
<!-- 编辑昵称 -->
    <van-dialog v-model="isShowNickname" title="编辑昵称" show-cancel-button @confirm="editProfile({nickname:newNickname})">
      <van-field v-model="newNickname" placeholder="请输入昵称" />
    </van-dialog>
    <!-- 编辑密码 -->
    <van-dialog v-model="isShowPwd" title="编辑昵称" show-cancel-button @confirm="editProfile({password:newPwd})">
      <van-field typ v-model="newPwd" placeholder="请输入密码" />
    </van-dialog>
    <!-- 更改性别 -->
 <!-- 上拉菜单组件 -->
        <!-- v-model 是否显示
        actions 是一个数组,存放着所有选项
        selectt 是选择后的回调函数处理 -->
        <van-action-sheet
        v-model="isShowGender"
        :actions="genderList"
        @select="selectGender"
        cancel-text="取消"/>
  </div>
</template>

<script>
import editherd from "../components/editherd";
import profiled from "../components/prolifed";
export default {
  components: {
    editherd: editherd,
    profiled: profiled
  },
  data() {
    return {
      isShowNickname: false,
      isShowPwd:false,
      isShowGender:false,
      genderList:[
        {
          name:'男'
        },
        {
          name:'女'
        }
      ],
      newNickname: "",
      newPwd:"",
      profile: {}
    };
  },
  methods: {
    // 封装ajax请求
    loadPage(){
      this.$axios({
      // url后面需要带上用户的id
      url: "/user/" + localStorage.getItem("user_id"),
      method: "get",
      headers: {
        // 验证用户登录状态
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      // 将请求得到的数据保存在data里面
      this.profile = res.data.data;
      if (!this.profile.head_img) {
        // 如果数据库没有头像,强行设置一个默认的
        this.profile.head_img = "/static/imgs/avatar.jpg";
      } else {
        // 如果有头像数据,我们还要拼接数据库基准路径才能获取到头像真正地址
        this.profile.head_img =
          this.$axios.defaults.baseURL + this.profile.head_img;
      }
      this.profile.gender = this.profile.gender == 0 ? "小姐姐" : "小哥哥";
    });
  
    },
    selectGender(item){
        this.editProfile({
          gender:item.name=='男'?1:0
        })
        this.isShowGender=false;
    },
    editProfile(newData) {
      // ajax请求
      this.$axios({
        url: "/user_update/" + localStorage.getItem("user_id"),
        method: "post",
        headers: {
          Authorization: localStorage.getItem("token")
        },
        data:newData
      }).then(res => {
        this.loadPage();
      });
      
    }
  },
  mounted() {
    // 当页面加载完发送ajax请求
        this.loadPage();

  }
};
</script>

<style lang="less" scoped>
.img {
  text-align: center;
  padding: 5.556vw 0;
  .imgs {
    width: 20.833vw;
    border-radius: 50%;
  }
}
</style>