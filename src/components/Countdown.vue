<template>
	<div class="countdown">
		距离
		<span style="color: #BEECFA;" >{{name}}</span>
		还有 
		<span style="color: #BEECFA;" >{{remain}}</span>
		 天
	</div>
</template>

<script>
import commonDate from '@/function/commonDate.js'
export default {
  name: 'countdown',
  data(){
	  return {
		countdownDate: {
			1:[
				{type: 0,month: 1,day: 1,name: '元旦节'}
			],
			2:[
				{
					type: 1,
					2021: {month: 2,day: 12,name: '春节'}
				},
				{
					type: 1,
					2021: {month: 2,day: 26,name: '春节'}
				}
			],
			4:[
				{type: 0,month: 4,day: 4,name: '清明节'}
			],
			5:[
				{type: 0,month: 5,day: 1,name: '劳动节'}
			],
			6:[
				{
					type: 1,
					2021: {month: 6,day: 14,name: '端午节'}
				}
			],
			9:[
				{
					type: 1,
					2021: {month: 9,day: 21,name: '中秋节'}
				}
			],
			10:[
				{type: 0,month: 10,day: 1,name: '国庆节'}
			]
		},
		remain: 0,
		name: '元旦节'
	  }
  },
  components: {},
  created(){
	  let currentTime = commonDate.getCurrentTime();
	  let countdownDate = this.countdownDate;
	 
	  let saveMonth = 1;
	  let saveDay = 1;
	  let saveName = '';
	  outermost: for(let i = 0; i < 12 ; ++i){
		if(currentTime.month + i > 13){
			saveMonth = 0;
			saveDay = 0;
			saveName = '元旦节';
			break outermost; 
		}

		if(countdownDate[currentTime.month + i] !== undefined){
			// 找到的情况下
			saveMonth = currentTime.month + i;
			for(let item in countdownDate[currentTime.month + i]){
				if(countdownDate[currentTime.month + i][item]['type'] == 0){
					if(countdownDate[currentTime.month + i][item]['day'] > currentTime.day){
						saveDay = countdownDate[currentTime.month + i][item]['day'];
						saveName = countdownDate[currentTime.month + i][item]['name'];
						// console.log(1);
						break outermost; 
					}
					if((currentTime.month + i) > currentTime.month && countdownDate[currentTime.month + i][item]['day'] < currentTime.day){
						saveDay = countdownDate[currentTime.month + i][item]['day'];
						saveName = countdownDate[currentTime.month + i][item]['name'];
						// console.log(2);
						break outermost; 
					}
				}else{
					if(countdownDate[currentTime.month + i][item]['day'] > currentTime.day){
						saveDay = countdownDate[currentTime.month + i][item][currentTime.year]['day'];
						saveName = countdownDate[currentTime.month + i][item][currentTime.year]['name'];
						// console.log(3);
						break outermost; 
					}
					if((currentTime.month + i) > currentTime.month && countdownDate[currentTime.month + i][item]['day'] < currentTime.day){
						saveDay = countdownDate[currentTime.month + i][item][currentTime.year]['day'];
						saveName = countdownDate[currentTime.month + i][item][currentTime.year]['name'];
						// console.log(4);
						break outermost; 
					}
				}
			}
		}
	  }
	  let remain = 0;
	  if(saveMonth == 0 || saveDay == 0){
		  // 表示今年胡节假日已过完 计算1月1日
		  remain = this.remainDay(currentTime.month,currentTime.day,12,31,currentTime.year);
	  }else{
		  remain = this.remainDay(currentTime.month,currentTime.day,saveMonth,saveDay,currentTime.year);
	  }
	  this.remain = remain;
	  this.name = saveName;
  },
  methods:{
	  remainDay(monthS,dayS,monthE,dayE,year){
		  if(monthS == monthE){
			  return dayE - dayS;
		  }
		  let remain = 0;
		  for(let a = monthS;a <= monthE; ++a){
			  if(a == monthS){
				  remain = commonDate.getMonthDays(year,monthS) - dayS;
			  }else if(a == monthE){
				  remain += dayE;
			  }else{
				  remain += commonDate.getMonthDays(year,a);
			  }
		  }
		  return remain;
	  }
  }
}
</script>

<style>
	.countdown{
		color: #FFFFFF;
		text-align: center;
	}
</style>
