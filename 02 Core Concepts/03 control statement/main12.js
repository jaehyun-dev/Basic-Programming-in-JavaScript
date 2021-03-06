/*
12. for문 더 연습하기

실습과제
주어진 높이(height)에 맞게 '*'로 삼각형을 그려주는 함수 printTriangle을 완성해 봅시다. 
함수를 잘 작성했다면 결과는 아래와 같이 출력되어야 합니다.

높이: 1
*
높이: 3
*
**
***
높이: 5
*
**
***
****
*****
*/

function printTriangle(height) {
  let string = "";
	for (let i = 1; i <= height; i++) {
    string += "*";
    console.log(string);
  }
}

/*
.repeat()을 사용하는 방법

function printTriangle(height) {
  for (let i = 1; i <=height; i++) {
    console.log('*'.repeat(i))
  }
}
*/

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);