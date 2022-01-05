# 03 프로그래밍과 데이터 in JavaScript   

## 03 자료형 심화

### 01. 다양한 숫자 표기법
```JavaScript
// 지수 표기법
1e9 === 1000000000
3.5e-3 === 0.0035
```
```JavaScript
// 진법 표기법
// 16진법 (Hexadecimal)
0xff === 255
0xFF === 255

// 8진법 (Octal)
0o377 === 255

// 2진법 (binary numeral system)
0b11111111 === 255
```

### 숫자형 메소드
자바스크립트에서는 숫자도 객체.   
숫자에도 메소드가 있음.   

```JavaScript
// toFixed(0 ~ 100): n+1번째 자리에서 반올림해서 n번째 자리까지 표시
let myNumber = 0.3591;

console.log(myNumber.toFixed(3));
console.log(myNumber.toFixed(7));
```
```JavaScript
0.359
0.3591000
```
주의: toFixed 메소드를 사용하면 문자형으로 변환됨.   
앞에 +를 붙이면 Number() 사용한 것과 같은 결과 나옴.
```JavaScript
console.log(+myNumber.toFixed(2))
```
```JavaScript
0.36 //숫자형
```

```JavaScript
// toString(2 ~ 36): n진수로 바꾼 뒤 문자형으로 변환
let myNumber = 255;

console.log(myNumber.toString(2));
console.log(myNumber.toString(8));
console.log(myNumber.toString(16));
```
```JavaScript
11111111
377
ff
```
주의: 숫자에 바로 . 붙여서 메소드를 사용하면 오류.   
소숫점으로 인식하기 떄문.   
255..toString(2)처럼 마침표 두 개를 사용하거나, (255).toString(2)처럼 숫자를 괄호로 감싸줘야 함.

### 03. 숫자형 더 익히기
질문 1   
다음 코드의 실행결과로 올바른 것을 고르세요.
```JavaScript
let myNumber = 2.37e-2

console.log(myNumber.toFixed(2));
```
정답:
```JavaScript
0.02
```

질문 2   
다음 코드 중 숫자 123를 표현하는 코드가 아닌 것을 고르세요   
정답:   
```JavaScript
(123.456).toFixed(0);
```

### 04. Math객체
절댓값 (Absolute Number)     
Math.abs(x)를 하면 x의 절댓값이 리턴됩니다.
```JavaScript
console.log(Math.abs(-10));
console.log(Math.abs(10));
```
```
10
10
```

최댓값 (Maximum)   
Math.max 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 큰 값이 리턴됩니다.
```JavaScript
console.log(Math.max(2, -1, 4, 5, 0));
```
```
5
```

최솟값 (Minimum)   
Math.min 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 작은 값이 리턴됩니다.
```JavaScript
console.log(Math.min(2, -1, 4, 5, 0));
```
```
-1
```

거듭제곱 (Exponentiation)   
자바스크립트에서 Math.pow(x, y)를 하면 x의 y승의 결괏값이 리턴됩니다.
```JavaScript
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));
```
```
8
25
```

제곱근 (Square Root)   
Math.sqrt(x)를 하면 x의 제곱근이 리턴됩니다.
```JavaScript
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));
```
```
5
7
```

반올림 (Round)   
Math.round(x)를 하면 x의 반올림된 정숫값이 리턴됩니다.
```JavaScript
console.log(Math.round(2.3));
console.log(Math.round(2.4));
console.log(Math.round(2.49));
console.log(Math.round(2.5));
console.log(Math.round(2.6));
```
```
2
2
2
3
3
```

버림과 올림 (Floor and Ceil)   
Math.floor(x)을 하면 x의 버림 값이, Math.ceil(x)을 하면 x의 올림 값이 리턴됩니다.
```JavaScript
console.log(Math.floor(2.4));
console.log(Math.floor(2.49));
console.log(Math.floor(2.8));
console.log('-');
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2.8));
```
```
2
2
2
-
3
3
3
```

난수 (Random)   
Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴됩니다.
```JavaScript
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
```
```
0.21458369059793236
0.6622040803059857
0.785172717569619
0.9056556038884926
```
이외에도 삼각함수, 로그 등 다양한 수학 객체가 있음.

### 05. 바보 자바스크립트?
```JavaScript
let sum = 0.1 + 0.2;
console.log(sum)
```
```
0.30000000000000004
```
컴퓨터는 모든 것을 0과 1로 변환한 뒤 해석함.   
2진수로 0.1을 나타내면 무한소수가 되기 떄문에 일정 자리수에서 반올림 등의 방법으로 자름.   
그로 인해 미세한 오차가 발생할 수밖에 없음.   
해결하기 위해서는 toFixed(1), Math.round(sum * 10) / 10 등의 방법으로 보정해줘야 함.

### 06. 이자 계산기
main06.js 참고

### 07. 문자열 심화


### 08. 문자열과 배열 사이


### 09. 그래, 우리 함꼐


### 10. 기본형과 참조형


### 11. 기본형과 참조형 익히기


### 12. 참조형 복사하기


### 13. 레시피 만들기


### 14. const, 변수와 상수 사이


### 15. const와 참조형 익히기


### 16. 변수, 그땐 그랬지
