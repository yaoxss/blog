<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
	  return {}
  },
  components: {},
  created(){}
}
</script>

<style>
@import './assets/css/common.css';
body,html{
	/* 默认值auto */
	scroll-behavior: smooth;
}
.link-box{
	
}
</style>
