<template>
	<div v-show="isShow" class="mask-layer">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	  name: 'maskLayer',
	  props: {
	 //    isShow: {
		// 	type: Boolean,
		// 	default: false
		// }
	  },
	  data(){
		  return {
			  isShow: false
		  }
	  },
	  methods: {
		  closeMessage(){
			  this.isShow = false;
		  }
	  }
	}
</script>

<style scoped="scoped">
	.mask-layer{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.3);
		z-index: 999;
	}
</style>
