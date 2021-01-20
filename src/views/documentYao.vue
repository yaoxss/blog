<!--
 * @Author: your name
 * @Date: 2020-11-25 17:34:27
 * @LastEditTime: 2021-01-17 21:15:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueComponents\my-components\src\views\documentYao.vue
-->
<template>
	<div class="box-index">
		<div class="column"><span class="iconfont icon-caidan" @click="columnClick" ></span></div>
		<div class="box-index-left" v-show="boxIndexLeftShow" >
			<Aside :asideList="treeList" :boxIndexRightDom="boxIndexRightDom" ></Aside>
		</div>
		<div class="box-index-right" ref="boxIndexRightDom">		
			<EditorMdShow />	
		</div>
	</div>
</template>

<script>
	import Aside from '@/components/aside/Aside.vue';
	import {TREELIST} from '@/config/documentConfig.js';
	import EditorMdShow from '@/components/editor/EditorMdShow.vue'
	export default{
		name: 'documentYao',
		data(){
			return {
				'treeList': null,
				'mdContent': '',
				'boxIndexRightDom': null,
				'boxIndexLeftShow': true
			}
		},
		created(){
			this.treeList = TREELIST;
		},
		mounted(){
			this.boxIndexRightDom = this.$refs.boxIndexRightDom;
		},
		methods: {
			columnClick(){
				this.boxIndexLeftShow = !this.boxIndexLeftShow
			}
		},
		components: {
			Aside,
			EditorMdShow
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
.column{
	width: 30px;
	margin: 50px 0px;
	text-align: center;
	background-color: #ccc;
}
.column .iconfont{
	font-size: 20px;
	font-weight: 600;
	line-height: 30px;
}
.box-index-left{
	width: 300px;
	margin: 50px 0px;
	border-right: 2px solid #eee;
	height: ceil(100% - 101px);
	overflow-y: auto;
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE 10+ */
}
.box-index-right{
	flex:1;
	margin: 50px 0px;
	padding: 0 20px;
	height: ceil(100% - 101px);
	overflow-y: auto;
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE 10+ */
}
.box-index-right::-webkit-scrollbar {
	display: none; /* Chrome Safari */
}
.box-index-left::-webkit-scrollbar {
	display: none; /* Chrome Safari */
}
</style>
