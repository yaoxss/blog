<template>
	<div class="bg">
		<MaskLayer ref="maskLayer">
			<MessageBox :title="messageBoxTitle" :imgPath="imgPath" ></MessageBox>
		</MaskLayer>
		<div class="adapt-box">
			<div class="blog-box">
				<div class="img">
					<img src="../../public/static/img/2020112101.jpg">
				</div>
				<div class="name">Yao XinSong</div>
				<div class="job">web前端开发 && PHP后端开发</div>
				<div class="iconfont-box">
					<div class="span-box">
						<span @click="showMessage('wx')" class="iconfont icon-weixin"></span>
						<span @click="showMessage('qq')" class="iconfont icon-qq1"></span>
						<span @click="showMessage('git')" class="iconfont icon-github"></span>
						<span @click="showMessage('csdn')" class="iconfont icon-csdn1"></span>
					</div>
				</div>
				<div>
					<Countdown></Countdown>
				</div>
				<div class="work-box">
					<StreamerBtm></StreamerBtm>
				</div>
				<div class="bottom-box">
					<div class="item">
						<div>30</div>
						<div>链接</div>
					</div>
					<div class="item">
						<div>30</div>
						<div><router-link to="/dynamic">动态</router-link></div>
					</div>
					<div class="item">
						<div>30</div>
						<div><router-link to="/picture">图片</router-link></div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import MessageBox from '@/components/MessageBox.vue';
import MaskLayer from '@/components/MaskLayer.vue';
import StreamerBtm from '@/components/StreamerBtm.vue';
import Countdown from '@/components/Countdown.vue';

export default {
  name: 'App',
  data(){
	  return {
		isShow: false,
		messageBoxTitle: '微信二维码',
		imgPath: '/static/img/mywx_qrcode.jpg',
		gitAdds: 'https://github.com/yaoxss',
		csdnAdds: 'https://blog.csdn.net/qq_23159841'
	  }
  },
  components: {
	  StreamerBtm,
	  MessageBox,
	  MaskLayer,
	  Countdown
  },
  created(){},
  methods:{
	  showMessage(name){
		console.log(name);
		if(name == 'wx'){
			this.messageBoxTitle = '微信二维码';
			this.imgPath = '/static/img/mywx_qrcode.jpg';
			this.$refs.maskLayer.isShow = true;
		}else if(name == 'qq'){
			this.messageBoxTitle = 'QQ二维码';
			this.imgPath = '/static/img/myqq_qrcode.jpg';
			this.$refs.maskLayer.isShow = true;
		}else if(name == 'git'){
			window.location.href=this.gitAdds;
		}else if(name == 'csdn'){
			window.location.href=this.csdnAdds;
		}
		
	  }
  }
}
</script>

<style scoped="scoped">
.bg{
	display: flex;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-image: url(../../public/static/img/2020112102.jpg);
	background-size: cover;
	background-position:center;
	background-repeat: no-repeat;
	justify-content: center;
	align-items: center;
}
.bg .adapt-box{
	width: 100%;
	max-width: 400px;
	background-color:rgba(22,44,03,0.7);
}
.bg .blog-box .img{
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 2;
	width: 160px;
	height: 160px;
	margin: 40px auto 0;
	border-radius: 50%;
	background: linear-gradient(90deg, #F2F9FF, #BEECFA, #76A1B4, #BEECFA);
	background-size: 400%;
	border-radius: 50%;
	/* filter: blur(20px); */
	z-index: 3;
}
.bg .blog-box .img img{
	position: relative;
	z-index: 4;
	width: 150px;
	height: 150px;
	border-radius: 50%;
}
.bg .blog-box .img:hover{
	animation: sun 8s infinite;
}
@keyframes sun{
	100%{
		background-position: -400% 0;
	}
}
.blog-box .name{
	text-align: center;
	color: #FFFFFF;
	font-size: 22px;
	margin: 20px 0 5px;
}
.blog-box .job{
	text-align: center;
	color: #BEECFA;
}
.iconfont-box{
	margin: 20px;
}
.iconfont-box .span-box{
	display: flex;
	justify-content: center;
	align-items: center;
}
.iconfont-box span{
	font-size: 30px;
	margin: 5px;
	color: #ccc;
}
.work-box{
	margin-top: 20px;
}
.bottom-box{
	display: flex;
	/* justify-content: space-between; */
	margin-top: 40px;
}
.bottom-box{
	background-color: #F2F9FF;
}
.bottom-box .item{
	flex: 1;
	margin: 20px 0;
	border-right: 1px solid #C5EBFF;
	text-align: center;
	font-size: 20px;
	line-height: 30px;
}
.bottom-box .item:last-of-type{
	border-right: none;
}
@media screen and (max-width: 400px) {
    .bg .adapt-box{
		height: 100%;
		display: flex;
		align-items: center;
	}
	.bg .adapt-box .blog-box{
		flex-grow: 1;
		padding-bottom: 100px;
	}
	.bg .adapt-box .blog-box .bottom-box{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
}
@media screen and (min-width: 400px){
	.bg .adapt-box{
		max-width: 350px;
	}
}
</style>
