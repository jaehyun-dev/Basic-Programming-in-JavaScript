/*
04. 학점 계산기
실습과제
학생들에게 최종 성적을 알려 주는 '학점 계산기'를 만들려고 합니다.
이 수업에는 50점 만점의 중간고사와 50점 만점의 기말고사가 있는데요.
두 시험의 점수를 합해서 최종 성적을 내는 방식입니다.
규칙은 다음과 같습니다.

A: 90점 이상
B: 80점 이상 90점 미만
C: 70점 이상 80점 미만
D: 60점 이상 70점 미만
F: 60점 미만

printGrade 함수는 파라미터로 중간고사 점수 midtermScore와 기말고사 점수 finalScore를 받고, 최종 성적을 출력합니다.

D
A
F
C

*/

function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
  // 여기에 코드를 작성해 주세요.
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);