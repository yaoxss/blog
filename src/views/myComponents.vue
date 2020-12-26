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
import TraceNav from '@/components/TraceNav.vue'
import Cover from '@/components/Cover.vue';
import Nav from '@/components/Nav.vue';
import ScrollEffect from '@/components/ScrollEffect.vue';
import StreamerBtm from '@/components/StreamerBtm.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'myComponents',
  data(){
	  return {
		  componentsList: {
			  Cover,Nav,ScrollEffect,StreamerBtm,Carousel
		  },
		  traceData: {
			  'Cover': '自适应图片',
			  'Nav': '响应式导航栏',
			  'ScrollEffect': 'CSS滚筒效果',
			  'StreamerBtm': '流光按钮',
			  'Carousel': '轮播图'
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
	Carousel
  },
  created(){
  }
}
</script>

<style>
@import '../assets/css/common.css';

</style>
