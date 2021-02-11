<!--
 * @Author: your name
 * @Date: 2021-02-07 23:25:39
 * @LastEditTime: 2021-02-10 14:08:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueComponents\my-components\src\components\carouselMap\CaseShow.vue
-->
<template>
	<div class="box">
		<div class="title">案例展示</div>
        <div class="case-show-box">
            <div ref="bigImgBox" class="big-img-box">
                <img src="./img/show-1.jpg">
                <img src="./img/show-2.jpg" alt="">
                <img src="./img/show-3.jpg" alt="">
                <img src="./img/show-4.jpg" alt="">
                <img src="./img/show-5.jpg" alt="">
            </div>
            <div class="small-img-box" ref="smallImgBox">
                <img class="seleted" src="./img/show-1.jpg" alt="">
                <img src="./img/show-2.jpg" alt="">
                <img src="./img/show-3.jpg" alt="">
                <img src="./img/show-4.jpg" alt="">
                <img src="./img/show-5.jpg" alt="">
                <div class="downline" ref="downline"></div>
            </div>
            <div class="desc-box">
                <div class="switch">
                    <div @click="leftClick()">
                        <span class="icon iconfont icon-arrow-left-1"></span>
                    </div>
                    <div @click="rightClick()">
                        <span class="icon iconfont icon-arrow-right-1"></span>
                    </div>
                </div>
                <div class="content">
                    <div class="title-e">{{descContent.titleE}}</div>
                    <div class="title-c">{{descContent.titleC}}</div>
                    <div class="desc">
                        {{descContent.desc}}		
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default{
		name: 'CaseShow',
		data(){
			return {
                bigImgWidth: '',
                imgTotal: 5,
                bigImgItem: 0,
                // 包括margin
                smallImgWidthSize: 96,
                descContent: {
                    titleE: 'Animator',
                    titleC: '广东时装周',
                    desc: '广东时装周以“实用商业、接地气”著称，创办于2001年，目前已成功举办了16届，通过十几年的积淀，时装周已成为泛珠三角地区服装界一年一度最顶级的时尚盛会，中国唯一大规模拉动服装产业链条的行业交流平台，也是广东省内生命力最强、影响面最广、举办历史最长的时装周，在国内服装产业中已树立了最高行业商会的声誉和产业展地位。'
                },
                descContentArray: [
                    {
                        titleE: 'Animator',
                        titleC: '广东时装周',
                        desc: '广东时装周以“实用商业、接地气”著称，创办于2001年，目前已成功举办了16届，通过十几年的积淀，时装周已成为泛珠三角地区服装界一年一度最顶级的时尚盛会，中国唯一大规模拉动服装产业链条的行业交流平台，也是广东省内生命力最强、影响面最广、举办历史最长的时装周，在国内服装产业中已树立了最高行业商会的声誉和产业展地位。'
                    },
                    {
                        titleE: 'Animator',
                        titleC: '上海大众车展',
                        desc: '4月16日，2019第18届上海国际汽车工业展览会开幕。上汽大众将携多款重磅车型亮相国家会展中心（上海）5.1号馆与1号馆。其中包括TeramontCoupe版、全新一代Polo Plus、e-Lavida朗逸电动版与T-Cross等车型。'
                    },
                    {
                        titleE: 'Animator',
                        titleC: '广高集团20周年庆典',
                        desc: '会议高度赞扬公司20年来走过的光辉足迹，和为中国钢铁事业做出的不可磨灭的贡献。也高度评价始初人高德良先生的优秀道德品质和人格魅力。庆典活动由领导讲话，播放两段VCR，主持人读祝福藏头诗，金鼎加油，点生日蜡烛、唱生日快乐歌等几个步骤组成。由相声表演艺术家刘俊杰带队的相声、魔术表演，将整个庆典活动推向高潮。'
                    },
                    {
                        titleE: 'Animator',
                        titleC: 'vivo/云集 战略签约发布会',
                        desc: 'vivo定于6月12日晚19:30，在上海举行旗舰新品发布会，会上，vivo将会推出vivo NEX手机，据悉，vivo NEX的屏占比将会进一步突破，有望成为迄今屏占比最高的量产手机。此外，vivo NEX还有升降式前置摄像头、光学屏内指纹等亮点，同时，这款手机也将成为vivo首款骁龙845机型，性能十分强悍。'
                    },
                    {
                        titleE: 'Animator',
                        titleC: '大角鹿瓷砖',
                        desc: '瓷砖好不好，磨磨就知道！6月21日-23日，第六届华夏家博会在辽宁工业展览馆火爆开展，大角鹿展位人气爆棚、签单不断，成功拿下签单量和人气第一名，遥遥领先东鹏等其它瓷砖品牌。'
                    }
                ]
                // imgArray: ['banner1','banner2','banner3','banner4','banner5'],
                // imgPath: 'static/img/',
                // imgName: 'banner1.jpg',
                // startZoomSize: '120%',
                // requestAnimationID: undefined,
                // AddCutControl: 'add'
            }
		},
		created(){
            
        },
		mounted(){
            // console.log(this.$refs.bigImgBox.children[2].offsetLeft);
        },
		methods: {
            leftClick(){
                if(this.bigImgItem - 1 < 0){
                    return '';
                }
                if(this.bigImgWidth == ''){
                    // 在生命周期mounted钩子没有办法拿到宽度
                    this.bigImgWidth = this.$refs.bigImgBox.firstChild.width;
                }
                this.$refs.smallImgBox.children[this.bigImgItem].classList.remove("seleted");
                --this.bigImgItem;
                this.$refs.smallImgBox.children[this.bigImgItem].classList.add("seleted");
                this.descContent = this.descContentArray[this.bigImgItem];
                this.$refs.downline.style.left = this.bigImgItem * this.smallImgWidthSize + 'px';
                this.scrollAnimation(this.$refs.bigImgBox, '-', this.bigImgWidth); 
            },
            rightClick(){
                if(this.bigImgItem + 1 == this.imgTotal){
                    return '';
                }
                if(this.bigImgWidth == ''){
                    // 在生命周期mounted钩子没有办法拿到宽度
                    this.bigImgWidth = this.$refs.bigImgBox.firstChild.width;
                }
                this.$refs.smallImgBox.children[this.bigImgItem].classList.remove("seleted");
                ++this.bigImgItem;
                this.$refs.smallImgBox.children[this.bigImgItem].classList.add("seleted");
                this.$refs.downline.style.left = this.bigImgItem * this.smallImgWidthSize + 'px';
                this.scrollAnimation(this.$refs.bigImgBox, '+', this.bigImgWidth);
                this.descContent = this.descContentArray[this.bigImgItem];            
            },
            scrollAnimation(obj,fign = "+",length){
                // scrollLeft
                function animationCallBack(obj,fign,length){
                    let speed = 30;
                    if(length < 0){
                        return '';
                    }
                    if(fign == "+"){
                        if(speed >= length){
                            obj.scrollLeft += (length + 1);
                            return '';
                        }
                        obj.scrollLeft += speed;
                        requestAnimationFrame(animationCallBack.bind(this,obj,fign,length-speed));
                    }else if(fign == "-"){
                        if(speed >= length){
                            obj.scrollLeft -= (length + 1);
                            return '';
                        }
                        obj.scrollLeft -= speed;
                        requestAnimationFrame(animationCallBack.bind(this,obj,fign,length-speed));
                    }
                }
                requestAnimationFrame(animationCallBack.bind(this,obj,fign,length));
            }
        }
	}
</script>

<style scoped="scoped">
.box{
    width: 100%;
    height: calc(100vh - 40px);
    padding: 20px 0;
}
.box .title{
    font-size: 26px;
    font-weight: 500;
    text-align: center;
}
.box .case-show-box{
    width: 80%;
    margin: 20px auto;
    position: relative;
}
.box .case-show-box .big-img-box{
    height: calc(100vh - 115px);
    display: flex;
    overflow: scroll;
    /* 隐藏滚动条 */
    -ms-overflow-style: none;  /*IE 10+*/
    overflow: -moz-scrollbars-none;  /*Firefox*/
}
/* 隐藏滚动条 谷歌 */
.box .case-show-box .big-img-box::-webkit-scrollbar { 
    width: 0 !important;
    height: 0 !important 
}
.box .case-show-box .big-img-box img{
    width: 100%;
}
.box .case-show-box .small-img-box{
    display: flex;
    position: absolute;
    bottom: 0;
    background-color: rgb(245, 245, 245);
}
.box .case-show-box .small-img-box img{
    width: 90px;
    margin: 7px 3px;
    filter: grayscale(100%);
}
.box .case-show-box .small-img-box .seleted{
    filter: grayscale(0%);
}
.box .case-show-box .small-img-box .downline{
    width: 90px;
    height: 2px;
    margin: 0 3px;
    background-color: gold;
    position: absolute;
    bottom: 2px;
}
.box .desc-box{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 350px;
}
.box .desc-box .switch{
    display: flex;
    justify-content: flex-end;
}
.box .desc-box .switch div{
    background-color: #493e56;
    color: rgb(245, 245, 245);
    padding: 5px 8px;
}
.box .desc-box .switch div:first-child{
    margin-right: 4px;
}
.box .desc-box .content{
    background-color: #493e56;
    padding: 15px;
    font-size: 14px;
    line-height: 20px;
}
.box .desc-box .title-e{
    color: gold;
}
.box .desc-box .title-c{
    color: gold;
}
.box .desc-box .desc{
    text-indent: 24px;
    font-size: 12px;
    color: white;
}
</style>
