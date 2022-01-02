/*
19. 피보나치 수열

실습과제
피보나치 수열(Fibonacci Sequence)이라고 들어 보셨나요?

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

우선 피보나치 수열의 1번 항과 2번 항은 각각 1입니다. 3번 항부터는 바로 앞 두 항의 합으로 계산됩니다. 예를 들어서 3번 항은 1번 항(1)과 2번 항(1)을 더한 2이며, 4번 항은 2번 항(1)과 3번 항(2)을 더한 3입니다.

반복문을 활용해서 피보나치 수열의 첫 50개 항을 차례대로 출력하는 프로그램을 작성해 보세요.

for문과 while문 중 어떤 반복문을 사용해도 상관없습니다.

코드를 잘 작성하셨다면 다음과 같이 출력되어야 합니다.

1
1
2
3
5
8
13
21
.
.
.
4807526976
7778742049
12586269025
*/

// 여기에 코드를 작성해 주세요.
/*
let a = 1;
let b = 1;

console.log(a);
console.log(b);

for (i = 1; i <= 16; i++) {
  let temp = a + b;
  console.log(temp);
  a = b + temp;
  console.log(a);
  b = temp + a;
  console.log(b);
}
*/

//모범 답안
let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;
  previous = current;
  current = current + temp;
}