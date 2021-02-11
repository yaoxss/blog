<!--
 * @Author: yaoxs
 * @Date: 2021-01-17 21:29:55
 * @LastEditTime: 2021-02-11 11:59:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueComponents\my-components\src\components\carouselMap\CarouselMap.vue
-->
<template>
	<div class="box">
		<img class="img" ref="bannerImg"  :src="imgPath + imgName">
        <img ref="getHeightImg" style="position:absolute; width:100%;visibility:hidden;" :src="imgPath + 'banner1.jpg'">
        <div class="box-btm">
            <div class="num-box">
                <span @click="switchBannerClick(0)" >1</span>
                <span @click="switchBannerClick(1)" >2</span>
                <span @click="switchBannerClick(2)" >3</span>
                <span @click="switchBannerClick(3)" >4</span>
                <span @click="switchBannerClick(4)" >5</span>
            </div>
            <div class="rectangle-box">
                <div class="item" ref="imgItem" :style="{'left': imgItemLeft+'px'}" ></div>
            </div>
        </div>
	</div>
</template>

<script>
	export default{
		name: 'CarouselMap',
		data(){
			return {
                imgArray: ['banner1','banner2','banner3','banner4','banner5'],
                imgPath: 'static/img/',
                imgName: 'banner1.jpg',
                imgItem: 0,
                startZoomSize: '120%',
                requestAnimationID: undefined,
                AddCutControl: 'add',
                imgItemLeft: 0
            }
		},
		created(){
			
		},
		mounted(){
            // 这里没办法及时的获取this.$refs.getHeightImg.offsetHeight高度，所以采用了setTimeout方法
            setTimeout(() => {
                // 获取浏览器页面的高度window.innerHeight
                let innerHeight = window.innerHeight;
                let height = this.$refs.getHeightImg.offsetHeight;
                if(height < innerHeight){
                    height = height - (height*0.2);
                    this.$refs.bannerImg.parentElement.style.height = height + 'px';
                }
            },300);
            
            this.switchBannerClick(0);
            setInterval(this.switchBannerClick,6000);
		},
		methods: {
			switchBannerClick(id){
                if(id === undefined){
                    this.AddCutControl == 'add' ? this.imgItem = this.imgItem+1 : this.imgItem = this.imgItem-1;
                    id = this.imgItem;
                }else{
                    this.imgItem = id;
                }
                this.imgItem <= 0 ? this.AddCutControl = 'add' : '';
                this.imgItem >= 4 ? this.AddCutControl = 'cut' : '';
                let imgName = this.imgArray[id];
                this.imgName = imgName + '.jpg';
                this.imgItemLeft = id * 80;
                // 这样子写有时报错
                // this.$refs.imgItem.style.left = (id * 80) + 'px';
                // 动画执行效果(看起来感觉没有CSS的animation动画属性那么流畅)
                if(this.requestAnimationID != undefined){
                    cancelAnimationFrame(this.requestAnimationID);
                }
                this.startZoomSize = '120%';
                this.$refs.bannerImg.style.width = this.startZoomSize;
                this.requestAnimationID = requestAnimationFrame(this.bannerZoomAnimation);
            },
            // 轮播图缩放动画
            bannerZoomAnimation(){
                this.startZoomSize = parseFloat(this.startZoomSize, 10) - 0.08;
                let zoomSize = this.startZoomSize;
                this.$refs.bannerImg.style.width = zoomSize + "%"; 
                // console.log(this.$refs.bannerImg.style.width);
                // 如果宽度小于100.09不再执行动画
                if (parseInt(zoomSize) > 100.09) { 
                    this.requestAnimationID = requestAnimationFrame(this.bannerZoomAnimation); 
                }else{
                    cancelAnimationFrame(this.requestAnimationID);
                }
            }
        }
	}
</script>

<style scoped="scoped">
.box{
    width: 100%;
    background-color: aqua;
    height: calc(100vh);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.box .img{
    /* animation */
    width: 110%;
}
.box .box-btm{
    position: absolute;
    bottom: 40px;
}
.box .box-btm .num-box{
    width: 400px;
    border-bottom: 4px solid #999;
    /* display: flex;
    justify-content: space-around; */
}
.box .box-btm .num-box span{
    display: inline-block;
    line-height: 28px;
    color: azure;
    width: 28px;
    height: 28px;
    margin: 0 26px;
    text-align: center;
    border-radius: 50%;
    margin-bottom: 8px;
}
.box .box-btm .num-box span:hover{
    background-color: rgba(225, 225, 225, 0.5);
    /* background-color: rosybrown; */
}
.box .box-btm .rectangle-box{
    position: relative;
    top: -3px;
}
.box .box-btm .rectangle-box div{
    width: 30px;
    height: 2px;
    margin-left: 25px;
    background-color: azure;
}
.box .box-btm .rectangle-box .item{
    position: relative;
    left: 0;
    transition: all 1000ms ease-out;
    /* left: 80px; */
}
</style>
