<template>
	<div></div>
</template>

<script>
	import Bus from '../api/common/Bus.js';
	
	export default {
	  name: 'WindowOnresize',
	  data(){
		  return {
			  navMenuList: 'block'
		  }
	  },
	  mounted: function(){
		  // 监听浏览器重置大小事件
		  window.onresize = () => {
			  Bus.$emit("coverInnerWidth", document.body.scrollWidth);
			  if(window.innerWidth >= 1201){
				  // 组件Nav 
				  Bus.$emit("navMenuListDisplay", "none");
				  // this.$refs.menuList.style.display = "none";
			  }
		  }
	  },
	  methods:{

	  }
	}
</script>

<style>
</style>
