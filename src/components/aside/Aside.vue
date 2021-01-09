<template>
	<div>
		<ul class="history-recording">
			<li class="title">历史记录</li>
			<li class="item" v-for="(item,index) in historyRecordingList" v-bind:key="index" @click="historyGoTo(item.clickIdArray)" >{{item.title}}</li>
		</ul>
		<ul ref="asideList" >
			<li v-for="(item,index) in asideList" v-bind:key = "index" >
				<p class="main-title" :id="'aside_'+item.id" @click.prevent="mainDropDown($event,{clickIdArray:item.clickIdArray,title:item.title})">
					<span class="title">{{item.title}}</span>
					<span class="iconfont icon-arrow-right-1"></span>
				</p>
				<ul v-if="item.children" >
					<AsideItem :asideChildren="item.children" @secondaryDropDown="secondaryDropDown" ></AsideItem>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	import AsideItem from './AsideItem.vue'
	
	export default{
		name: 'Aside',
		data(){
			return {
				asideList: [
					{
						id: 1,
						title: '一级标题',
						clickIdArray: [1],
						children: [
							{
								id: 2,
								title: '二级标题',
								clickIdArray: [1,2],
								children: [
									{
										id: 3,
										title: '三级标题',
										clickIdArray: [1,2,3],
									},
									{
										id: 4,
										title: '三级标题',
										clickIdArray: [1,2,4],
									},
									{
										id: 5,
										title: '三级标题',
										clickIdArray: [1,2,5],
									}
								]
							},
							{
								id:6, 
								title: '二级标题',
								clickIdArray: [1,6],
								children: [
									{
										id: 8,
										title: '三级标题',
										clickIdArray: [1,6,8]
									}
								]
							},
							{id:7, title: '二级标题',clickIdArray: [1,7]},
						]
					}
				],
				historyRecordingList: [],
				isHistoryRecording: true
			}
		},
		methods: {
			mainDropDown(event,dataObj){
				let ul = event.currentTarget.nextSibling;
				let title = event.currentTarget.querySelectorAll('.title')[0];
				let icon = event.currentTarget.querySelectorAll('.iconfont')[0];
				if(ul.style.display == "block"){
					icon.classList.remove('icon-arrow-down-1');
					icon.classList.add('icon-arrow-right-1');
					icon.style.color = "#4f5959";
					title.style.color = "#4f5959";
				}else{
					icon.classList.remove('icon-arrow-right-1');
					icon.classList.add('icon-arrow-down-1');
					icon.style.color = "#42b983";
					title.style.color = "#42b983";
				}
				// 没有兄弟节点ul跳过，避免报错 
				if(ul != null){
					if(ul.style.display == "none" || ul.style.display == ''){
						ul.style.display = "block";
					}else{
						if(this.isHistoryRecording == true){
							ul.style.display = "none";
						}
					}
				}
				// 历史记录
				if(this.isHistoryRecording == true){
					// 说明是单个
					if(ul != null){
						// 展开做历史记录，隐藏不做
						ul.style.display == "block" ? this.historyRecordingList.push(dataObj):'';
					}else{
						// 这里因为子模板使用了递归，所以不能直接在子模版里面使用$parent进行push
						this.historyRecordingList.push(dataObj);
					}
				}
				
				this.isHistoryRecording = true;
			},
			secondaryDropDown(event,dataObj){
				let currentP = event.currentTarget;
				let ul = currentP.nextSibling;
				let liList = currentP.parentElement.parentNode.children;
				for(let li of liList){
					li.getElementsByTagName('p')[0].style.color = "#4f5959";
					if(li.getElementsByTagName('ul').length != 0){
						if(ul != li.getElementsByTagName('ul')[0]){
							li.getElementsByTagName('ul')[0].style.display = "none";
						}
					}
					// console.log(li.getElementsByTagName('ul'));
				}
				currentP.style.color = "#42b983";
				// 没有兄弟节点ul跳过，避免报错
				if(ul != null && ul.style != undefined){
					if(ul.style.display == "none" || ul.style.display == ''){
						ul.style.display = "block";
					}else{
						ul.style.display = "none";
					}
				}
				if(this.isHistoryRecording == true){
					// 这里因为子模板使用了递归，所以不能直接在子模版里面使用$parent进行push
					this.historyRecordingList.push(dataObj);
				}
				this.isHistoryRecording = true;
			},
			historyGoTo(clickIdArray){
				for(let item of clickIdArray){
					setTimeout(()=>{
						this.isHistoryRecording = false;
						document.getElementById('aside_'+item).click();
					},300);
				}
			}
		},
		components: {
			AsideItem
		}
	}
</script>

<style scoped="scoped">
	.history-recording .title{
		font-weight: 600;
		line-height: 24px;
		font-size: 16px;
	}
	.history-recording .item{
		font-size: 16spx;
		padding: 5px 20px;
	}
	ul{
		margin-left: 20px;
		color: #4f5959;
	}
	.main-title + ul{
		display: none;
	}
	.main-title{
		font-size: 18px;
		font-weight: bold;
		padding: 8px 0px;
	}
	.main-title .iconfont{
		margin-left: 15px;
	}

</style>
