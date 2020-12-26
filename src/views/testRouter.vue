<template>
	<!-- <div class="title">testRouter</div> -->
	<Carousel></Carousel>
</template>

<script>
	import Carousel from '@/components/Carousel.vue';
	export default {
	  name: 'myComponents',
	  components: {
		Carousel
	  }
	}
</script>

<style scoped="scoped">
	.title{
		margin-top: 35px;
		font-size: 20px;
	}
</style>
