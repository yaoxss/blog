<template>
	<!-- 轮播图 -->
	<div class="box">
		<div class="leftItem" @click="itemBtm('left')">
			<span class="iconfont icon-black"></span>
		</div>
		<div class="rightItem" @click="itemBtm('right')">
			<span class="iconfont icon-black"></span>
		</div>
		<div class="sleectItemBox" ref="sleectItemBox" >
			<div class="item selected" @click="sleectItemBtm(0)"></div>
			<div class="item" @click="sleectItemBtm(1)"></div>
			<div class="item" @click="sleectItemBtm(2)"></div>
			<div class="item" @click="sleectItemBtm(3)"></div>
			<div class="item" @click="sleectItemBtm(4)"></div>
		</div>
		<div id="wrap" ref="wrap">
			<ul id="list">
			    <li><img src="static/img/carousel-1.jpg"></li>
			    <li><img src="static/img/carousel-2.jpg"></li>
			    <li><img src="static/img/carousel-3.jpg"></li>
			    <li><img src="static/img/carousel-4.jpg"></li>
			    <li><img src="static/img/carousel-5.jpg"></li>
			</ul>
		</div>		
	</div>
</template>

<script>
export default{
	name: 'carousel',
	data(){
		return {
			selectedItem: 0
		}
	},
	methods: {
		itemBtm(direction){
			let positionLeft = Math.ceil(this.$refs.wrap.scrollLeft);
			if(direction == 'left' && positionLeft > 0){
				--this.selectedItem;
				positionLeft -= 600;
				this.$refs.wrap.scrollLeft  = positionLeft;
			}
			if(direction == 'right' && (positionLeft >= 0 && positionLeft <= 1800) ){
				++this.selectedItem;
				positionLeft = positionLeft + 600;
				this.$refs.wrap.scrollLeft  = positionLeft;
			}
			this.operateSleectItemBox(this.selectedItem);
		},
		sleectItemBtm(num){
			this.$refs.wrap.scrollLeft  = num * 600;
			this.operateSleectItemBox(num);
		},
		operateSleectItemBox(num){
			let childNodes = this.$refs.sleectItemBox.childNodes;
			for(let i = 0; i<childNodes.length; i++) {
				childNodes[i].classList.remove('selected');
			}
			childNodes[num].classList.add('selected');
			this.selectedItem = num;
		}
	}
}
</script>

<style scoped="scoped">
	@-webkit-keyframes move{
		0%{
			left: -2400px;
		}
		50%{
			left: 0;
		}
		100%{
			left: -2400px;
		}
	}
	.box{
		width:600px;
		height:400px;
		position:relative;
		margin:100px auto;
	}
	.box .leftItem{
		padding: 20px;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(0%,-50%);
		background-color: #fff;
		opacity:0.3;
		z-index: 999;
	}
	.box .rightItem{
		padding: 20px;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translate(0%,-50%) rotate(180deg);
		background-color: #fff;
		opacity:0.3;
		z-index: 999;
	}
	.box .sleectItemBox{
		position: absolute;
		display: flex;
		transform: translate(-50%,0%);
		bottom: 20px;
		left: 50%;
		z-index: 6;
		opacity:0.3;
		z-index: 999;
	}
	.box .sleectItemBox .item{
		margin: 5px;
		width: 50px;
		height: 10px;
		background-color: #fff;
		border-radius: 5px;
	}
	.box .sleectItemBox .selected{
		background-color: #5BC2EB;
	}
	#wrap{
		width:600px;
		height:400px;
		position:relative;
		overflow: hidden;
		transition: all 400ms ease-out;
	}
	
	#list{
		position:absolute;
		left:0;
		top:0;
		padding:0;
		margin:0;
		width:3600px;
		display: flex;
		/* transition: all 400ms ease-out; */
		/* -webkit-animation:30s move infinite linear; */
	}
	#list li{
		list-style:none;
		text-align: center;
		/* font:normal 50px/2.5em '微软雅黑'; */
	}
	#list li img{
		width: 600px;
	}
	#wrap:hover #list{
		-webkit-animation-play-state:paused;
	}
</style>