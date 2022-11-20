function textchange(type) {
	if(type == 'recentboard'){

		deleteallrow()
		document.getElementsByClassName('Content-title')[0].innerText="최근게시물"
		insertrow("1","10월 문화체육 행사 일정","관리자","2022-10-26","10")
		insertrow("2","독감 예방접종 희망자 모집 안내","관리자","2022-10-11","32")
		insertrow("3","[게시공유][NEWS/미디어] 자동차운반선 2척 수주","관리자","2021-12-20","225")
		insertrow("4","[비공식] 행사 일정 공유","관리자","2020-11-05","317")
		insertrow("5","[재공지] 설계부문 2020년 3분기 임원주관5S (안전/보안 점검) 일정 안내 건","관리자","2020-11-05","525")
		texta();
	}else if(type == 'notice'){
		
		deleteallrow()
		document.getElementsByClassName('Content-title')[0].innerText="공지사항"
		insertrow("1","10월 문화체육 행사 일정","관리자","2022-10-26","10")
		insertrow("2","독감 예방접종 희망자 모집 안내","관리자","2022-10-11","32")
		insertrow("3","[게시공유][NEWS/미디어] 자동차운반선 2척 수주","관리자","2021-12-20","225")
		insertrow("4","[비공식] 행사 일정 공유","관리자","2020-11-05","317")
		insertrow("5","사업장 동복 착용기간 안내","관리자","2020-09-29","52")
		insertrow("6","[공지] 2022년 9월 전사 보안의날 운영(사무동 대청소의 날) 및 전사 보안포털시스템 사용 안내","관리자","2020-10-05","600")
		insertrow("7","추석귀향비 및 격려금 지급계획","관리자","2020-09-02","1000")
		insertrow("8","[필독] FW:  설계 협력사 시차 출퇴근제 확인 절차 관련 협의 사항 공지 건","관리자","2020-08-05","560")
		insertrow("9","[공사일정 변경 공지] RE: [공지] 본관 4층 여자화장실 좌변기 추가 공사 안내 건","관리자","2020-07-05","235")
		insertrow("10","상반기 성과장려금 지급 안내","박남수","2020-07-04","226")
		insertrow("11","[중요] FW: ● (안내/협조요청) 출입증점검계획","박남수","2020-06-08","200")
		insertrow("12","사내 설계협력사 학자금 지원 건","박남수","2019-12-12","100")
		insertrow("13","[필독] 월차 사용 관련","박남수","2019-10-21","345")
		insertrow("14","연장/특근 관련 안내","박남수","2019-10-07","235")
		insertrow("15","[회람]2019년 2/4분기 우수 생산조직 포상 안내","박남수","2019-07-19","335")
	

		
	}else if(type == 'refboard'){		
		deleteallrow()
		document.getElementsByClassName('Content-title')[0].innerText="참고자료"
		insertrow("1","로고","관리자","2020-08-10","100")
		insertrow("2","OJT 지도계획서 및 실습일지","관리자","2020-08-10","110")
		insertrow("3","회사소개서","관리자","2020-08-10","40")
		insertrow("4","탁상명찰","관리자","2020-08-10","30")
		insertrow("5","취업규칙","관리자","2020-08-10","10")
		insertrow("6","비상연락망","관리자","2020-08-10","50")
		
	}
	else{
		window.alert("여기는 아니지")
	}
}

function insertrow(no,title,writer,date,views)
{
	//var table = document.getElementsByClassName("Content").getElementsByClassName("content-board").getElementsByClassName("board_list");

	let table = document.querySelector('table');
	const newrow = table.insertRow();
	newrow.insertCell(0).innerHTML = no
	var cell1 = newrow.insertCell(1)
	cell1.innerHTML = title
	cell1.className = "tit";
	newrow.insertCell(2).innerHTML = writer
	newrow.insertCell(3).innerHTML = date
	newrow.insertCell(4).innerHTML = views

}



function deleteallrow(){

	let table = document.querySelector('table');
	
	//let table = document.getElementById('my-tbody');
	while(table.rows.length!=1){
		table.deleteRow(-1);
	}
	
}
