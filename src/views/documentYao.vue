<template>
	<div class="box-index">
		<div class="box-index-left">
			<div class="btm">添加</div>
			<Aside></Aside>
		</div>
		<div class="box-index-right">right</div>
	</div>
</template>

<script>
	import Aside from '../components/aside/Aside.vue'
	export default{
		name: 'documentYao',
		data(){
			return {}
		},
		components: {
			Aside
		}
	}
</script>

<style scoped="scoped">
.box-index{
	display: flex;
	/* justify-content: space-between; */
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
/* 	background-image: url(/img/2020112102.23b52f80.jpg);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat; */
}
.box-index-left{
	width: 200px;
	margin: 50px 0px;
	border-right: 2px solid #eee;
}
.box-index-left .btm{
	text-align: right;
	margin-right: 5px;
}
.box-index-right{
	flex:1;
	padding: 50px 30px;
}
</style>
