/*
13. 팀 나누기

실습과제
오늘은 풋살 동아리 경기가 있는 날입니다. 총인원 10명이서 5명씩 팀을 나누려고 하는데요.

실력이 비슷한 사람들끼리 가위바위보를 했고, 이긴사람이 0번 index, 진 사람이 1번 index 배열을 만들어 정리했습니다.

다음 groups 배열을 가지고, 이긴 사람끼리 그리고 진 사람끼리 팀을 나눠 teams 배열을 완성해 주세요.

let groups = [
  ['영준', '캡틴'], 
  ['태순', '우재'],
  ['재훈', '지웅'],
  ['윤형', '동욱'],
  ['규식', '소원'],
];

let teams = [
  [],
  [],
];
코드를 잘 작성했다면 다음과 같은 결과가 출력되어야 합니다.

[ '영준', '태순', '재훈', '윤형', '규식' ]
[ '캡틴', '우재', '지웅', '동욱', '소원' ]
*/

let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성해 주세요.
// for (let player of groups) {
//   teams[0].push(player[0])
//   teams[1].push(player[1])
// }

// 위와 같은 방식은 하드코딩. 다양한 상황에서도 답을 낼 수 있는 코드가 좋은 코드
// 아직 이해 잘 안 됨, 코드잇에 질문 남겨놓음(2022.01.05).

// 모범답안
for(let i = 0; i < groups.length; i++) {
  for(let j = 0; j < groups[i].length; j++) {
    teams[j][i] = groups[i][j];
  }
}

// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);
