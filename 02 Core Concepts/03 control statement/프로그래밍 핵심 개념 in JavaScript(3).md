# 02 프로그래밍 핵심 개념 in JavaScript

## 03 제어문

### 01. if문(if statement)
특별한 조건에 따라 실행할지 결정하는 제어문.   
문법:
```JavaScript
if (조건부분) {
  동작부분;
} else {
  조건 미충족 시 동작부분;
};
```

### 02. 롤러코스터, 탈 수 있을까?
main02.js 참고


### 03. else if문
```JavaScript
if (조건부) {
  동작부;
} else {
  if (조건부) {
    동작부;
  } else {
    동작부;
  }
}   
```

위와 같이 중괄호가 중첩된 if문은 가독성이 떨어짐.   
이때,   

```JavaScript
if (조건부) {
  동작부;
} else if (조건부) {
  동작부;
} else {
  동작부;
}   
```
위와 같이 else if문을 쓰면 같은 동작을 하는 코드를 가독성 좋게 쓸 수 있음.

### 04. 학점 계산기
main04.js 참고

### 05. 서열 정리
main05.js 참고

### 06. switch문(switch statement)
어떤 값을 선택하냐에 따라 다른 동작부.   
문법:   
```JavaScript
switch (비교할 값) {
  case 조건값_1:
    동작부분;
    break;
  case 조건값_2:
    동작부분;
    break;
  default:
    동작부분;
}
```
break는 case에 해당하는 동작부분을 수행한 뒤 빠져나가기 위한 기능.   
default는 위의 조건값 모두 만족하지 않을 때 대비해 넣어두는 else와 같은 기능.

### 07. switch문 vs if문
if문을 활용하면 switch문을 if문으로 대체할 수도 있음.   
어떤 넓은 범위를 만족하는 조건식을 만들 때는 if문이, 특정한 값에 일치하는 조건을 만들 때는 switch문이 좀 더 효과적.   
주의: switch문은 암시적 형 변환을 허용하지 않음!   
따라서 switch문은 값들을 비교할 때 자료형을 엄격하게 구분, if문으로 대체할 때는 반드시 등호 3개로 일치비교를 해야함.

### 08. 등급별 티켓 가격
main08.js 참고

### 09. for문
반복문(loop statement)   
컴퓨터는 사람과 달리 반복적인 일을 잘 수행함.   
반복문 중 for문(for statement)   
문법:   
```JavaScript
for (초기화부분; 조건부분; 추가동작부분) {
  동작부분
}
```
e.g.
```JavaScript
for (let i = 1; i <= 10; i++;) {
  console.log(`${i} 코드잇 최고!`)
}
```
```
1 코드잇 최고!
2 코드잇 최고!
3 코드잇 최고!
4 코드잇 최고!
5 코드잇 최고!
6 코드잇 최고!
7 코드잇 최고!
8 코드잇 최고!
9 코드잇 최고!
10 코드잇 최고!
```

### 10. for문 Tip
1. 추가동작부분을 꼭 채울 필요는 없다.
2. 초기화부분에서 생성한 변수는 for문의 로컬변수다.
3. 초기화 부분도 반드시 채울 필요는 없다.
4. 단, for문의 소괄호 안쪽의 두 세미콜론은 생략할 수 없다.

### 11. for문 연습하기
main11.js 참고

### 12. for문 더 연습하기
main12.js 참고

### 13. while문(while statement)
문법
```JavaScript
while (조건부분) {
  동작부분
}
```
e.g.
```JavaScript
let i = 1;

while(i <= 10) {
  console.log(`${i} 코드잇 최고!`)
  i++;
}
```
```
1 코드잇 최고!
2 코드잇 최고!
3 코드잇 최고!
4 코드잇 최고!
5 코드잇 최고!
6 코드잇 최고!
7 코드잇 최고!
8 코드잇 최고!
9 코드잇 최고!
10 코드잇 최고!
```
이런 경우 for문과 같은 동작을 하는 코드이지만 for문보다 가독성이 떨어짐   
e.g.
```JavaScript
let i = 30;

while(i % 7 !== 0) {
  i++;
}

console.log(i);

// i보다 큰 수 중에 가장 작은 7의 배수 찾는 코드
```
이런 경우는 for문보다 while문에 더 적합함.   
변수를 반복문 밖에서도 써야 할 경우.

### 14. while문 연습하기
main14.js 참고

### 15. while문 더 연습하기
main15.js 참고

### 16. break와 continue
break: 제어문을 빠져나오는 역할.   
아래 코드를 실행하지 않음.   

continue: 동작을 건너뛰는 역할.
실행중인 동작을 건너뛰고 다음 동작으로 넘어감.

### 17. break와 continue 익히기
질문 1   
다음 코드를 제대로 이해한 친구를 선택해 주세요.   
```JavaScript
let i = 1;

while (i <= 20) {
  if (i === 5) {
    break;
  }
  console.log(i);
  i++;
}
```
정답:   
태재 : if문이랑 break문이 있잖아! 콘솔에는 1부터 4까지만 출력되지 않을까?   

질문 2   
다음 코드를 제대로 이해한 친구를 모두 선택해 주세요.   
```JavaScript
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
  i++;
}
```
정답:   
진준: 아냐 i가 증가하는 곳을 자세히 보면 무한루프에 빠지진 않아. 그래서 콘솔에 가장 먼저 출력되는 값은 2야.   
윤아: 결과적으로 이 코드는 1부터 50까지 숫자 중에서 짝수만 출력하는 코드가 되겠네?

### 18. 구구단 만들기
main18.js 참고

### 19. 피보나치 수열
main19.js 참고
