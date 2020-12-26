var obj = {
	getCurrentTime(join1,join2){
		let joinA = join1 === undefined ? '-' : join1;
		let joinB = join2 === undefined ? ':' : join2;
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth()+1;
		let day = date.getDate();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		let obj = {
			year,
			month,
			day,
			hours,
			minutes,
			seconds,
			date: year + joinA + month + joinA + day,
			time: hours + joinB + minutes + joinB + seconds
		}
		return obj;
	},
	// 获取某一月份的天数
	getMonthDays(year,month){
	  var thisDate = new Date(year,month,0); //当天数为0 js自动处理为上一月的最后一天
	  return thisDate.getDate();
	}
}
export default obj; 