webpackJsonp([1],{"+w7W":function(t,e){},"19Sq":function(t,e){},"2c1S":function(t,e){},"4ml/":function(t,e){},"5vq8":function(t,e){},As99:function(t,e,s){t.exports=s.p+"static/img/capture_20191015202843328.601af3a.jpg"},CEyp:function(t,e){},DyHt:function(t,e){},GNpe:function(t,e){},KQl2:function(t,e){},MYWZ:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},i,!1,function(t){s("fs5F")},null,null).exports,o=s("/ocq"),r={props:["type","placeholder","rule","err_message"],data:function(){return{isOk:!0}},methods:{dataChange:function(t){if(t.target.value){var e=new RegExp(this.rule);this.isOk=e.test(t.target.value)}else this.isOk=!0;this.$emit("input",t.target.value)},showTips:function(){this.isOk||this.$toast.fail(this.err_message)}}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"input",class:{error:!this.isOk},attrs:{type:this.type,placeholder:this.placeholder},on:{input:this.dataChange,blur:this.showTips}})},staticRenderFns:[]};var l=s("VU/8")(r,c,!1,function(t){s("Ttut")},"data-v-61791593",null).exports,u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"btn",on:{click:this.send}},[this._v(this._s(this.text))])},staticRenderFns:[]};var d=s("VU/8")({props:["text"],methods:{send:function(){this.$emit("send")}}},u,!1,function(t){s("mbxz")},"data-v-4285dbd2",null).exports,h={components:{authinput:l,botton:d},data:function(){return{username:"",userpwd:""}},methods:{setUserName:function(t){this.username=t},setPwd:function(t){this.userpwd=t},sendLogin:function(){var t=this;this.$axios({url:"/login",method:"post",data:{username:this.username,password:this.userpwd}}).then(function(e){e.data.statusCode||(localStorage.setItem("token",e.data.data.token),localStorage.setItem("user_id",e.data.data.user.id),t.$toast.success(e.data.message),setTimeout(function(){t.$router.push({path:"/"})},1e3))})}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"userInput"},[s("authinput",{attrs:{type:"text",placeholder:"请输入手机号",rule:"^\\d{4,16}$",err_message:"请输入正确的手机号"},on:{input:t.setUserName}})],1),t._v(" "),s("div",{staticClass:"passInput"},[s("authinput",{attrs:{type:"password",placeholder:"请输入密码",rule:"^\\d{3,16}$",err_message:"请输入正确的密码"},on:{input:t.setPwd}})],1),t._v(" "),s("div",{staticClass:"btn"},[s("botton",{attrs:{text:"登录"},on:{send:t.sendLogin}})],1),t._v(" "),s("div",{staticClass:"sengqing"},[t._v("\n    还没有账号,\n    "),s("router-link",{staticClass:"red",attrs:{to:"/register"}},[t._v("立即注册")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rel"},[e("span",{staticClass:"del iconfont iconicon-test"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("span",{staticClass:"iconfont iconnew"})])}]};var m=s("VU/8")(h,p,!1,function(t){s("+w7W")},"data-v-fe2ab5b8",null).exports,v={components:{authinput:l,botton:d},data:function(){return{username:"",userpwd:"",usernichen:""}},methods:{setUserName:function(t){this.username=t},setPwd:function(t){this.userpwd=t},setNiChen:function(t){this.usernichen=t},sendRegister:function(){var t=this;this.$axios({url:"/register",method:"post",data:{username:this.username,password:this.userpwd,nickname:this.usernichen}}).then(function(e){e.data.statusCode||t.$toast.success(e.data.message)})}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"rel"},[s("span",{staticClass:"del iconfont iconicon-test",on:{click:function(e){return t.$router.back()}}})]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"userInput"},[s("authinput",{attrs:{type:"text",placeholder:"请输入手机号",rule:"^\\d{4,16}$",err_message:"请输入正确的手机号"},on:{input:t.setUserName}})],1),t._v(" "),s("div",{staticClass:"userName"},[s("authinput",{attrs:{type:"text",placeholder:"请输入昵称",rule:"^\\w{4,16}$",err_message:"请输入合法昵称"},on:{input:t.setNiChen}})],1),t._v(" "),s("div",{staticClass:"passInput"},[s("authinput",{attrs:{type:"password",placeholder:"请设置密码",rule:"^\\d{3,16}$",err_message:"请输入合法密码"},on:{input:t.setPwd}})],1),t._v(" "),s("div",{staticClass:"btn"},[s("botton",{attrs:{text:"注册"},on:{send:t.sendRegister}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("span",{staticClass:"iconfont iconnew"})])}]};var _=s("VU/8")(v,f,!1,function(t){s("UC27")},"data-v-29f5ebcb",null).exports,g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"procha",on:{click:t.jumpPage}},[s("div",{staticClass:"left"},[t._v(t._s(t.label))]),t._v(" "),s("div",{staticClass:"right"},[t._v("\n    "+t._s(t.desl)+"\n    "),s("span",{staticClass:"iconfont iconjiantou1"})])])},staticRenderFns:[]};var C=s("VU/8")({props:["label","desl"],methods:{jumpPage:function(){this.$emit("jump",this.label)}}},g,!1,function(t){s("19Sq")},"data-v-7060a6d2",null).exports,x={components:{profiled:C},data:function(){return{profile:{}}},methods:{logOut:function(){localStorage.removeItem("token"),localStorage.removeItem("user_id"),this.$router.replace({path:"/login"})},jumpPage:function(){},efitProfile:function(){this.$router.push({path:"./EditFile"})},attentionss:function(){this.$router.push({path:"./attention"})},mycomments:function(){this.$router.push({path:"./mycomments"})},collects:function(){this.$router.push({path:"./collect"})}},mounted:function(){var t=this;this.$axios({url:"/user/"+localStorage.getItem("user_id"),method:"get"}).then(function(e){t.profile=e.data.data,t.profile.head_img?t.profile.head_img=t.$axios.defaults.baseUrl+t.profile.head_img:t.profile.head_img="../assets/images/capture_20191015202843328.jpg",console.log(t.profile)})}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profiles"},[s("div",{staticClass:"top",on:{click:t.efitProfile}},[s("div",{staticClass:"left"},[s("img",{staticClass:"imgs",attrs:{src:t.profile.head_img,alt:""}})]),t._v(" "),s("div",{staticClass:"right"},[1==t.profile.gender?s("span",{staticClass:"iconfont iconxingbienan"}):s("span",{staticClass:"iconfont iconxingbienv"}),t._v("\n      "+t._s(t.profile.nickname)+"\n      "),s("div",{staticClass:"times"},[t._v("2019-10-10")])]),t._v(" "),s("span",{staticClass:"iconfont iconjiantou1"})]),t._v(" "),s("profiled",{attrs:{label:"我的关注",desl:"关注的用户"},on:{jump:t.attentionss}}),t._v(" "),s("profiled",{attrs:{label:"我的跟帖",desl:"跟帖/回复"},on:{jump:t.mycomments}}),t._v(" "),s("profiled",{attrs:{label:"我的收藏",desl:"文章/视频"},on:{jump:t.collects}}),t._v(" "),s("profiled",{attrs:{label:"设置"},on:{jump:t.efitProfile}}),t._v(" "),s("profiled",{attrs:{label:"退出登录"},on:{jump:t.logOut}})],1)},staticRenderFns:[]};var w=s("VU/8")(x,b,!1,function(t){s("2c1S")},"data-v-f841f242",null).exports,k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"heard"},[s("span",{staticClass:"iconfont iconjiantou2",on:{click:function(e){return t.$router.back()}}}),t._v(" "),s("div",{staticClass:"tital"},[t._v(t._s(t.labels))])])])},staticRenderFns:[]};var y=s("VU/8")({props:["labels"]},k,!1,function(t){s("n6HD")},"data-v-a94eaf94",null).exports,$={components:{editherd:y,profiled:C},data:function(){return{isShowNickname:!1,isShowPwd:!1,isShowGender:!1,genderList:[{name:"男"},{name:"女"}],newNickname:"",newPwd:"",profile:{}}},methods:{loadPage:function(){var t=this;this.$axios({url:"/user/"+localStorage.getItem("user_id"),method:"get"}).then(function(e){t.profile=e.data.data,t.profile.head_img?t.profile.head_img=t.$axios.defaults.baseURL+t.profile.head_img:t.profile.head_img="../assets/images/capture_20191015202843328.jpg",t.profile.gender=0==t.profile.gender?"小姐姐":"小哥哥"})},selectGender:function(t){this.editProfile({gender:"男"==t.name?1:0}),this.isShowGender=!1},afterRead:function(t){var e=this,s=new FormData;s.append("file",t.file),this.$axios({url:"/upload",method:"post",data:s}).then(function(t){e.editProfile({head_img:t.data.data.url})})},editProfile:function(t){var e=this;this.$axios({url:"/user_update/"+localStorage.getItem("user_id"),method:"post",data:t}).then(function(t){e.loadPage()})}},mounted:function(){this.loadPage()}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("editherd",{attrs:{labels:"编辑资料"}}),t._v(" "),s("div",{staticClass:"img"},[s("img",{staticClass:"imgs",attrs:{src:t.profile.head_img,alt:""}}),t._v(" "),s("van-uploader",{staticClass:"fileUploader",attrs:{"after-read":t.afterRead}})],1),t._v(" "),s("profiled",{attrs:{label:"昵称",desl:t.profile.nickname},on:{jump:function(e){t.isShowNickname=!0}}}),t._v(" "),s("profiled",{attrs:{label:"密码",desl:"******"},on:{jump:function(e){t.isShowPwd=!0}}}),t._v(" "),s("profiled",{attrs:{label:"性别",desl:t.profile.gender},on:{jump:function(e){t.isShowGender=!0}}}),t._v(" "),s("van-dialog",{attrs:{title:"编辑昵称","show-cancel-button":""},on:{confirm:function(e){return t.editProfile({nickname:t.newNickname})}},model:{value:t.isShowNickname,callback:function(e){t.isShowNickname=e},expression:"isShowNickname"}},[s("van-field",{attrs:{placeholder:"请输入昵称"},model:{value:t.newNickname,callback:function(e){t.newNickname=e},expression:"newNickname"}})],1),t._v(" "),s("van-dialog",{attrs:{title:"编辑密码","show-cancel-button":""},on:{confirm:function(e){return t.editProfile({password:t.newPwd})}},model:{value:t.isShowPwd,callback:function(e){t.isShowPwd=e},expression:"isShowPwd"}},[s("van-field",{attrs:{typ:"",placeholder:"请输入密码"},model:{value:t.newPwd,callback:function(e){t.newPwd=e},expression:"newPwd"}})],1),t._v(" "),s("van-action-sheet",{attrs:{actions:t.genderList,"cancel-text":"取消"},on:{select:t.selectGender},model:{value:t.isShowGender,callback:function(e){t.isShowGender=e},expression:"isShowGender"}})],1)},staticRenderFns:[]};var L=s("VU/8")($,P,!1,function(t){s("GNpe")},"data-v-f97b50f0",null).exports,I=s("Gu7T"),S=s.n(I),F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hearder"},[e("span",{staticClass:"iconfont iconnew"}),this._v(" "),e("div",{staticClass:"middle"},[e("div",{staticClass:"search",on:{click:this.search}},[e("span",{staticClass:"iconfont iconsearch"}),this._v("\n      搜索新闻\n    ")])]),this._v(" "),e("router-link",{attrs:{to:"/profile"}},[e("span",{staticClass:"iconfont iconwode"})])],1)},staticRenderFns:[]};var E=s("VU/8")({methods:{search:function(){this.$router.push({path:"/search"})}}},F,!1,function(t){s("wmq5")},"data-v-cadf2914",null).exports,T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[2==t.post.type?s("div",{staticClass:"videoPost"},[s("div",{staticClass:"title",on:{click:t.toDetail}},[t._v(t._s(t.post.title))]),t._v(" "),s("div",{staticClass:"cover",on:{click:t.toDetail}},[s("img",{staticClass:"coverImg",attrs:{src:t.post.cover[0].url,alt:""}}),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(t.post.user.nickname)+" "+t._s(t.post.comment_length)+"跟帖")])]):t.post.cover.length>0&&t.post.cover.length<3?s("div",{staticClass:"singleImgPost"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title",on:{click:t.toDetail}},[t._v(t._s(t.post.title))]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(t.post.user.nickname)+" "+t._s(t.post.comment_length)+"跟帖")])]),t._v(" "),s("img",{staticClass:"imgRight",attrs:{src:t.post.cover[0].url,alt:""},on:{click:t.toDetail}})]):t.post.cover.length>=3?s("div",{staticClass:"multipImgPost"},[s("div",{staticClass:"title",on:{click:t.toDetail}},[t._v(t._s(t.post.title))]),t._v(" "),s("div",{staticClass:"covers",on:{click:t.toDetail}},[s("img",{staticClass:"coverImg",attrs:{src:t.post.cover[0].url,alt:""}}),t._v(" "),s("img",{staticClass:"coverImg",attrs:{src:t.post.cover[1].url,alt:""}}),t._v(" "),s("img",{staticClass:"coverImg",attrs:{src:t.post.cover[2].url,alt:""}})]),t._v(" "),s("div",{staticClass:"info"},[t._v(t._s(t.post.user.nickname)+" "+t._s(t.post.comment_length)+"跟帖")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btnWrapper"},[e("div",{staticClass:"iconfont iconshipin"})])}]};var j=s("VU/8")({props:["post"],methods:{toDetail:function(){this.$router.push({name:"xiangqingpage",params:{id:this.post.id}})}}},T,!1,function(t){s("Rnzr")},"data-v-3e44bc94",null).exports,R={components:{homes:E,post:j},data:function(){return{activeTab:localStorage.getItem("token")?1:0,tabList:[],pageSize:5,loading:!1}},mounted:function(){this.initTabList()},methods:{initTabList:function(){var t=this;this.$axios({url:"/category",method:"get"}).then(function(e){var s=e.data.data;s.forEach(function(t){t.posts=[],t.currentPage=1,t.finishes=!1}),t.tabList=s,t.getTabPosts(t.activeTab)})},loadMorePost:function(){this.tabList[this.activeTab].currentPage+=1,this.getTabPosts(this.activeTab),console.log("到底了")},getTabPosts:function(t){var e=this,s=this.tabList[t].id;this.$axios({url:"/post",method:"get",params:{category:s,pageSize:this.pageSize,pageIndex:this.tabList[t].currentPage}}).then(function(s){var n=s.data.data,i=[].concat(S()(e.tabList[t].posts),S()(n));e.tabList[t].posts=i,e.loading=!1,n.length<e.pageSize&&(e.tabList[e.activeTab].finished=!0)})}},watch:{activeTab:function(t){0==this.tabList[t].posts.length&&this.getTabPosts(t)}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("homes"),t._v(" "),s("van-tabs",{attrs:{sticky:"",swipeable:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabList,function(e,n){return s("van-tab",{key:n,attrs:{title:e.name}},[s("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.loadMorePost},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(e.posts,function(t,e){return s("post",{key:e,attrs:{post:t}})}),1)],1)}),1)],1)},staticRenderFns:[]};var N=s("VU/8")(R,U,!1,function(t){s("xy5l")},null,null).exports,O={components:{editherd:y},data:function(){return{myFollows:[]}},methods:{loadPage:function(){var t=this;this.$axios({url:"/user_follows",method:"get"}).then(function(e){t.myFollows=e.data.data,t.myFollows.forEach(function(e){e.head_img?e.head_img=t.$axios.defaults.baseURL+e.head_img:e.head_img="../assets/images/capture_20191015202843328.jpg"})})},cancelFollow:function(t){var e=this;this.$axios({url:"/user_unfollow/"+t,method:"get"}).then(function(t){e.loadPage()})}},mounted:function(){this.loadPage()}},V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("editherd",{attrs:{labels:"我的关注"}}),t._v(" "),t._l(t.myFollows,function(e){return s("div",{key:e.id,staticClass:"guanZhu"},[s("img",{staticClass:"left",attrs:{src:e.head_img,alt:""}}),t._v(" "),s("div",{staticClass:"banner"},[t._v("\n      "+t._s(e.nickname)+"\n      "),s("div",{staticClass:"times"},[t._v("2019-10-10")])]),t._v(" "),s("div",{staticClass:"right",on:{click:function(s){return t.cancelFollow(e.id)}}},[t._v("取消关注")])])})],2)},staticRenderFns:[]};var q=s("VU/8")(O,V,!1,function(t){s("KQl2")},"data-v-211ffc48",null).exports,A={components:{editherd:y},data:function(){return{commentList:[]}},mounted:function(){var t=this;this.$axios({url:"/user_comments",method:"get"}).then(function(e){t.commentList=e.data.data})}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("editherd",{attrs:{labels:"我的跟帖"}}),t._v(" "),t._l(t.commentList,function(e){return s("div",{key:e.id,staticClass:"item"},[s("div",{staticClass:"data"},[t._v("2019-10-10")]),t._v(" "),e.parent?s("div",{staticClass:"parent"},[s("div",{staticClass:"name"},[t._v("回复:"+t._s(e.parent.user.nickname))]),t._v(" "),s("div",{staticClass:"parentcomtent"},[t._v(t._s(e.parent.content))])]):t._e(),t._v(" "),s("div",{staticClass:"maincontent"},[t._v(t._s(e.content))]),t._v(" "),s("div",{staticClass:"postOrigin"},[t._v("原文:"+t._s(e.post.title))])])})],2)},staticRenderFns:[]};var z=s("VU/8")(A,H,!1,function(t){s("CEyp")},"data-v-0570f58d",null).exports,G={components:{editherd:y,post:j},data:function(){return{collectionList:[]}},mounted:function(){var t=this;this.$axios({url:"/user_star",method:"get"}).then(function(e){t.collectionList=e.data.data,t.collectionList.forEach(function(e){e.comment_length=e.comments.length,e.cover&&e.cover.forEach(function(e){e.url.indexOf("http")<0&&(e.url=t.$axios.defaults.baseURL+e.url)})})})}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("editherd",{attrs:{labels:"我的收藏"}}),this._v(" "),this._l(this.collectionList,function(t,s){return e("post",{key:s,attrs:{post:t}})})],2)},staticRenderFns:[]};var W=s("VU/8")(G,D,!1,function(t){s("MYWZ")},"data-v-74df40fe",null).exports,M={props:["post"],methods:{follow:function(){var t=this;this.$axios({url:"/user_follows/"+this.post.user.id,method:"get"}).then(function(e){var s=e.data.message;console.log(s),"关注成功"==s&&(t.post.has_follow=!0)})},unfollow:function(){var t=this;this.$axios({url:"/user_unfollow/"+this.post.user.id,method:"get"}).then(function(e){var s=e.data.message;"取消关注成功"==s&&(console.log(s),t.post.has_follow=!1)})}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"heard"},[s("div",{staticClass:"left"},[s("div",{staticClass:"jiantou"},[s("span",{staticClass:"iconfont iconjiantou2",on:{click:function(e){return t.$router.back()}}})]),t._v(" "),t._m(0)]),t._v(" "),t.post.has_follow?t.post.has_follow?s("div",{staticClass:"rights",on:{click:t.unfollow}},[t._v("已关注")]):t._e():s("div",{staticClass:"right reds",on:{click:t.follow}},[t._v("关注")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"new"},[e("span",{staticClass:"iconfont iconnew"})])}]};var Y=s("VU/8")(M,B,!1,function(t){s("mYl5")},"data-v-0c530a2f",null).exports,Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isFocus?t._e():s("div",{staticClass:"foot"},[s("input",{attrs:{type:"text",placeholder:"写跟帖"},on:{focus:t.showArea}}),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"num"},[t._v(t._s(t.post.comment_length))]),t._v(" "),s("span",{staticClass:"iconfont iconpinglun-"}),t._v(" "),s("span",{staticClass:"iconfont iconshoucang",class:{red:t.post.has_star},on:{click:t.star}}),t._v(" "),t._m(0)])]),t._v(" "),t.isFocus?s("div",{staticClass:"footer"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],ref:"commentArea",staticClass:"footers",attrs:{placeholder:"回复：@火星网友1"},domProps:{value:t.comment},on:{blur:t.handleBlur,input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),s("div",{staticClass:"fasong",on:{click:t.send}},[t._v("发送")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Explanation_of_interface_privileges.html"}},[e("span",{staticClass:"iconfont iconfenxiang"})])}]};var Z=s("VU/8")({props:["post","isActive","replyObj"],data:function(){return{isFocus:!1,comment:""}},watch:{isActive:function(){this.isFocus=this.isActive}},methods:{handleBlur:function(){this.comment||(this.isFocus=!1)},send:function(){var t=this;this.$axios({url:"/post_comment/"+this.post.id,method:"post",data:{content:this.comment,parent_id:this.replyObj?this.replyObj.id:null}}).then(function(e){t.comment="",t.isFocus=!1,t.$emit("newComment")})},showArea:function(){var t=this;this.isFocus=!0,this.$nextTick(function(){t.$refs.commentArea.focus()})},star:function(){var t=this;this.$axios({url:"/post_star/"+this.post.id,method:"get"}).then(function(e){var s=e.data.message;"收藏成功"==s?t.post.has_star=!0:"取消成功"==s&&(t.post.has_star=!1)})}}},Q,!1,function(t){s("5vq8")},null,null).exports,J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.floorItem.parent?s("floor",{attrs:{floorItem:t.floorItem.parent,parentLength:t.parentLength-1},on:{reply:t.reply}}):t._e(),t._v(" "),s("div",{staticClass:"floorWrapper"},[s("div",{staticClass:"meta"},[s("div",{staticClass:"info"},[t._v("\n        "+t._s(t.parentLength)+" : "+t._s(t.floorItem.user.nickname)+"\n        "),s("span",{staticClass:"time"},[t._v("2个小时前")])]),t._v(" "),s("div",{staticClass:"btnReply",on:{click:t.reply}},[t._v("回复")])]),t._v(" "),s("div",{staticClass:"floorContent"},[t._v(t._s(t.floorItem.content))])])],1)},staticRenderFns:[]};var K={components:{commentFloor:s("VU/8")({name:"floor",props:["floorItem","parentLength"],methods:{reply:function(t){t.id?this.$emit("reply",t):this.$emit("reply",{id:this.floorItem.id})}}},J,!1,function(t){s("zXCl")},"data-v-1f366073",null).exports},props:["commentItem"],data:function(){return{parentLengh:this.countParent(0,this.commentItem)}},methods:{countParent:function(t,e){return e.parent?this.countParent(t+1,e.parent):t},reply:function(t){t.id?this.$emit("reply",t):this.$emit("reply",{id:this.commentItem.id})}}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"commentWrapper"},[n("div",{staticClass:"meta"},[n("img",{staticClass:"avatar",attrs:{src:s("As99"),alt:""}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"btnReply",on:{click:t.reply}},[t._v("回复")])]),t._v(" "),t.commentItem.parent?n("commentFloor",{attrs:{floorItem:t.commentItem.parent,parentLength:t.parentLengh},on:{reply:t.reply}}):t._e(),t._v(" "),n("div",{staticClass:"commentContent"},[t._v(t._s(t.commentItem.content))])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[this._v("火星网友")]),this._v(" "),e("div",{staticClass:"time"},[this._v("2小时前")])])}]};var tt=s("VU/8")(K,X,!1,function(t){s("nB/V")},"data-v-11a35834",null).exports,et={components:{xiangqingheard:Y,xiangqingfoot:Z,comment:tt},data:function(){return{postId:this.$route.params.id,post:{},comments:[],replyActive:0,replyObj:{}}},mounted:function(){var t=this;console.log(this.postId),this.$axios({url:"/post/"+this.postId,method:"get"}).then(function(e){var s=e.data.data;t.post=s,console.log(t.post)}),this.getComments()},methods:{reply:function(t){this.replyObj=t,this.replyActive+=1},toMoreComments:function(){this.$router.push({name:"moreCommentsPage",params:{id:this.postId}})},getComments:function(){var t=this;this.$axios({url:"/post_comment/"+this.postId,method:"get",params:{pageSize:3}}).then(function(e){var s=e.data.data;t.comments=s})},like:function(){var t=this;this.$axios({url:"/post_like/"+this.post.id,method:"get"}).then(function(e){var s=e.data.message;"点赞成功"==s?(t.post.has_like=!0,t.post.like_length+=1):"取消成功"==s&&(t.post.has_like=!1,t.post.like_length-=1)})}}},st={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("xiangqingheard",{attrs:{post:t.post}}),t._v(" "),s("div",{staticClass:"mainContent"},[2==t.post.type?s("video",{staticClass:"video",attrs:{src:"https://video.pearvideo.com/mp4/adshort/20191031/cont-1617802-14542116_adpkg-ad_hd.mp4 ",controls:"controls",poster:t.post.cover[0].url}}):t._e(),t._v(" "),s("div",{staticClass:"litle"},[t._v(t._s(t.post.title))]),t._v(" "),t.post.user?s("div",{staticClass:"info"},[t._v(t._s(t.post.user.nickname)+" 2019-10-31")]):t._e(),t._v(" "),2!==t.post.type?s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.post.content)}}):t._e(),t._v(" "),s("div",{staticClass:"actionBtns"},[s("div",{staticClass:"like",on:{click:t.like}},[s("span",{staticClass:"iconfont icondianzan",class:{red:t.post.has_like}}),t._v("\n        "+t._s(t.post.like_length)+"\n      ")]),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"geng"},[s("h2",{staticClass:"litle"},[t._v("精彩跟帖")]),t._v(" "),0==t.comments.length?s("div",{staticClass:"tishi"},[t._v("暂无跟帖，抢占沙发")]):s("div",{staticClass:"comment"},[t._l(t.comments,function(e,n){return s("comment",{key:n,attrs:{commentItem:e},on:{reply:t.reply}})}),t._v(" "),s("div",{staticClass:"btnMoreComments",on:{click:t.toMoreComments}},[t._v("更多跟帖")])],2)]),t._v(" "),s("xiangqingfoot",{attrs:{post:t.post,isActive:t.replyActive,replyObj:t.replyObj},on:{newComment:t.getComments}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wechat"},[e("span",{staticClass:"iconfont iconweixin"}),this._v(" "),e("a",{attrs:{href:"https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Explanation_of_interface_privileges.html"}},[this._v("微信")])])}]};var nt=s("VU/8")(et,st,!1,function(t){s("b9Cm")},"data-v-46eb7554",null).exports,it={components:{editherd:y,comment:tt,xiangqingfoot:Z},data:function(){return{postId:this.$route.params.id,comments:[],replyActive:0,post:{},replyObj:{}}},mounted:function(){var t=this;this.$axios({url:"/post/"+this.postId,method:"get"}).then(function(e){var s=e.data.data;t.post=s}),this.getComments()},methods:{reply:function(t){console.log("点击了id为"+t.id+"的回复按钮"),this.replyObj=t,this.replyActive+=1},getComments:function(){var t=this;this.$axios({url:"/post_comment/"+this.postId,method:"get"}).then(function(e){var s=e.data.data;t.comments=s})}}},at={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("editherd",{attrs:{labels:"更多跟帖"}}),t._v(" "),t._l(t.comments,function(e,n){return s("comment",{key:n,attrs:{commentItem:e},on:{reply:t.reply}})}),t._v(" "),s("xiangqingfoot",{attrs:{post:t.post,isActive:t.replyActive,replyObj:t.replyObj},on:{newComment:t.getComments}})],2)},staticRenderFns:[]};var ot=s("VU/8")(it,at,!1,function(t){s("DyHt")},null,null).exports,rt=s("mvHQ"),ct=s.n(rt),lt={components:{post:j},data:function(){return{searchText:"",resultList:[],hotList:[],historyList:localStorage.getItem("searchHistory")?JSON.parse(localStorage.getItem("searchHistory")):[]}},watch:{searchText:function(){""==this.searchText&&(this.resultList=[])},historyList:function(){var t=ct()(this.historyList);localStorage.setItem("searchHistory",t)}},mounted:function(){this.getHotList()},methods:{searchByWord:function(t){this.searchText=t,this.search()},back:function(){this.searchText?this.searchText="":this.$router.back()},getHotList:function(){this.hotList=["关晓彤","王祖贤","女歌手 "]},search:function(){var t=this;this.$axios({url:"/post_search",method:"get",params:{keyword:this.searchText}}).then(function(e){var s=e.data.data;t.resultList=s,t.historyList.indexOf(t.searchText)<0&&t.historyList.push(t.searchText)})}}},ut={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"hearder"},[s("span",{staticClass:"iconfont iconjiantou2",on:{click:t.back}}),t._v(" "),s("div",{staticClass:"middle"},[s("span",{staticClass:"iconfont iconsearch"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"searchText",attrs:{type:"text",placeholder:"请输入想要搜索的内容"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.search}},[t._v("搜索")])]),t._v(" "),t.resultList.length>0?s("div",t._l(t.resultList,function(t,e){return s("post",{key:e,attrs:{post:t}})}),1):s("div",{staticClass:"suggestion"},[s("div",{staticClass:"history"},[s("h2",[t._v("历史记录")]),t._v(" "),t._l(t.historyList,function(e,n){return s("span",{key:n,on:{click:function(s){return t.searchByWord(e)}}},[t._v(t._s(e))])})],2),t._v(" "),s("div",{staticClass:"hot"},[s("h2",[t._v("热门搜索")]),t._v(" "),t._l(t.hotList,function(e,n){return s("span",{key:n,on:{click:function(s){return t.seatchByWord(e)}}},[t._v(t._s(e))])})],2)])])},staticRenderFns:[]};var dt=s("VU/8")(lt,ut,!1,function(t){s("SsHj")},"data-v-614d64a8",null).exports;n.a.use(o.a);var ht=new o.a({routes:[{path:"/",name:"homepage",component:N},{path:"/login",name:"loginPage",component:m},{path:"/register",name:"registerpage",component:_},,{path:"/profile",name:"profilepage",component:w},{path:"/editfile",name:"editfilepage",component:L},{path:"/attention",name:"attentionpage",component:q},{path:"/mycomments",name:"mycommentspage",component:z},{path:"/collect",name:"collectpage",component:W},{path:"/xiangqing/:id",name:"xiangqingpage",component:nt},{path:"/morecomments/:id",name:"moreCommentsPage",component:ot},{path:"/search",name:"searchpage",component:dt}]}),pt=s("Fd2+"),mt=(s("4ml/"),s("mtWM")),vt=s.n(mt);n.a.use(pt.b),ht.beforeEach(function(t,e,s){var n=localStorage.getItem("token");["/profile","/editfile"].indexOf(t.path)>=0?n?s():s("/login"):s()}),vt.a.defaults.baseUrl="http://127.0.0.1:3000",vt.a.interceptors.request.use(function(t){return!t.headers.Authorization&&localStorage.getItem("token")&&(t.headers.Authorization=localStorage.getItem("token")),t}),vt.a.interceptors.response.use(function(t){var e=t.data,s=e.message,n=e.statusCode;return s&&401==n&&pt.a.fail(s),"用户信息验证失败"==s&&ht.push("./login"),t}),n.a.prototype.$axios=vt.a,vt.a.defaults.baseURL="http://localhost:3000",n.a.config.productionTip=!1,new n.a({el:"#app",router:ht,components:{App:a},template:"<App/>"})},Rnzr:function(t,e){},SsHj:function(t,e){},Ttut:function(t,e){},UC27:function(t,e){},b9Cm:function(t,e){},fs5F:function(t,e){},mYl5:function(t,e){},mbxz:function(t,e){},n6HD:function(t,e){},"nB/V":function(t,e){},wmq5:function(t,e){},xy5l:function(t,e){},zXCl:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0a163c934b80b3d2fca3.js.map