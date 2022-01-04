/*
06. 영어 단어장 II

실습과제
시원이는 지난번에 외웠던 영어단어 5가지 중에서 function, constant, local은 이제 확실하게 다 외웠습니다.

오늘 외울 단어는

[extend] = 확장하다
[export] = 내보내다
[import] = 불러오다
[default value] = 기본값

총 4가지입니다.

지난번에 작성한 코드를 참고해서 vocab 변수를 수정하지 않은 채로,

이미 다 외워버린 단어 3개는 삭제하고
오늘 외울 단어는 추가해 주세요.
마지막 줄에서 default value의 뜻을 콘솔에 출력해 주세요.
코드를 잘 작성하셨다면 아래와 같은 출력 결과가 나타나야 합니다.

{ variable: '변수', global: '전반적인' }
undefined
{
  variable: '변수',
  global: '전반적인',
  extend: '확장하다',
  export: '내보내다',
  import: '불러오다',
  'default value': '기본값'
}
내보내다
기본값
*/

let myVoca = {
	function: '함수',
	variable: '변수',
	constant: '상수',
	local: '지역의',
	global: '전반적인',
};

// 1. 이미 외운 단어 3개를 삭제해 주세요.
// 여기에 코드를 작성해 주세요.


console.log(myVoca);
console.log(myVoca.constant);


// 2. 오늘 외울 단어 4개를 추가해 주세요.
// 여기에 코드를 작성해 주세요.


console.log(myVoca);
console.log(myVoca.export);


// 3. default value의 뜻을 출력해 주세요.
// 여기에 코드를 작성해 주세요.