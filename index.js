const timer = document.querySelector('.timer');
const digital = document.querySelector('.dgt-clock');
const analog = document.querySelector('.anlg-clock');

//전역변수로 설정된 timerCount 를 각 함수들에서 1씩 더하고 빼주면서 타이머가 실행됩니다
let timerCount = 0;

//HTML 최대한 안쓰고 연습해보려고 init 함수 실행시 버튼들을 생성하는 함수입니다
function createUi(){
	const buttonCheck = document.querySelector('.timer');
	if (buttonCheck.innerHTML === '') {
		console.log(1);
		const buttonPlus = document.createElement('button');
		const buttonMinus = document.createElement('button');
		const buttonStart = document.createElement('button');
		const timer = document.querySelector('.timer');
		buttonPlus.innerText = '+';
		buttonMinus.innerText = "-";
		buttonStart.innerText = "start";
		buttonPlus.id = 'btnPlus';
		buttonMinus.id = 'btnMinus';
		buttonStart.id = 'btnStart';
		timer.appendChild(buttonPlus);
		timer.appendChild(buttonMinus);
		timer.appendChild(buttonStart);
	}
	digital.innerText = `${timerCount}`;
}
// 처리된 결과를 아날로그 시계와 디지털 시계에 시각적으로 반영해주는 함수
function printTimer(){
	digital.innerText = `${timerCount}`;

	analog.style.transform = `rotate(${timerCount*6}deg)`;
}

//타이머 시간이 줄어드는 것을 구현하는 함수
function countFunc() {
	timerCount -= 1;

	printTimer();
	if (timerCount === 0) {
		timer.classList.remove('displayNone');
		clearInterval(interval_break);
	}
}
// + - start 버튼을 눌렀을 때 이벤트 핸들러
function clickHandler(event) {
	const btn = event.target;
	console.log(btn.id);
	//플러스 버튼을 눌렀을 경우
	if (btn.id === 'btnPlus') {
		if (timerCount < 60) {
			timerCount += 1;
			printTimer();
		}
    // 마이너스 버튼을 눌렀을 경우
	} else if (btn.id === 'btnMinus') {
		if (timerCount>0){
			timerCount -= 1;
			printTimer();
		}
	//start 버튼을 눌렀을 경우
	} else {
        //1초마다 타이머 카운트해주는 함수 실행
		window.interval_break = setInterval(countFunc, 1000);
		timer.classList.add('displayNone');
	}
}
// init
function init(){
	createUi();
	timer.addEventListener('click', clickHandler)
}

init();