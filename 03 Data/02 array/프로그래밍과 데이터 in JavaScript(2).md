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
```
startIndex부터 deleteCount개 element 삭제함.   
deleteCount 생략 시 StartIndex부터 이후 모든 element 삭제.   
item 통해 새 element 입력할 수 있음.   
element 지운 자리에 추가하기 때문에 index 밀릴 수 있음.   
잘 활용하면 여러 개 동시에 수정 가능함.

### 06. splice 연습하기
main06.js 참고

### 07. 배열 메소드 II
```JavaScript
// 배열의 첫 요소를 삭제: shift()
array.shift();

// 배열의 마지막 요소를 삭제: pop()
array.pop();

// 배열의 첫 요소로 값 추가: unshift()
array.unshift('value');

// 배열의 마지막 요소로 값 추가: push()
array.push('value');
```

### 08. 배열 메소드 익히기
질문 1   
다음 코드의 결과로 올바른 것을 고르세요.   
```JavaScript
let numbers = [1, 3, 5, 6, 8, 10];

numbers.pop();
numbers.unshift(3);
numbers.shift();

console.log(numbers);
```
정답:   
```JavaScript
[1, 3, 5, 6, 8]
```

질문 2   
다음 코드의 결과로 올바른 것을 고르세요.
```JavaScript
function range(start, count, step) {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(start + i * step)
  }

  return arr;
}

// 테스트 코드
console.log(range(1, 10, 3));
```
정답:
```JavaScript
[1, 4, 7, 10, 13, 16, 19, 22, 25, 28]
```

### 09. 배열 메소드 Tip
배열에서 특정 값 찾기 (indexOf / lastIndexOf)
배열에서 특정 값을 찾으려면 indexOf 메소드를 사용하면 됩니다.   
array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있습니다.

1. 만약 포함되어 있다면, item이 있는 인덱스가 리턴됩니다.
2. 포함되어 있지 않다면, -1이 리턴됩니다.
3. 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.

```JavaScirpt
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao'));
console.log(brands.indexOf('Daum'));
```
```JavaScript
1
-1
```
그리고 비슷하게 lastIndexOf라는 메소드가 있는데요.   
indexOf와는 반대로 탐색을 뒤에서 부터 하게 됩니다.   
그러니깐 방금과 같은 경우에 'Kakao'를 lastIndexOf 메소드로 찾게 되면 마지막에 있는 인덱스가 리턴되겠죠?
```JavaScript
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.lastIndexOf('Kakao'));
console.log(brands.lastIndexOf('Daum'));
```
```JavaScript
3
-1
```

배열에서 특정 값이 있는지 확인하기 (includes)   
그냥 그 값이 배열안에 있는지, 그 여부만 확인하고 싶을 수도 있을 때는 includes 라는 메소드를 활용하면 됩니다.   
array.includes(item)을 하게되면 array배열에 item이 있을 경우 true를, 없을 경우 false를 리턴합니다.   
```JavaScript
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.includes('Kakao'));
console.log(brands.includes('Daum'));
```
```JavaScript
true
false
```

배열 뒤집기 (reverse)   
reverse라는 메소드를 활용하면, 배열의 순서를 뒤집을 수도 있습니다.   
```JavaScript
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands);
brands.reverse();
console.log(brands);
```
```JavaScript
["Google", "Kakao", "Naver", "Kakao"]
["Kakao", "Naver", "Kakao", "Google"]
```
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array   
참고

### 10. for...of 반복문
문법
```JavaScript
for (변수 of 배열) {
  동작부분;
}
```
주의: 배열에서는 for...in문 안 쓰는 것을 권장! 유사배열 등 length property 할당됐을  작동 X

### 11. 투표 집계하기
main11.js 참고

### 12. 다차원 배열
배열이 배열의 요소가 될 수 있음.   
배열 안에 배열이 들어간 형태를 "다차원 배열"이라고 부름.   
다차원 배열에 접근하는 방법
```JavaScript
let twoDimensional = [[1, 2], [3, 4]];
console.log(twoDimensional[0][1])
```
```JavaScript
2
```

### 13. 팀 나누기

