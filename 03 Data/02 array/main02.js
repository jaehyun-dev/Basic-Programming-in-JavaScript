/*
02. 배열 인덱싱 연습하기

실습과제
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];
여기, dataType 이라는 이름의 6개의 요소를 가진 배열이 있습니다.
이 배열의 요소들을 모두 출력하는 프로그램을 작성해 보세요.
반복문의 개념을 활용하시면 어렵지 않게 해결할 수 있습니다.

코드를 잘 작성하셨다면, 다음과 같이 출력되어야 합니다.

number
string
boolean
null
undefined
object
*/

let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

// 여기에 코드를 작성해 주세요.
/*
for (index in dataType) {
  console.log(dataType[index])
}
*/

//모범답안
for (let i = 0; i < 6; i++) {
  console.log(dataType[i]);
}

//뒤에서 배우게 되지만 배열에서 for...in 문을 쓰는 것은 권장되지 않음.
