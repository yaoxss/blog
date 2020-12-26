<template>
  <div id="app">
	<!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<TraceNav :traceData="traceData" ></TraceNav>
	<!-- 监听浏览器窗口变化组件 -->
	<WindowOnresize></WindowOnresize>
	
	<div v-for="(item,index) in componentsList" :key="index">
		<a :name="index"></a>
		<component :is="item" ></component>
	</div>
	<router-link to="/foo">Go to Foo</router-link>
	<router-view></router-view>
	
	<div style="height: 400px;"></div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import WindowOnresize from './components/WindowOnresize.vue';
import TraceNav from './components/TraceNav.vue'
import Cover from './components/Cover.vue';
import Nav from './components/Nav.vue';
import ScrollEffect from './components/ScrollEffect.vue';
import StreamerBtm from './components/StreamerBtm.vue';

export default {
  name: 'App',
  data(){
	  return {
		  componentsList: {
			  Cover,Nav,ScrollEffect,StreamerBtm
		  },
		  traceData: {
			  'Cover': '自适应图片',
			  'Nav': '响应式导航栏',
			  'ScrollEffect': 'CSS滚筒效果',
			  'StreamerBtm': '流光按钮'
		  }
	  }
  },
  components: {
    // HelloWorld,
	WindowOnresize,
	Cover,
	Nav,
	ScrollEffect,
	StreamerBtm,
	TraceNav
  },
  created(){
  }
}
</script>

<style>
@import './assets/css/common.css';
body,html{
	/* 默认值auto */
	scroll-behavior: smooth;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
