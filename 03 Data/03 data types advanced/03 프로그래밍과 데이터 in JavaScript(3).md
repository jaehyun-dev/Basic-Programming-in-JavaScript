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
문자열도 객체처럼 다룰 수 있음.   
문자열은 배열과 비슷한 부분이 많음.   
```JavaScript
// String
let myString = 'Hi Codeit';
```
```JavaScript
// 문자열 길이
console.log(myString.length); // 공백을 포함해 문자열의 글자 갯수 반환함.

// 요소 접근
console.log(myString[3]);
console.log(myString.charAt(3));

// 요소 탐색
console.log(myString.indexOf('i');
console.log(myString.lastIndexOf('i');
console.log(myString.indexOf('a');

// 대소문자 변환
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

// 양 끝 공백 제거
console.log(myString.trim());

// 부분 문자열 접근 slice(start, end)
// start부터 end 직전까지 가져옴.
// end 생략 시 start부터 끝까지 가져옴.
// 전부 생략 시 전부 가져옴.
console.log(myString.slice(0, 2));
console.log(myString.slice(3));
console.log(myString.slice());
```
```
9
C
C
1
7
-1  // 문자열에 없는 글자
HI CODEIT
hi codeit
HI CODEIT  // 양끝에 공백이 있을 시 지워줌
Hi
Codeit
Hi Codeit
```

### 08. 문자열과 배열 사이
비슷한 점   
문자열도 for...of문 활용할 수 있음.
```JavaScript
let myString = 'Codeit';

for (let str of myString) {
  console.log(str);
}
```
```
C
o
d
e
i
t
```

다른 점   
같은 글자를 같은 인덱스에 갖고 있다고 하더라도 배열과 문자열은 서로 type 다르고 value도 다름.   

mutable vs immutable   
배열은 바뀔 수 있지만 문자열은 바뀔 수 없음.   
문자열은 새로 지정해줘야 함.   
따라서 splice 같은 메소드 사용할 수 없음.

### 09. 그래, 우리 함께
main09.js 참고

### 10. 기본형과 참조형
기본형(Primitive Type)   
Number, String, Boolean, Null, Undefined   
```JavaScript
let x = 3;
let y = x;
console.log(x);
console.log(y);
y = 5;
console.log(x);
console.log(y);
```
```
3
3
3
5
```
해당 변수에 값을 넣어줌.   
변수에 기본형 변수를 넣으면 변수에 들어있던 값을 복사해서 넣어줌.   
둘은 서로 다른 상자.

참조형(Reference Type)   
Object   
```JavaScript
let x = {name: 'Codeit'};
let y = x;
console.log(x);
console.log(y);
y.birth = 2017;
console.log(x);
console.log(y);
```
```
{name : "Codeit"}
{name : "Codeit"}
{name : "Codeit", birth: 2017} // y뿐 아니라 x도 변함
{name : "Codeit", birth: 2017}
```
변수에 객체값을 할당한 경우 객체값으로 가는 주소가 변수에 저장됨.   
변수 상자와 객체 사이에 길이 열리게 됨.   
따라서 let x = y; 에서는 객체가 복사되는 게 아니라 x에서 객체로 가는 길이 y에도 복사가 되는 것.   
x와 y가 같은 객체 주소를 갖게 되고, 하나를 수정하면 다른 하나도 마찬가지로 바뀐 것처럼 보임.

### 11. 기본형과 참조형 익히기
질문 1   
다음 코드를 실행했을 때 출력되는 내용을 고르세요.
```JavaScript
let x = 'Codeit';
let y = x;

y = x + '!';
x = y.toLowerCase();

console.log(y);
```
정답:
```JavaScript
Codeit!
```

질문 2   
다음 코드를 실행했을 때 출력되는 내용을 고르세요.   
```JavaScript
let x = ['Kim', 'Na', 'Park', 'Lee'];
let y = x;

y.push('Lim');
x[4] = 'Sung';

console.log(y);
```
정답:
```JavaScript
['Kim', 'Na', 'Park', 'Lee', 'Sung']
```

질문 3   
다음 코드를 실행했을 때 출력되는 내용을 고르세요.   
```JavaScript
let x = {
  numbers: [1, 2, 3, 4],
  title: 'Codeit',
};
let y = x.numbers;
let z = x.title;
 
x.numbers.unshift(5);
x.title = 'Hello';

console.log(y);
console.log(z);
```
정답:   
```JavaScript
[5, 1, 2, 3, 4]
Codeit
```

### 12. 참조형 복사하기
22.01.06 목요일   
```JavaScript
let numbers1 = [1, 2, 3];
let numbers2 = numbers.slice();

numbers2.push(4)

console.log(numbers1);
console.log(numbers2);
```
```
[1, 2, 3]
[1, 2, 3, 4]
```
slice()를 활용하여 배열의 주소 대신 값을 직접 복사할 수 있음.

```JavaScript
let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};

let course2 = Object.assign({}, course1);

course.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);
```
```JavaScript
{title: "파이썬 프로그래밍 기초", language: "Python"}
{title: "알고리즘의 정석", language: "Python"}
```
Object.assign() 메소드 활용하여 객체도 복사할 수 있음.   
주의: 객체나 배열 안에 중첩해서 객체나 배열이 있는 경우에는 주소가 복사되어 예상치 못한 결과 얻을 수 있음!

### 13. 레시피 만들기
main13.js 참고

### 14. const, 변수와 상수 사이
코드가 길어지면 코드의 일관성을 위해 변수를 const로 선언해 중간에 값이 변하는 것을 방지할 수 있음.   
하지만 객체의 경우 주소를 복사하는 것이기 때문에 const로 선언해도 property 추가나 변경이 가능.

### 15. const와 참조형 익히기
질문 1   
다음 코드의 실행결과로 올바른 것을 고르세요.   
```JavaScript
let x = 1;

x = 4;

const y = x;

y = 3;
x = 2;

console.log(x);
```
정답: 
```
Error가 발생한다.
```

질문 2   
다음 코드의 실행결과로 올바른 것을 고르세요.   
```JavaScript
let team1 = ['Drum', 'Bass', 'Saxophone'];
const team2 = team1;

team1.splice(2, 1, 'Trumpet');
team2.splice(2, 1, 'Piano');

console.log(team1);
console.log(team2);
```
정답:   
```JavaScript
[ 'Drum', 'Bass', 'Piano' ]
[ 'Drum', 'Bass', 'Piano' ]
```

### 16. 변수, 그땐 그랬지
끌어올림 (Hoisting)   
```JavaScript
console.log(myVariable);
let myVariable;
```
```
Uncaught ReferenceError: Cannot access 'myVariable' before initialization
```
let과 const로 선언한 변수는 선언되기 이전에 사용될 수 없습니다.   
하지만, var 변수는 함수 스코프를 기준으로 선언되기 이전에도 변수에 접근이 가능한데요.
```JavaScript
console.log(myVariable);
var myVariable;
```
```
undefined
```
변수의 선언이 끌려 올라가서 마치, 2번째 줄과 첫 번째 줄이 바뀐 것처럼 동작하는데요.
```JavaScript
var myVariable;
console.log(myVariable);
```
이렇게 변수가 끌어올려 지는 현상을 '호이스팅(hoisting)'이라고 부른다는 점도 기억해 두시면 좋을 것 같아요 :)   
다행히 호이스팅은 선언과 동시에 값을 할당하더라도, 선언문만 올려지기 때문에 값은 그대로 두 번째 줄에 남아있는데요.
```JavaScript
console.log(myVariable);
var myVariable = 2;
console.log(myVariable);
```
```
undefined
2
```
하지만 이런 식으로 동작하는 방식은 코드의 흐름을 방해하기에 충분해 보이죠?   
한 가지 주의해야 될 부분은, 함수를 선언할 때도 이 호이스팅이 적용됩니다.
```JavaScript
sayHi();

function sayHi() {
  console.log('hi');
}
```
이렇게 코드를 작성하더라도 실행해보면,
```JavaScript
hi
```
당연한 듯 함수가 잘 실행되는 모습을 확인할 수 있습니다.   

이런 현상은 함수를 한 번 선언하고 나면 어디서든 유연하게 사용할 수 있다는 장점이 있지만, 코드의 흐름에는 부정적인 영향을 끼칠 수 있습니다.   
그래서 함수를 선언할 떄는 가급적 코드 윗부분에 선언하거나, 호출을 항상 아래쪽에서 한다거나 나름대로 규칙을 세워서 코드를 작성하시기를 권장드립니다 :)   

자, 지금까지 오래된 자바스크립트에서 변수를 만들 때 사용했던 var 키워드에 대해서 살펴봤는데요.   
요즘은 잘 사용되지 않지만, 그래도 자바스크립트의 상식적인 측면에서 가볍게 이해하고 계시면 좋을 것 같습니다! :)
