/*gnb 드랍다운 메뉴 스크립트*/
$('.gnbBtn').hover(function(){
	$(this).children('.gnbDrop').show();
}, function(){
	$(this).children('.gnbDrop').hide();
});

/*파라미터 get 스크립트*/
function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*카테고리 변경 스크립트*/
function chgCate(button, num){
	if($(button).hasClass('breadCrumb-on')){
		return;
	}else{
		$('.content').hide();
		$('.content').eq(num).show();	
		$('.breadCrumb-on').removeClass('breadCrumb-on');
		$('.breadCrumb-btn').eq(num).addClass('breadCrumb-on');
	}		
}


/*페이지 이동 스크립트*/
function goMenu(page, num){
	event.stopPropagation();
	var str = '';
	if(page == 'HOME'){
		str = './home';
	}else if(page == 'noticeboard'){
		str = './noticeboard?cate=' + num;
	}else if(page == 'approval'){
		str = './approval?cate=' + num;
	}else if(page == 'attendance'){
		str = './attendance?cate=' + num;
	}	
	location.href = str;
}

const _day = document.getElementById("todaydate");
const _clock = document.getElementById("todayclock");



function getClock(){
	date = new Date();
	year = date.getFullYear();
	month = date.getMonth() + 1;
	day = date.getDate();
	dayy = date.getDay();
	cd = changeday(dayy);
	
	hours = String(date.getHours()).padStart(2,"0");
	Min = String(date.getMinutes()).padStart(2,"0");
	Second = String(date.getSeconds()).padStart(2,"0");
	
	_day.innerHTML = year + "." + month + "." + day + "  "+ cd;
	_clock.innerHTML = hours + ":" + Min + ":" + Second;
   
}

function changeday(dayy){
	var cd = "";
	if (dayy ==0)
		cd = "Sun.";
	else if(dayy==1)
		cd = "Mon.";
	else if(dayy==2)
		cd = "Tue.";
	else if(dayy==3)
		cd = "Wed.";
	else if(dayy==4)
		cd = "Thu.";
	else if(dayy==5)
		cd = "Fri.";
	else if(dayy==6)
		cd = "Sat.";
	
	return cd;
}

getClock();
setInterval(getClock,1000);


/*달력*/

let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

