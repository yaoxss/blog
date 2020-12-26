<template>
	<div class="message-box">
		<div class="top">
			<div class="title">{{title}}</div>
			<div>
				<span class="iconfont icon-cha" @click="closeMessage()" ></span>
			</div>
		</div>
		<div class="center">
			<div class="img">
				<img v-bind:src="imgPath" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'messageBox',
	  props: ['title','imgPath'],
	  methods: {
		  closeMessage(){
			  this.$parent.closeMessage();
		  }
	  }
	}
</script>

<style scoped="scoped">
	.message-box {
		width: 400px;
		/* height: 700px; */
		background-color: rgba(225,225,225,0.95);;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-shadow: 0px 0px 12px rgba(0,0,0,0.2);
		border-radius: 8px;
	}

	.message-box .top {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}

	.message-box .top .title {
		font-weight: 600;
		font-size: 22px;
		line-height: 28px;
	}

	.message-box .top .iconfont {
		font-size: 28px;
		line-height: 28px;
	}

	.message-box .center .img {
		margin: 60px auto;
		width: 251px;
	}

	.message-box .center .img img {
		width: 250px;
	}
	
	@media screen and (max-width: 400px) {
	    .message-box{
			width: 300px;
		}
		.message-box .center .img {
			margin: 30px auto;
			width: 200px;
		}
		.message-box .center .img img{
			width: 200px;
		}
	}
</style>
