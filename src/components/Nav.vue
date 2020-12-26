<template>
  <div class="nav">
	<div class="menu" @click="menuClick">
		<span class="icon iconfont">&#xe630;</span>
	</div>
    <div class="logo">logo</div>
	<ul class="navList">
		<li><a href="#">首页</a></li>
		<li><a href="#">产品介绍</a></li>
		<li><a href="#">新闻资讯</a></li>
		<li><a href="#">人才招聘</a></li>
		<li><a href="#">服务与支持</a></li>
		<li><a href="#">关于我们</a></li>
	</ul>
	<ul ref="menuList" class="menuList">
		<li><a href="#">首页</a></li>
		<li><a href="#">产品介绍</a></li>
		<li><a href="#">新闻资讯</a></li>
		<li><a href="#">人才招聘</a></li>
		<li><a href="#">服务与支持</a></li>
		<li><a href="#">关于我们</a></li>
	</ul>
	<div></div>
  </div>
</template>

<script>
import Bus from '../api/common/Bus.js' 

export default {
  name: 'Nav',
  props: {
    msg: String
  },
  data(){
	  return {
		  menuListHeight: ''
	  }
  },
  created(){
	  // 兄弟组件WindowOnresize
	  Bus.$on('navMenuListDisplay', (val) => {
		 this.$refs.menuList.style.display = val;
	  });
  },
  mounted: function(){
	  let body = document.getElementsByTagName('body')[0];
	  body.onclick  = () => {
		this.$refs.menuList.style.height = "0px";
	  }
	  this.$refs.menuList.style.display = "block";
	  let menuListHeight = this.$refs.menuList.clientHeight;
	  this.$refs.menuList.style.display = "none";
	  this.menuListHeight = menuListHeight;
	  // console.log(this.menuListHeight);
	  this.$refs.menuList.style.height = '0px';
  },
  methods:{
	menuClick: function(){
	  this.$refs.menuList.style.display = "block";
	  let height = this.$refs.menuList.style.height;
	  if(height == 0 || height == '0px'){
		  this.$refs.menuList.style.height = this.menuListHeight + 'px';
	  }else{
		  this.$refs.menuList.style.height = '0px';
	  }
	  event.stopPropagation();
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
	display: flex;
	position: relative;
	justify-content:space-between;
	background-color: #000;
	color: #FFFFFF;
	font-size: 24px;
	font-weight: 600;
}
.menu{
	display: none;
	margin-left: 20px;
}
.menu .iconfont{
	font-size: 34px;
	line-height: 102px;
}
.logo{
	font-size: 34px;
	line-height: 102px;
	margin-left: 20px;
}
.navList{
	display: flex;
}
.navList li{
	margin: 36px 0;
	padding: 0 20px;
	border-right: 1px solid white;
}
.navList li:last-child{
	border-right: none;
}
.navList li a{
	color: white;
}
.navList li a:hover{
	color: blue;
}

.menuList{
	overflow: hidden;
}

/** 如果文档宽度小于 300 像素则修改背景颜色(background-color):*/
@media screen and (max-width: 1200px) {
    .navList{
		display: none;
	}
	.menu{
		display: block;
	}
	.logo{
		margin-left: 0;
	}
	.menuList {
        display: block;
		position: absolute;
		top: 102px;
		background-color: #000000;
		min-width: 200px;
		transition: all 400ms ease-out;
		/* -webkit-animation: dropDown 5s infinite; */ /* Chrome, Safari, Opera */
		/* animation: dropDown 1s infinite; */
    }
	.menuList li{
		margin: 36px 0;
		padding: 0 20px;
	}
	.menuList li a{
		color: white;
	}
}
@media screen and (min-width: 1201px){
	.menuList{
		/* display: none; */
		/* height: 0px !important; */
	}
	.menuList li{
		margin: 36px 0;
		padding: 0 20px;
	}
	.menuList li a{
		color: white;
	}
}
</style>
