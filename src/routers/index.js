import Vue from 'vue';
import VueRouter from 'vue-router';
import TestRouter from '@/views/testRouter'
import MyComponents from '@/views/myComponents.vue'
import PersonalInformation from '@/views/personalInformation.vue'
import Picture from '@/views/picture.vue'
import Dynamic from '@/views/dynamic.vue'

Vue.use(VueRouter);

const routes = [
  {
  	path: '/testRouter',
  	component: TestRouter
  },
  {
  	path: '/picture',
  	component: Picture
  },
  {
  	path: '/myComponents',
  	component: MyComponents
  },
  {
  	path: '/personalInformation',
  	component: PersonalInformation
  },
  {
  	path: '/dynamic',
  	component: Dynamic
  },
  {
	  path: '/',
	  component: PersonalInformation
  }
]

export default new VueRouter({
	mode: 'history',
	routes
})