<template>
	<div class="box">
		<img :style="{width:imgWidth}" src="/static/img/2020101401.png">
		<h2>根据屏幕大小改变图片的宽度</h2>
	</div>
</template>

<script>
import Bus from '../api/common/Bus.js'
export default{
	name: 'Cover',
	data(){
		return {
			imgWidth: '1024px'
		}
	},
	created(){
		let scrollWidth = document.body.scrollWidth;
		this.imgWidth = scrollWidth+'px';
		Bus.$on('coverInnerWidth', (val) => {
			this.imgWidth = val+'px';
		});
	}
}
</script>

<style scoped>
.box{
	width: 100%;
	position: relative;
	overflow: hidden;
}
.box h2{
	position: absolute;
	top: 50%;
	left: 30%;
	color: white;
}
</style>
