<template>
	<div>
		<ul class="history-recording">
			<li class="title" @click="historyBox" >历史记录</li>
			<li class="history-box" v-show="historyBoxShow" >
				<ul>
					<li class="item" v-for="(item,index) in historyRecordingList" v-bind:key="index" @click="historyGoTo(item.clickIdArray)" >{{item.title}}</li>
				</ul>
			</li>
		</ul>
		<ul class="aside-list-box" ref="asideList" >
			<li v-for="(item,index) in asideList" v-bind:key = "index" >
				<p class="main-title" :id="'aside_'+item.id" @click.prevent="mainDropDown($event,{clickIdArray:item.clickIdArray,title:item.title,filePath: item.filePath})">
					<span class="title">{{item.title}}</span>
					<span class="iconfont icon-arrow-right-1"></span>
				</p>
				<ul v-if="item.children" class="sub-ul" >
					<AsideItem :asideChildren="item.children" @secondaryDropDown="secondaryDropDown" ></AsideItem>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	import AsideItem from './AsideItem.vue';
	import Bus from '@/api/common/Bus.js';
	import RequestObject from '@/function/requestFunction.js';
	import {MD_FILE_PATH} from '@/config/pathConfig.js';
	
	export default{
		name: 'Aside',
		props: {
			asideList: {
				type: Array,
				default: function(){
					return [
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
					]
				}
			},
			boxIndexRightDom: {}
		},
		data(){
			return {
				historyRecordingList: [],
				isHistoryRecording: true,
				historyBoxShow: false 
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

				if(dataObj.filePath != undefined){
					// 说明需要加载md文件内容
					let mdContent = RequestObject.getMd(MD_FILE_PATH + dataObj.filePath);
					mdContent.then((data) => {
						Bus.$emit("getMdContent", data);
					});
					if(this.boxIndexRightDom.querySelectorAll("a[name="+dataObj.title+"]").length != 0 ){
						let currentParentDomPosition = this.boxIndexRightDom.querySelectorAll("a[name="+dataObj.title+"]")[0].parentNode.offsetTop;
						this.boxIndexRightDom.scrollTop = currentParentDomPosition - 100;
					}
				}else{
					// 使用描点的做法貌似不行，只能采用滚动的做法
					// this.$router.push({path: this.$route.path + '#' + dataObj.title});
					// this.$router.push({path: this.$route.path + '#b'});
					let currentParentDomPosition = this.boxIndexRightDom.querySelectorAll("a[name="+dataObj.title+"]")[0].parentNode.offsetTop;
					this.boxIndexRightDom.scrollTop = currentParentDomPosition - 100;
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
			},
			historyBox(){
				this.historyBoxShow = !this.historyBoxShow;
			}
		},
		components: {
			AsideItem
		}
	}
</script>

<style scoped="scoped">
	.history-recording{
		display: flex;
		position: fixed;
		right: 0;
		top: 35%;
		height: 30%;
	}
	.history-recording .title{
		line-height: 24px;
		font-size: 16px;
		writing-mode:vertical-lr;
		text-align: center;
		color: aliceblue;
		border-radius: 8px 0 0 8px;
		background-color: #ccc;
	}
	.history-recording .history-box{
		background-color: #ccc;
		border-left: 1px solid white;
		padding-left: 5px;
		overflow-y: auto;
		min-width: 200px;
	}
	.history-recording ul .item{
		font-size: 16px;
		padding: 5px 0;
	}
	.aside-list-box{
		margin-left: 5px;
		color: #4f5959;
	}
	.aside-list-box > li{
		padding-top: 5px;
	}
	.aside-list-box ul{
		margin-left: 20px;
	}
	.aside-list-box .main-title + .sub-ul{
		display: none;
	}
	.main-title .iconfont{
		margin-left: 15px;
	}

</style>
