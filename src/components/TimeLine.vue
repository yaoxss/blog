<template>
	<div class="time-line-box">
		<div class="line"></div>
		<div v-for="item in timeItem" :key="item.year">
			<div class="time-item">
				<div class="row-line">
					<div class="radius"></div>
					<div class="three"></div>
				</div>
				<div class="year">{{item.year}}</div>
				<div class="work-box">
					<div  v-for="workItem in item.workBox" :key="workItem.id" class="work-item">
						{{workItem.company}}({{workItem.position}})
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'timeLine',
		data(){
			return {
				timeItem: [
					{
						year: 2020,
						workBox: [
							{id: 0,company: '广州致讯科技有限公司',position: 'PHP开发工程师'},
							{id: 1,company: '广州讯博科技有限公司',position: 'web前端开发工程师'},
							{id: 2,company: '广州启达人事有限公司',position: 'web前端开发工程师'},
							{id: 3,company: '宝龙泰',position: '测量员'}
						]
					},
					{
						year: 2019,
						workBox: [
							{id: 0,company: '广州致讯科技有限公司',position: 'PHP开发工程师'},
						]
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.time-line-box{
/* 		display: flex;
		justify-content: center; */
		position: relative;
		width: 100%;
		margin-left: 40px;
	}
	.time-line-box .line{
		position: absolute;
		height: 600px;
		width: 6px;
		background-color: #999999;
	}
	.time-line-box .time-item{
/* 		position: absolute;
		top: 60px;
		left: 6px; */
		position: relative;
		padding-top: 30px;
		width:auto; 
		display:inline-block !important; 
		display:inline;
	}
	.time-item .row-line{
		position: relative;
		width: 500px;
		height: 4px;
		background-color: #999999;
	}
	.row-line .radius{
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 10px;
		background-color: white;
		border: 4px solid #666;
		/* transform: translate(-50%,-25%); */
		top: -7px;
		left: -6px;
	}
	.row-line .three{
		width: 0;
		height: 0;
		border-top: 7px solid transparent;
		border-left: 28px solid #666;
		border-bottom: 7px solid transparent;
		position: absolute;
		right: -20px;
		top: -5px;
	}
	.time-item .year{
		position: absolute;
		right: -90px;
		top: 15px;
		font-size: 24px;
	}
	.time-item .work-box{
		margin: 14px;
		margin-left: 28px;
	}
	.time-item .work-box .work-item{
		font-size: 18px;
		line-height: 34px;
		/* font-weight: 600; */
	}
</style>
