<template>
	<div class="box">
		<router-link to="/myComponents">My Dome</router-link>
		<!-- <a href="javascript;">yaoxs-btm</a> -->
	</div>
</template>

<script>
</script>

<style scoped>
	.box{
		position: relative;
		border-radius: 4px;
		transform: translate(0%,0%);
		text-align: center;
		width:fit-content;
		width:-webkit-fit-content;
		width:-moz-fit-content;
		margin: 0 auto;
		background: linear-gradient(90deg, #F2F9FF, #76A1B4, #F2F9FF);
		background-size: 200%;
		background-position:0% 0;
		animation: bg-animation 3s infinite;
		animation-delay: 0;
	}
	.box::before{
		content: '';
		position: absolute;
		right: -2px;
		bottom: -2px;
		background: linear-gradient(90deg, #F2F9FF, #BEECFA, #76A1B4, #BEECFA, #76A1B4, #BEECFA, #F2F9FF);
		background-size: 400%;
		border-radius: 4px;
		filter: blur(1px);
		z-index: -1;
	}
	a{
		text-decoration: none;
		position: relative;
		font-size: 24px;
		padding: 0 20px;
		line-height: 50px;
		color: #000000;
		/* color: white; */
		/* 转换成大写字母 */
		/* text-transform: uppercase; */
	}
	
/* 	a:hover::before{
		animation: bg-animation 7s infinite;
	}
	a:hover{
		animation: bg-animation 8s infinite;
	} */
	@keyframes bg-animation{
		0%{
			background-position: 200% 0;
		},
		100%{
			background-position: 100% 0;
		}
	}
</style>
