<template>
    <div class="index">
        <div class="works-box">
            <div class="img-box">
                <router-link to="/photo-studio">
                    <img src="/static/img/works.jpg" alt="">
                </router-link>
            </div>
            <router-link to="/photo-studio">
                <a href="#">照相馆</a>
            </router-link>
            <div class="desc">
                <p>练手的项目............</p>
            </div>
        </div>
    </div>
</template>

<script>
// import MessageBox from '@/components/MessageBox.vue';

export default {
  name: 'worksIndex',
  data(){
	  return {}
  },
  components: {},
  created(){},
  methods:{}
}
</script>

<style scoped="scoped">
    .index{
        width: 1024px;
        margin: 0 auto;
    }
    .works-box{
        width: 300px;
        margin: 20px 0;
    }
    .works-box .img-box a{
        display: block;
    }
    .works-box .img-box a img{
        width: 100%;
    }
    .works-box .title{
        /* text-align: left; */
        border-left: 3px solid green;
        margin: 3px 0;
        padding-left: 2px;
        font-size: 16px;
        /* line-height: 24px; */
    }
    .works-box .desc{
        font-size: 15px;
        color: #666;
    }
</style>