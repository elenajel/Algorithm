/*
문제
어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 

입력
첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

출력
첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

예제 입력 1 
110
예제 출력 1 
99
예제 입력 2 
1
예제 출력 2 
1
예제 입력 3 
210
예제 출력 3 
105
예제 입력 4 
1000
예제 출력 4 
144

등차수열 = arithmetic sequence , a sequence of numbers such that the difference b/t the consecutive terms
is constant. a_n = a_1 + (n-1)d

한자리수: 1, 2, 3 .. => 모두 한 수
두자리수: 10, 11, 12, 42 ... => 모두 한 수
세자리수: 100, 101, ... 111(한수), 123(한수), ... 
*/
//* 백준 제출용
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

//* 로컬 테스트용
// const input = "110";
const N = parseInt(input);
let hansoo = 0;

for (let i = 1; i <= N; i++) {
  if (i < 100) {
    hansoo++;
  } else {
    numbers = i //101
      .toString() //'101'
      .split("") // ['1', '0', '1']
      .map((num) => parseInt(num)); //[1,0,1]
    if (numbers[2] - numbers[1] === numbers[1] - numbers[0]) {
      hansoo++;
    }
  }
}

console.log(hansoo);
