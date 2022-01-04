# 03 프로그래밍과 데이터 in JavaScript   

## 02 배열(array)

### 01. 배열
대괄호 안에 쉼표로 요소(element)를 구분해주면 순서가 있는 배열이 생성됨.   
순서에 해당하는 숫자 = index   

indexing
배열이름[index]의 방식으로 요소에 접근할 수 있음.   
주의 사항: index는 1이 아닌 0부터 시작!

### 02. 배열 인덱싱 연습하기
main02.js 참고

### 03. 배열 다루기
배열도 객체의 한 종류.   
length property: 배열이 가지고 있는 요소의 총 갯수.
```JavaScript
array.length
arry['length']
```

배열에 요소를 추가하기, 수정하기 = 객체와 비슷함   
```JavaScript
array(newIndex) = 'newElement' //추가하기
array(index) = 'newElement' //수정하기
```
주의: 순서를 뛰어넘는 인덱스를 추가하면 중간에 빈값이 추가됨!

주의: delete로 array의 index 지우면 empty 값이 element로 남아있음
따라서 배열이 갖는 메소드를 사용해야 함.

### 04. 온도 바꾸기
main04.js 참고

### 05. 배열 메소드 I
splice 메소드로 배열의 요소를 안정적으로 삭제할 수 있음.
```JavaScript
array.splice(startIndex, deleteCount, item);
//startIndex부터 deleteCount개 element 삭제함. deleteCount 생략 시 StartIndex부터 이후 모든 element 삭제.
//item 통해 새 element 입력할 수 있음. element 지운 자리에 추가하기 때문에 index 밀릴 수 있음.
//잘 활용하면 여러 개 동시에 수정 가능함
```

### 06. splice 연습하기


### 07. 베열 메소드 II


### 08. 배열 메소드 익히기


### 09. 배열 메소드 Tip


### 10. for...of 반복문


### 11. 투표 집계하기


### 12. 다차원 배열


### 13. 팀 나누기

