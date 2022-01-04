# 03 프로그래밍과 데이터 in JavaScript   

## 01 객체(object)

### 01. 객체와 프로퍼티
하나의 값이 아닌 여러 가지 값을 한 번에 저장하는 것.   
'자바스크립트의 모든 것이 다 객체다!'   
중괄호({}) 안에 쉼표(,)로 구분하여 여러 가지 값을 저장.   
콜론(:)과 함께 값의 이름을 붙여줘야 함.   
값 이름(key), 값(value)가 한 쌍.   
각각의 한 쌍을 속성(property)라고 부름.   
key와 value를 property name, property value라고도 부름.   
key는 문자열 type을 갖고 있음.   
value는 모든 자료형 가능.   

Property Name 주의 사항!   
1. 첫 번째 글자는 반드시 문자, 밑줄(_), 달러 기호($) 중 하나로 시작!
2. 띄어쓰기 금지!
3. 하이픈(-) 금지!

만약 주의 사항을 지킬 수 없는 상황에서는 property name을 따옴표로 감싸줘야 함.

### 02. 객체와 프로퍼티 익히기
질문 1   
다음 중 객체에 관한 내용 중 틀린 것을 고르세요.   

정답:   
객체의 프로퍼티 네임의 자료형은 문자열이기 때문에 반드시 따옴표를 감싸줘야 한다.

질문 2   
다음 중 객체의 프로퍼티로 옳지 않은 것을 모두 고르세요.   

정답:   
2nd: null   
my-name: '코드잇'

### 03. 객체에서 데이터 접근하기
객체의 데이터에 접근하는 여러 가지 방법   
1. 점 표기법 (objectName.propertyName)
2. 대괄호 표기법(objectName['propertyName']

대괄호 표기법의 경우 띄어쓰기가 포함된 이름의 property name도 접근 가능함.   

value가 object인 경우 objectName.propertyName.propertyName으로 접근 가능함.   
존재하지 않는 property에 접근하려고 하면 undefined가 출력됨.

### 04. 영어 단어장 I
main04.js 참고

### 05. 객체 다루기
객체의 프로퍼티를 수정하는 방법:   
해당 프로퍼티에 접근해서 새로운 값을 할당해주면 됨.   
```JavaScript
objectName.propertyName = 'newValue';
```

객체의 프로퍼티를 추가하는 방법:   
새로운 key와 value를 추가하면 됨.   
```JavaScript
objectName.newPropertyName = 'newValue";
```

객체의 프로퍼티를 삭제하는 방법: delete 연산자   
```JavaScript
delete objectname.propertyName;
```

in 연산자 활용해서 property 존재여부 확인할 수 있음.   
```JavaScript
'propertyName' in object
```

undefined와 불일치 비교할 수 있지만 실수로 value에 undefined 할당했을 경우 고려하면 보다 안전함.

### 06. 영어 단어장 II
main06.js 참고

### 07. 객체와 메소드
연관성 있는 여러 함수들을 하나로 묶고 싶을 때,   
프로퍼티로 함수를 넣어주면 됨.   
호출하는 방법:
```JavaScript
object.method(parameter)
```
e.g.
```JavaScript
let greetings = {
  sayHello: function (name) {
    console.log(`Hello ${name}!`);
  },
  sayHi : function () {
    console.log('Hi!');
  },
  sayBye: function () {
    console.log('Bye!');
  }
};

greetings.sayHello('Codeit!');
```
```JavaScript
Hello Codeit!
```

### 08. 영어 단어장 III
main08.js 참고

### 09. for...in 반복문
객체 안에 있는 property를 가지고 반복적인 동작을 수행할 때 사용.   
문법:
```JavaScript
for (변수 in 객체) {
  동작부분
}
```
e.g.
```JavaScript
let codeit = {
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: '자바스크립트 프로그래밍 기초'
}

for (let key in codeit) {
  console.log(key);
}
```
```JavaScript
name
bornYear
isVeryNice
worstCourse
bestCourse
```

### 10. for...in 주의사항
정수형 프로퍼티 네임을 주면 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특이 있음.

### 11. 순이들의 시험 결과
main11.js 참고

### 12. Date객체
내장 객체(Standard built-in objects)   
자바스크립트가 미리 가지고 있는 객체.   
e.g. console 객체   
내장 객체 중 대표적인 게 Date 객체.
```JavaScript
let myDate = new Date();
console.log(myDate);
//객체를 생성한 순간의 시간이 출력됨.
```
```
Tue Jan 04 2022 18:08:17 GMT+0900 (대한민국 표준시)
```
```JavaScript
let myDate = new Date(1000);
 // 1970년 1월 1일 00:00:00 UTC + 1000밀리초 지난 객체가 만들어짐.
 
let myDate = new Date('2017-05-18T19:11:16');
// 해당 시간에 맞는 시간 객체가 만들어짐. 만약 T 앞의 부분까지만 입력하면 자정 기준으로 만들어짐.

let myDate = new Date(YYYY, MM, DD, hh, mm, ss, ms);
// YYYY, MM까지는 필수, 나머지는 생략 가능. 생략 시 01, 00, 00, 00, 00으로 처리됨.
```
주의 사항: month는 0부터 시작함, 요일은 일요일부터 0으로 시작함!

```JavaScript
let myDate = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate.getTime());
//myDate 객체가 1970년 1월 1일 00:00:00 UTC 부터 몇 밀리초 지났는지 표시됨(타임스탬프, time stamp)
```
```JavaScript
myDate.getFullYear()
myDate.getMonth()
myDate.getDate()
myDate.getDay()
myDate.getHours()
myDate.getMinutes()
myDate.getSeconds()
myDate.getMilliseconds()
```
 
### 13. Date객체 Tip
set으로 시작하는 다양한 메서드를 활용하면, 생성된 Date객체의 정보를 수정할 수도 있음.   
toLocaleDateString(), toLocaleTimeString(), toLocaleString() 메소드는 사용자의 브라우저에 설정된 국가의 표기에 맞춰 날짜와 시간을 보여줌.   
Date 객체엔 자동으로 날짜를 수정해주는 유용한 기능이 있음. 범위를 벗어나는 값을 설정하려고 하면 자동으로 날짜를 수정해줌.   
Date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환함. = 현 시점의 날짜 값   
Date 객체를 number 타입으로 변환할 경우 타임스탬프 값이 생성됨. : Date 객체끼리 사칙연산 가능함.   
YYYY-MM-DDThh:mm:ss형식 말고도 날짜를 표현하는 다양한 방식의 문자열이 있음.

### 14. 우수사원 재상이
main14.js 참고
