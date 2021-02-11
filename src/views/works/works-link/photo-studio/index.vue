<!--
 * @Author: your name
 * @Date: 2021-02-07 23:05:08
 * @LastEditTime: 2021-02-08 19:19:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vueComponents\my-components\src\views\works\works-link\photo-studio\index.vue
-->
<template>
    <div class="scrollBox" ref="scrollBox">
        <a href="#CarouselMap" ref="CarouselMap"></a>
        <a name="CarouselMap"></a>
        <CarouselMap />
        <a href="#CaseShow" ref="CaseShow"></a>
        <a name="CaseShow"></a>
        <CaseShow />
    </div>
</template>
<script>
import CarouselMap from '@/components/carouselMap/CarouselMap.vue';
import CaseShow from '@/components/carouselMap/CaseShow.vue';

export default {
  name: 'worksIndex',
  data(){
	  return {
          currentPositionArray: ['CarouselMap','CaseShow'],
          currentPositionKey: 0,
          endPositionKey: 1,
          oldScrollTop: 0,
          scrollEnabled: true
      }
  },
  components: {
      CarouselMap,
      CaseShow
  },
  created(){
    // scrollBy(0,10);
    window.onmousewheel = (e) => {
        let offsetTop = 0;
        if(e.wheelDelta < 0){
            // 向下滚动
            if(this.currentPositionKey < this.endPositionKey){
                ++this.currentPositionKey;
                let currentPositionValue = this.currentPositionArray[this.currentPositionKey];
                offsetTop = this.$refs[currentPositionValue].offsetTop;
                this.scrollAnimation(offsetTop,'+');
                // this.$refs.scrollBox.scrollTop = offsetTop;
            }
        }else{
            // 向上滚动
            if(this.currentPositionKey != 0){
                --this.currentPositionKey;
                let currentPositionValue = this.currentPositionArray[this.currentPositionKey];
                offsetTop = this.$refs[currentPositionValue].offsetTop;
                this.scrollAnimation(offsetTop,'-');
                // this.$refs.scrollBox.scrollTop = offsetTop;
            }
        }   
    }
  },
  mounted(){
      console.log(this.$refs['CaseShow'].offsetTop);
  },
  methods:{
      scrollAnimation(position,fign = "+"){
          let speed = 13;
          function animationAddCallBack(position){
            if(position - this.$refs.scrollBox.scrollTop > speed){
                this.$refs.scrollBox.scrollTop += speed;
                requestAnimationFrame(animationAddCallBack.bind(this,position));
            }else{
                this.$refs.scrollBox.scrollTop += position - this.$refs.scrollBox.scrollTop;
            }
          }
          function animationSubCallBack(position){
            if(this.$refs.scrollBox.scrollTop-position > speed){
                this.$refs.scrollBox.scrollTop -= speed;
                requestAnimationFrame(animationSubCallBack.bind(this,position));
            }else{
                this.$refs.scrollBox.scrollTop -= this.$refs.scrollBox.scrollTop-position;
            }
          }
          if(fign == '+'){
            requestAnimationFrame(animationAddCallBack.bind(this,position));
          }else{
            requestAnimationFrame(animationSubCallBack.bind(this,position));
          }
          
      }
  }
}
</script>
<style scoped>
.scrollBox{
    height: calc(100vh);
    overflow: hidden;
}
</style>