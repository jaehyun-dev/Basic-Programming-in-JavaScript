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


### 10. for...in 주의사항


### 11. 순이들의 시험 결과


### 12. Datee객체


### 13. Date객체 Tip


### 14. 우수사원 재상이
