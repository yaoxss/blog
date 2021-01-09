<template>
	<div>
		<li v-for="(item,index) in asideChildren" v-bind:key="index" >
			<p class="secondary-title" :id="'aside_'+item.id" @click.prevent="parentSecondaryDropDown($event,{clickIdArray:item.clickIdArray,title:item.title})" >
				<span>{{item.title}}</span>
			</p>
			<ul v-if="item.children">
				<AsideItem  @secondaryDropDown="parentSecondaryDropDown" :asideChildren="item.children"></AsideItem>
			</ul>			
		</li>
	</div>
</template>

<script>
	export default{
		name: 'AsideItem',
		props: {
			asideChildren: {
				type: Array
			}
		},
		created(){
			console.log(this.asideChildren);
		},
		methods: {
			parentSecondaryDropDown(event,dataObj){
				this.$emit('secondaryDropDown',event,dataObj);
			}
		}
	}
</script>

<style scoped="scoped">
	ul{
		margin-left: 20px;
		color: #4f5959;
	}
	.secondary-title{
		font-size: 14px;
		line-height: 14px;
		padding: 8px 0px;
	}
	.secondary-title + ul{
		display: none;
	}
</style>
