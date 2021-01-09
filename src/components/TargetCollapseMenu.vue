<template>
	<div>
		<div class="menu" id="linux" >
			<p><a href="#linux">LINUX</a></p>
			<ul class="submenu">
				<li>Ubunto</li>
				<li>CentOS</li>
				<li>Fedora</li>
			</ul>
		</div>
		<div class="menu" id="windows" >
			<p><a href="#windows">WINDOWS</a></p>
			<ul class="submenu">
				<li>windows XP</li>
				<li>windows 7</li>
				<li>windows 8.1</li>
				<li>windows 10</li>
			</ul>
		</div>
		<div class="menu" id="macos" >
			<p><a href="#macos">MACOS</a></p>
			<ul class="submenu">
				<li>Big Sur</li>
				<li>Catalina</li>
				<li>Mojave</li>
				<li>High Sierra</li>
				<li>Sierra</li>
			</ul>
		</div>
		<div class="menu" id="clone" >
			<p><a href="#clone">CLONE</a></p>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'TargetCollapseMenu'
	}
</script>

<style scoped="scoped">
.menu{
	width: 100%;
	height: 80px;
	overflow: hidden;
	/* https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter */
	/* backdrop-filter:blur(2px); */
}
.menu p{
	margin: 0;
	padding: 0;
	width: 100%;
	height: 80px;
	font-size: 20px;
	line-height: 80px;
	background: rgba(0,151,230,0.6);
}
.menu p a{
	margin-left: 20px;
	color: white;
}
.menu p:hover a{
	color: rgba(194,54,22,0.8);
}
.menu ul{
	width: 100%;
	background: rgba(113,128,147,0.3);
}
.menu ul li{
	color: rgba(220,221,225,0);
	text-shadow: 1px 1px 2px black;
	font-size: 16px;
	height: 50px;
	line-height: 50px;
	padding-left: 15px;
}
#linux:target{
	height: 230px;
}
#windows:target{
	height: 280px;
}
#macos:target{
	height: 330px;
}
</style>
