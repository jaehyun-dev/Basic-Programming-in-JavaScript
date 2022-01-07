/*
02. 거스름돈 구하기

실습과제
현태는 현명하게 거스름돈을 계산해 주는 프로그램을 만들려고 합니다. 예를 들어 33,000원짜리 물건을 사기 위해 100,000원을 냈다면,

50,000원 1장
10,000원 1장
5,000원 1장
1,000원 2장
이런 식으로 '가장 적은 수'의 지폐를 거슬러 주는 것입니다. 방금 같은 경우에는 총 5장을 거슬러 준 거죠.

우리는 calculateChange라는 함수를 작성하려고 하는데요. 이 함수는 지불한 금액을 나타내는 payment와 물건의 가격을 나타내는 cost를 파라미터로 받습니다.

주어진 코드에 이어서 깔끔하게 프로그램을 작성해 보세요.

함수 모두 작성하고 프로그램을 실행하면 아래와 같은 결괏값이 콘솔에 출력되어야 합니다.

50000원 지폐: 1장
10000원 지폐: 1장
5000원 지폐: 1장
1000원 지폐: 2장

50000원 지폐: 2장
10000원 지폐: 2장
5000원 지폐: 0장
1000원 지폐: 2장
*/

/*
function calculateChange(payment, cost) {
  // 코드를 작성해 주세요.
  let fiftyThousandBill = Math.floor((payment - cost) / 50000);
  let tenThousandBill = Math.floor((payment - cost) % 50000 / 10000);
  let fiveThousandBill = Math.floor((payment - cost) % 10000 / 5000);
  let oneThousandBill = Math.floor((payment - cost) % 5000 / 1000);

  console.log(`50000원 지폐: ${fiftyThousandBill}장`);
  console.log(`10000원 지폐: ${tenThousandBill}장`);
  console.log(`5000원 지폐: ${fiveThousandBill}장`);
  console.log(`1000원 지폐: ${oneThousandBill}장`);
}
*/

//모범 답안
function calculateChange(payment, cost) {
  // 코드를 작성해주세요.
  let change = payment - cost;
  
  function billCounting(amount) {
    const count = Math.floor(change / amount);
    change = change - amount * count;
    return count;
  }

  const fiftyCount = billCounting(50000)
  const tenCount = billCounting(10000)
  const fiveCount = billCounting(5000)
  const oneCount = billCounting(1000)

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);