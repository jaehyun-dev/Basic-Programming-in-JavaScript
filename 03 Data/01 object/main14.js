/*
14. 우수사원 재상이

실습과제
회사에서 가장 성실하기로 유명한 재상이는 지난달에 이어 이번 달에도 이달의 우수사원으로 뽑혀 감회가 새롭습니다.

문득, 그동안 고생한 지난날이 머릿속을 스쳐지나면서 자신이 입사한 지 얼마나 지났는지도 궁금해졌는데요. 오늘은 날짜는 2112년 8월 24일이고, 재상이의 입사일은 2109년 7월 1일입니다. Date객체와 메소드를 활용해서 재상이가 입사한 지 며칠째인지를 계산해주는 workDayCalc 함수를 완성해 주세요.

(만약 8월 24일에 입사했고, 오늘이 8월 24일이면 0일이 아니라, '입사한 지 1일째'입니다.)

코드를 잘 작성하셨다면 다음과 같은 결과가 출력되어야 합니다.

오늘은 입사한 지 1151일째 되는 날 입니다.
*/

let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
	// 여기에 코드를 작성해 주세요.
	let timeDiff = today.getTime() - startDate.getTime() 
  let workDay = timeDiff / 1000 / 60 / 60 / 24 + 1
  console.log(`오늘은 입사한 지 ${workDay}일째 되는 날 입니다.`)
}

workDayCalc(jaeSangStart);