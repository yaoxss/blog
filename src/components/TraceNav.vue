<template>
	<div>
		<ul>
			<li>
				<router-link to="/personalInformation">My Dome</router-link>
				<!-- <a :href="'127.0.0.1:8080'">cc</a> -->
			</li>
			<li v-for="(item,index) in traceData" v-bind:key="item">
				<a :href="'#'+index">{{item}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'TraceNav',
		data(){
			return {
				'host': window.location.host
			}
		},
		props: ["traceData"]
	}
</script>

<style scoped="scoped">
	div{
		position: fixed;
		right: 0;
		top: 50%;
		transform: translate(0%,-50%);
		z-index: 100;
	}
	div ul li{
		background-color: white;
		font-size: 24px;
		padding: 4px 6px;
		text-align: center;
		margin-bottom: 2px;
		/* color: #000000; */
	}
	div ul li a{
		color: #000000;
	}
</style>
