# 02 프로그래밍 핵심 개념 in JavaScript   

## 02 추상화(Abstraction)

### 01. 할당 연산자
등호(=): 우변을 좌변에 할당해라.   
같다는 의미가 아님.   
등호 오른쪽의 식을 먼저 계산한 후 왼쪽에 할당.

### 02. 복합 할당 연산자(Compound assignment operators)
할당 연산자와 결합해서 자주 쓰이는 표현을 더 간략하게 쓸 수 있게 해주는 연산자   
```JavaScript
// 다음 두 줄씩은 서로 같음
x = x + 1;
x += 1;

x = x * 2;
x *= 2;

x = x - 3;
x -= 3;

x = x / 2;
x /= 2;

x = x % 3;
x %= 3;
```

증가(increment), 감소(decrement)연산자
변수의 값을 1씩 증거시키거나 갑소시킬 때 쓰는 연산자.
```JavaScript
// 다음 세 줄은 서로 같음
x = x + 1;
x += 1;
x++;

x = x - 1;
x -= 1;
x--;
```


### 03. 함수의 실행 순서
코드는 기본적으로 위에서부터 아래로 한 줄씩, 왼쪽에서 오른쪽으로 읽음.   
앞 줄이 해야 할 일 끝나면 그 다음 줄로 넘어감.
함수를 선언했을 떄는 아무일도 일어나지 않고, 호출을 하면 실행됨.

### 04. 함수 부려먹기 I
main04.js 참고

### 05. 함수 부려먹기 II
main05.js 참고

### 06. return문 제대로 이해하기
return은 output을 반환하는 역할 외에도 함수의 실행을 중단하고 종료하는 역할도 있음.   
함수 안에서 return문 다음 줄에 코드가 있으면 Dead Code라고 부름.   
절대로 실행될 수 없는 죽은 코드이기 때문에 필요없는 부분.   
작성하지 않는 게 좋음.

### 07. return문과 console.log의 차이
return문은 어떤 값을 반환해주고 console.log는 어떤 값을 출력해주는 역할.   
console.log() 안에 return문과 console.log()을 사용한 함수를 각각 넣으면 다른 결과.

### 08. 함수 부려먹기 III
main08.js 참고

### 09. 옵셔널 파라미터
파라미터를 선언한 뒤 함수 안에 아무런 값을 주지 않으면 결괏값으로 undefined가 나옴.   
파라미터에 값을 넣지 않아도 자동으로 어떤 값을 할당되게 하는 것 = 옵셔널 파라미터.   
e.g.   
```JavaScript
function introduce(name, age, nationality = '한국') {
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
};

introduce('코드잇', 4, '미국'); // 값을 모두 전달한 경우
console.log('');
introduce('코드잇', 4); // 파라미터 값을 생략한 경우
```
```JavaScript
제 이름은 코드잇입니다.
나이는 4살 이고,
국적은 미국입니다.

제 이름은 코드잇입니다.
나이는 4살 이고,
국적은 한국입니다.
```

주의: 옵셔널 파라미터는 항상 함수 정의 부분의 마지막에 들어가야 함!

### 10. 세트메뉴 주문하기
main10.js 참고

### 11. 변수의 scope
변수가 유효한 범위.   
함수를 선언한 뒤 함수 밖에서 변수를 불러오면 오류 뜸.   
함수 선언할 때 중괄호 {}안의 내용: 블록문(Block Statement)   
블록문 안에 선언된 변수: 로컬 변수, 지역 변수(Local Variable)   
로컬 변수는 블록문 안에서만 유효함.   
블록문 밖에서 선언된 변수: 글로벌 변수, 전역 변수(Global Variable)   
코드 전체에서 어디서든 사용할 수 있음.   
블록문에서 변수 사용하게 되면 가장 먼저 로컬 변수가 있는지 확인함.   
로컬 변수가 있으면 사용, 없으면 글로벌 변수 사용.   
글로별 변수도 없다면 오류가 생김.

### 12. scope 익히기
질문 1   
다음 코드를 실행했을 때 출력되는 내용을 선택하세요.   
```JavaScript
function myFunction() {
  let x = '코드잇';
  x = "을지로";
}

myFunction();
console.log(x);
```

정답:   
오류가 발생한다.   


질문 2   
다음 코드를 실행했을 때 출력되는 내용을 선택하세요.
```JavaScript
let x = 120;

function myFunction() {
  let x = 20;
  console.log(x);
}

myFunction();
console.log(x);
```

정답:   
```
20
120
```


질문 3   
다음 코드를 실행했을 때 출력되는 내용을 선택하세요.
```JavaScript
let x = 100;

function myFunction() {
  let y = 40;
  console.log(x + y);
}
   
myFunction();
console.log(x);
```

정답:   
```
140
100
```



### 13. 상수(Constant)
변할 수 있는 변수와 달리 항상 고정된 값.   
상수를 선언할 떄는 let 대신 constant의 약자인 const 사용
```JavaScript
const PI = 3.14; //원주율
PI = 3;
```
상수로 선언한 값은 밑에서 어떤 값을 할당하려 하면 오류가 뜨기 때문에 보호할 수 있음.   
```JavaScript
const MY_NUMBER = 2;
```
상수의 이름은 전부 대문자로, 두 단어 이상일 때는 밑줄(_)로 구분하는 암묵적인 규칙이 있음.

### 14. 상수 익히기
질문 1   
다음 코드를 실행했을 때 출력되는 내용을 선택하세요.
```JavaScript
const X = 1500;

function myFunction() {
  X = 1500 * 1.5;
  console.log(X);
}

myFunction();
console.log(X);
```

정답:   
오류가 발생한다.   

질문 2   
다음 코드를 실행했을 때 출력되는 내용을 선택하세요.   
```JavaScript
const X = 1500;
let x = 1000;

console.log(x);
console.log(X);
```

정답:   
```JavaScript
1000
1500
```

### 15. 함수 변수 복습하기
main15.js 참고
