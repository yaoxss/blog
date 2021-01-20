<!--
 * @Author: your name
 * @Date: 2020-11-20 22:41:27
 * @LastEditTime: 2021-01-18 10:36:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueComponents\my-components\src\views\myComponents.vue
-->
<template>
	<div>
		<TraceNav :traceData="traceData" ></TraceNav>
		<!-- 监听浏览器窗口变化组件 -->
		<WindowOnresize></WindowOnresize>
		
		<div v-for="(item,index) in componentsList" :key="index">
			<a :name="index"></a>
			<component :is="item" ></component>
		</div>
		<!-- <img style="width: 600px;" src="static/img/carousel-1.jpg"> -->
	</div>
</template>

<script>
import WindowOnresize from '@/components/WindowOnresize.vue';
import TraceNav from '@/components/TraceNav.vue';
import Cover from '@/components/Cover.vue';
import Nav from '@/components/Nav.vue';
import ScrollEffect from '@/components/ScrollEffect.vue';
import StreamerBtm from '@/components/StreamerBtm.vue';
import Carousel from '@/components/Carousel.vue';
import TargetCollapseMenu from '@/components/TargetCollapseMenu.vue';
import Aside from '@/components/aside/Aside.vue';
// 富文本编辑器
// import EditorMd from '@/components/editor/EditorMd.vue';
import CarouselMap from '@/components/carouselMap/CarouselMap.vue';

export default {
  name: 'myComponents',
  data(){
	  return {
		  componentsList: {
			  Cover,Nav,ScrollEffect,StreamerBtm,Carousel,TargetCollapseMenu,Aside,CarouselMap
		  },
		  traceData: {
			  'Cover': '自适应图片',
			  'Nav': '响应式导航栏',
			  'ScrollEffect': 'CSS滚筒效果',
			  'StreamerBtm': '流光按钮',
			  'Carousel': '轮播图',
			  'TargetCollapseMenu': 'target折叠菜单',
			  'Aside': '侧边栏列表',
			  'CarouselMap': '轮播图1'
		  }
	  }
  },
  components: {
	WindowOnresize,
	Cover,
	Nav,
	ScrollEffect,
	StreamerBtm,
	TraceNav,
	Carousel,
	TargetCollapseMenu,
	Aside,
	CarouselMap
  },
  created(){
  }
}
</script>

<style>
@import '../assets/css/common.css';

</style>
