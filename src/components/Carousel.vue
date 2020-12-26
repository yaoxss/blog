<template>
	<!-- 轮播图 -->
	<div class="box" ref="box" >
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
			<div id="showImg">
				<img class="animation-img" ref="showImg" :src="'static/img/carousel-'+showImg+'.jpg'">
			</div>
			<ul id="list" ref="list">
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
			selectedItem: 0,
			showImg: 1,
			clientWidth: 0
		}
	},
	// 组件挂载结束生命周期
	mounted(){
		// 设置#wrap和img的宽度
		this.clientWidth = this.$refs.box.clientWidth;
		let clientWidth = this.clientWidth;
		// console.log(this.$refs.showImg.style.width);
		this.$refs.showImg.style.width = clientWidth + 'px';
		this.$refs.wrap.style.width = clientWidth * 6;
		this.$refs.list.getElementsByTagName("img").forEach(function(domObj){
			domObj.style.width = clientWidth + 'px';
		});
		// console.log(this.$refs.wrap.clientWidth);
	},
	methods: {
		itemBtm(direction){
			// scrollLeft设置值与获取值出现近似值的
			// this.$refs.list.classList = [];
			// this.$refs.showImg.style.opacity = 0;
			// let scrollPosition = Math.ceil(this.$refs.wrap.scrollLeft);
			// if(direction == 'left' && this.selectedItem != 0){
			// 	--this.selectedItem;
			// 	scrollPosition -= this.clientWidth;
			// 	// this.$refs.list.classList.add('list-animation-left'+this.selectedItem);
			// }
			// if(direction == 'right' && this.selectedItem != 4 ){
			// 	++this.selectedItem;
			// 	scrollPosition += this.clientWidth;
			// 	// this.$refs.list.classList.add('list-animation-right'+this.selectedItem);
			// }
			// this.$refs.wrap.scrollLeft = scrollPosition
			// this.showImg = this.selectedItem+1;
			// console.log(scrollPosition);
			// console.log(this.$refs.wrap.scrollLeft);
			// // this.showImg = this.selectedItem+1;
			// this.operateSleectItemBox(this.selectedItem);
			this.$refs.showImg.style.opacity = 1;
			if(direction == 'left' && this.selectedItem != 0){
				--this.showImg;
			}
			if(direction == 'right' && this.selectedItem != 4 ){
				++this.showImg
			}
			this.operateSleectItemBox(this.showImg - 1);
		},
		sleectItemBtm(num){
			// this.$refs.list.classList.add('list-animation-left'+num);
			let showImg = this.$refs.showImg;
			showImg.style.opacity = 1;
			this.showImg = num+1;
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
		width: 100%;
		max-width:600px;
		/* height:400px; */
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
/* 		width:600px;
		height:400px; */
		position:relative;
		overflow: hidden;
		transition: all 400ms ease-out;
	}
	#showImg{
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 3;
	}
	#showImg img{
		/* width: 600px; */
		opacity: 0;
	}
	.animation-img{
		/* transition: all 500ms; */
	}
	#list{
		/* position:absolute;
		left:0;
		top:0;
		padding:0;
		margin:0; */
		/* width:3600px; */
		display: flex;
	}
	#list li{
		list-style:none;
		text-align: center;
		/* font:normal 50px/2.5em '微软雅黑'; */
	}
	#list li img{
		/* width: 600px; */
	}
	.list-animation-left0{
		animation: move-left0 2s ease both;
	}
	.list-animation-left1{
		animation: move-left1 2s ease both;
	}
	.list-animation-left2{
		animation: move-left2 2s ease both;
	}
	.list-animation-left3{
		animation: move-left3 2s ease both;
	}
	.list-animation-right1{
		animation: move-right1 2s ease both;
	}
	.list-animation-right2{
		animation: move-right2 2s ease both;
	}
	.list-animation-right3{
		animation: move-right3 2s ease both;
	}
	.list-animation-right4{
		animation: move-right4 2s ease both;
	}
	@-webkit-keyframes move-left0{
		0%{
			left: -600px;
		}
		100%{
			left: 0px;
		}
	}
	@-webkit-keyframes move-left1{
		0%{
			left: -1200px;
		}
		100%{
			left: -600px;
		}
	}
	@-webkit-keyframes move-left2{
		0%{
			left: -1800px;
		}
		100%{
			left: -1200px;
		}
	}
	@-webkit-keyframes move-left3{
		0%{
			left: -2400px;
		}
		100%{
			left: -1800px;
		}
	}
	@-webkit-keyframes move-right4{
		0%{
			left: -1800px;
		}
		100%{
			left: -2400px;
		}
	}
	@-webkit-keyframes move-right3{
		0%{
			left: -1200px;
		}
		100%{
			left: -1800px;
		}
	}
	@-webkit-keyframes move-right2{
		0%{
			left: -600px;
		}
		100%{
			left: -1200px;
		}
	}
	@-webkit-keyframes move-right1{
		0%{
			left: 0px;
		}
		100%{
			left: -600px;
		}
	}
/* 	#wrap:hover #list{
		-webkit-animation-play-state:paused;
	} */
</style>
