<template>
	<div class="index-box">
		<ul class="nav">
			<li></li>
			<li class="title">格言</li>
			<li @click="comeBack()"><span class="iconfont icon-shouye"></span></li>
		</ul>
		<div class="my-say">
			<p>从2016年开始就有点想收集一些对自己有帮助的名言或者感同深受的语句</p>
			<p>从2020年开始，我渐渐喜欢记录生活中的一些感受和对某一些事情的看法</p>
		</div>
		<!-- dynamic(动态) -->
		<div class="fieldset-box" v-for="item in motto" :key="item.id" >
			<fieldset>
				<legend>{{item.author}}</legend>
				<p v-if="typeof item.content == 'string'">{{item.content}}</p>
				<ul v-else>
					<li v-for="(itemli,key) in item.content" :key='key' >{{itemli}}</li>
				</ul>
			</fieldset>
		</div>
		
	</div>
</template>

<script>

export default{
	name: 'dynamic',
	data(){
		return {
			motto:[
				{
					'id': 1,
					'author': '埃莉诺·罗斯福,罗斯福总统夫人',
					'content': '优秀的人讨论思想，普通的人讨论事件，狭隘的人讨论人。',
					'time': ''
				},
				{
					'id': 2,
					'author': 'yaoxs',
					'content': [
						'A:各位司机大佬，进村的时候开慢点，多谢合作',
						'B:你在这里说他们哪里知道(开车的师傅们不在这个群里)',
						'A理智的说法应该是不好意思，发错群了 + 一个合适的表情'
					],
					'time': '20201223'
				}
			]
		};
	},
	methods: {
		comeBack(){
			this.$router.go(-1);
		}
	}
}

</script>

<style scoped="scoped">
	.index-box{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url(../../public/static/img/2020112102.jpg);
		background-size: cover;
		background-position:center;
		background-repeat: no-repeat;
		overflow-y: auto;
	}
	.nav{
		display: flex;
		justify-content: space-between;
		/* background-color: rgba(22,44,03,0.8); */
/* 		background-image: linear-gradient(to bottom, rgba(22,44,03,0.1) 0%,
			rgba(22,44,03,0.2) 25%, rgba(22,44,03,0.25) 75%,rgba(22,44,03,0.1) 100%); */
	}
	.nav li{
		font-size: 18px;
		line-height: 40px;
		padding: 0 10px;
	}
	.nav .title{
		color: #F7F7F7;
		text-shadow: 2px 2px 2px grey;
	}
	.nav li .iconfont{
		color: white;
		text-shadow: 2px 2px 2px grey;
	}
	.my-say{
		/* margin: 20px; */
		padding: 20px;
		box-shadow: 0 0 12px white;
		background-color: rgba(255,255,255,0.5);
	}
	.my-say p{
		text-indent: 2em;
	}
	.fieldset-box{
		padding: 20px;
		background-color: rgba(255,255,255,0.5);
	}
	.fieldset-box fieldset p,li{
		text-indent: 2em;
		line-height: 26px;
	}
</style>
