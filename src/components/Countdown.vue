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
		// 拥有节日的月份
		haveFestivalMonth: [1,2,4,5,6,9,10],
		countdownDate: {
			1:[
				{type: 0,month: 1,day: 1,name: '元旦节'}
			],
			2:[
				{
					type: 1,
					2021: {month: 2,day: 12,name: '春节'},
					2022: {month: 2,day: 26,name: '春节'}
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
	  let {nextFestivalMonth,nextFestivalDay,nextFestivalName} = this.getNextFestival();

	  let remain = 0;
	  if(nextFestivalMonth == 1 || nextFestivalDay == 1){
		  // 表示今年胡节假日已过完 计算1月1日
		  remain = this.remainDay(currentTime.month,currentTime.day,12,31,currentTime.year);
	  }else{
		  remain = this.remainDay(currentTime.month,currentTime.day,nextFestivalMonth,nextFestivalDay,currentTime.year);
	  }
	  this.remain = remain;
	  this.name = nextFestivalName;
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
	  },
	  // 获取下一个节日 月份和号数
	  getNextFestival(){
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth()+1;
		let day = date.getDate();
		// 下一个节日的月和号
		let nextFestivalDay = undefined;
		let nextFestivalMonth = undefined;
		let nextFestivalName = undefined;

		  // this.haveFestivalMonth
		if(this.countdownDate[month] !== undefined){
			  // 表示当月拥有节日
			let countdownDateItem = this.countdownDate[month];
			for(let item of countdownDateItem){
				if(item.type == 0){
					// 表示国历的节日
					if(day < item.day){
						nextFestivalDay = item.day;
						nextFestivalMonth = item.month;
						nextFestivalName = item.name;
						break;
					}
				}
				if(item.type == 1){
					// 表示农历的节日
					if(day < item[year].day){
						nextFestivalDay = item[year].day;
						nextFestivalMonth = item[year].month;
						nextFestivalName = item[year].name;
						break;
					}
				}
			}
		}
		if(nextFestivalMonth === undefined){
			nextFestivalMonth = this.getNextFestivalMonth(month);
			let item = this.countdownDate[nextFestivalMonth][0];
			if(item.type == 0){
				// 表示国历的节日
				nextFestivalDay = item.day;
				nextFestivalName = item.name;
			}
			if(item.type == 1){
				// 表示农历的节日
				nextFestivalDay = item[year].day;
				nextFestivalName = item[year].name;
			}
		}
		return {nextFestivalMonth,nextFestivalDay,nextFestivalName}
	  },
	  // 获取当月的下一个节日的月份
	  getNextFestivalMonth(month){
		  let haveFestivalMonth = this.haveFestivalMonth;
		  let nextMonth = undefined;
		  haveFestivalMonth.forEach(element => {
			  if(month < element){
				  if(nextMonth === undefined){
					nextMonth = element;
				  }
			  }
		  });
		  nextMonth === undefined ? nextMonth = 1 : '';
		  return nextMonth;
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
