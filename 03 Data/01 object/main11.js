/*
11. 순이들의 시험 결과

실습과제
혜순이와 민순이는 이번에 SQL 자격증 시험에 응시했는데요.

아래는 두 사람의 각 과목별 점수를 정리한 객체입니다.

let hyesoonScore = {
  '데이터 모델링의 이해': 10,
  '데이터 모델과 성능': 8,
  'SQL 기본': 22,
  'SQL 활용': 18,
  'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
  '데이터 모델링의 이해': 14,
  '데이터 모델과 성능': 8,
  'SQL 기본': 12,
  'SQL 활용': 4,
  'SQL 최적화 기본 원리': 16,
};
자격증 합격 기준은 총점이 60점 이상인데요.

파라미터로 객체를 전달받고, 각 과목들의 점수를 모두 합산해서 시험 결과를 알려주는 passChecker 함수를 완성해 주세요!
합격 기준을 충족할 경우 '축하합니다! 합격입니다!' 라는 문자열을, 충족하지 못할 경우 '아쉽지만 불합격 입니다..'라는 문자열을 출력해야 합니다.

코드를 잘 작성하셨다면, 다음과 같은 결과가 출력되어야 합니다.

축하합니다! 합격입니다!
아쉽지만 불합격입니다..
*/

let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
	// 여기에 코드를 작성해 주세요.
  let totalScore = 0;
  for (score in scoreObject) {
    totalScore = totalScore + scoreObject[score];
  };
  if (totalScore >= 60) {
    console.log('축하합니다! 합격입니다!');
  } else {
    console.log('아쉽지만 불합격입니다..');
  };
}

//모범답안의 경우 for (subject in scoreObject) 로 씀.

passChecker(hyesoonScore);
passChecker(minsoonScore);