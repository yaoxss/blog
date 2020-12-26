<template>
	<div class="box">
		<div class="roller-wrapper">
			<ul class="roller">
				<li></li>
				<li></li>
				<li>LG</li>
				<li>HTL</li>
				<li>索尼</li>
				<li>三星</li>
				<li>小米</li>
				<li>OPPO</li>
				<li>红米</li>
				<li>VIVO</li>
				<li>苹果</li>
				<li>诺基亚</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	name: 'ScrollEffect',
	data(){
		return {}
	},
	created(){}
}
</script>

<style scoped>
.roller{
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	scroll-snap-type: y mandatory;
	-ms-overflow-style: none; /* IE 10+ 隐藏滚动条*/
	scrollbar-width: none; /* Firefox 隐藏滚动条*/
}
/* 谷歌浏览器隐藏滚动条 */
.roller::-webkit-scrollbar{
	display: none;
}
.roller li{
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: bold;
	font-size: 1.2rem;
	color: #333333;
	scroll-snap-align: start;
}
.box{
	display: flex;
	justify-content: center;
	align-items: center;
	/* min-height: 100vh; */
	/* margin: 0; */
	margin: 20px 0;
	font-family: helvetica;
	font-size: 15px;
}
.roller-wrapper{
	width: 400px;
	height: 300px;
	position: relative;
	background-image: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, 
	rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.3) 100%);
	box-shadow: inset 0px 0px 12px rgba(0,0,0,0.2);
	border-radius: 12px;
}
.roller-wrapper::after{
	content: '';
	position: absolute;
	top: 120px;
	width: 100%;
	height: 60px;
	/* background-color: #eee; */
	background-image: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,
	rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.25) 75%,rgba(0,0,0,0.1) 100%);
	box-shadow: 0px 0px 12px rgba(0,0,0,0.12);
	border-top: 1px solid rgba(0,0,0,0.12);
	border-bottom: 1px solid rgba(0,0,0,0.12);
	pointer-events: none;
}
/* .roller li:first-child{
	margin-top: 120px;
} */
.roller li:last-child{
	margin-bottom: 120px;
}
</style>
