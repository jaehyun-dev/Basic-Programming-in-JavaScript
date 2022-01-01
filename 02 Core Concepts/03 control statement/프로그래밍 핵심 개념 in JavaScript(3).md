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

### 07. switch문 vs if문


### 08. 등급별 티켓 가격


### 09. for문


### 10. for문 Tip


### 11. for문 연습하기


### 12. for문 더 연습하기


### 13. while문


### 14. while문 연습하기


### 15. while문 더 연습하기


### 16. break와 continue


### 17. break와 continue 익히기


### 18. 구구단 만들기


### 19. 피보나치 수열


