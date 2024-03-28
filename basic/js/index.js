// console.log("Hello JavaScript!")



/*
 자바스크립트 언어 기본 사용법
 
 1 변수 이름에서 사용가능한 케이스
 2 주석 다는 방법
 3 세미콜론 
*/


// 1 변수 이름에서 사용 가능한 케이스

// var lowercase // 소문자
// var snake_case // 뱀
// var camelCase // 낙타
// var kebab-case // 닭꼬치는 안됨


// 2 주석다는 방법


// 한줄의 주석

/*
  여러줄의 
  주석
*/


// 3 세미콜론 사용 - 옵션

// var foo = "bar"
// var foo = "bar";


/*
  데이터 타입

  1 String 
  2 Number
  3 Boolean
  4 undefined
  5 null
*/


/*
  String (문자열)

  1 문자열의 값
  2 각 문자에 접근하기
  3 문자의 갯수 구하기
*/


// 1 문자열의 값

// var foo = "bar";

// console.log(foo);
// // bar


// 2 각 문자에 접근하기

// var foo = "bar";

// // 인덱스(index)로 접근
// console.log(foo[0]) // 0 부터 시작
// // b
// console.log(foo[1])
// // a
// console.log(foo[2])
// // r


// 3 문자의 갯수 구하기

// var foo = "bar"

// console.log(foo.length); // length 속성
// 3


// var s = "집에 가고 싶다"
// var s = "벌써 2024년 이라니..☆"

// var s = "I'm John";

// var s = 'hello';

// var s = 'I\'m John'; 
// 주의 - 홑따옴표 안에 홑따옴표, 쌍따옴표 안에 쌍따옴표 
// 불가

// var s = "여러줄의
// 문자열";

// 백틱 (backtick)으로 여러줄 입력 가능
// var s = `여러 줄의
// 문자열`

// console.log(s);


// char 타입 (한글자)
// var c = 'C';
// // 문자열
// var s = "hello world"



/*
  Number 

  1 Number 타입의 값
*/


/*
  1 Number 타입의 값

  1) 정수
  2) 분수
  3) NaN
  4) +Infinity
  5) -Infinity
*/


// 1 정수
// var year = 2023;

// console.log(year);
// // 2023


// var n = -1

// console.log(n);
// // -1


// 2 분수

// var PI = 3.14;

// console.log(PI);
// // 3.14


// 3 NaN (Not a Number)

// var nan = 2 - "foo";

// console.log(nan);
// // NaN


// +Infinity (양의 무한대)


// Number 타입이 저장할 수 있는 가장 큰수
// var max_value = Number.MAX_VALUE;

// console.log(max_value);

// // 양의 무한대
// var infinity = max_value * 1.1;

// console.log(infinity);
// // Infinity


// -Infinity (음의 무한대)

// Number타입이 저장할 수 있는 가장 작은수

// var negative_max_value = -Number.MAX_VALUE;

// console.log(negative_max_value);

// // 음의 무한대
// var negative_infinity = negative_max_value * 1.1;

// console.log(negative_infinity);
// // -Infinity



/*
  4 Boolean
  참 또는 거짓의 값을 가지는 데이터 타입

  1 값
*/


// 값 - true / false

// var bool = true;

// console.log(bool);
// true


// 예시 - 비교 연산
// console.log(1 > 0);
// true


// 0 false
// 1 true



/*
  undefined
  정의되지 않은 변수가 가지는 데이터 타입

  1 값
*/


// 1 값 - undefined

// var foo;

// console.log(foo);
// undefined



/*
  null
  "없음"을 나타내는 데이터타입

  1 값
*/


// 1 값 - null

// 의도적으로 없음을 나타낼 때 쓰인다
// var foo = null;

// console.log(foo);


/* 
  Q. 데이터 타입

  다음의 고양이에 대한 정보를 변수로 선언해보세요
  (괄호안은 변수의 이름)

  1 이름 (name)
  값: 치즈
  타입: 문자열

  2 집 (home)
  값: 없음 (길고양이)
  타입: null

  3 나이 (age)
  값: 2살
  타입: Number

  4 귀여움 여부(isCute)
  값: 귀여움
  타입: Boolean
*/

// var (variable, 변수) - 변수 선언 예약어

// var name = "치즈";
// var home = null;
// var age = 2;
// var isCute = true;



/*
  기본 메서드
  데이터에 특정한 작업을 수행한다

  1 문자열 메서드
  2 넘버 메서드
*/


/*
  문자열 메서드

  1 toUpperCase / toLowerCase
  2 indexOf
  3 substring
  4 trim
*/



// 1 toUpperCase() / toLowerCase()
// 문자열의 모든 문자를 대문자/소문자로 변환한다

// var foo = "bar";

// console.log(foo.toUpperCase());
// // BAR


// 2 indexOf(검색할 문자열, 위치(옵션, 기본값은 0))
// 인자 문자열의 인덱스를 리턴(반환)한다

// 인자 - 메서드에 전달되는 데이터

// var s = "hello world";

// console.log(s.indexOf("e"));
// // 1
// console.log(s.indexOf("w"));
// // 6
// console.log(s.indexOf("l"));
// // 2 - 첫번째 l의 인덱스를 리턴한다
// console.log(s.indexOf("l", 5));
// // 9 - world의 l의 인덱스
// console.log(s.indexOf("world"));
// // 6 - 첫번째 문자의 인덱스를 리턴한다
// console.log(s.indexOf("bar"));
// // -1 - 인자 문자열이 존재하지 않을 때


// 3 substring(시작 인덱스, 끝인덱스(옵션))
// 문자열에서 특정 문자들을 추출한다

// var s = "hello world";

// console.log(s.substring(0, 4));
// // hell - 끝인덱스 바로 앞 글자까지 추출한다

// console.log(s.substring(0));
// // hello world - 시작 인덱스부터 전부 추출한다 


// trim()
// 문자열의 앞과 뒤의 공백을 제거한다
// 예) 데이터 정제작업 등


// var foo = "  bar  ";

// console.log(foo);
// //  bar  

// console.log(foo.trim());
// // bar


/*
  Number 메서드

  1 toPrecision
  2 isString
*/


// 1 toPrecision(표현할 숫자의 갯수)
// 숫자의 정밀도를 설정한다

// var PI = Math.PI; // 자바스크립트에 내장된 데이터

// console.log(PI);
// // 3.141592653589793 - 기본적으로 16자리 숫자까지 표현


// var precisePI = PI.toPrecision(100);

// console.log(precisePI); // 정밀도 증가



// 2 toString()
// Number 타입 값을 문자열 타입 값으로 변환한다


// var year = 2023;

// console.log(year);
// // 2023
// console.log(typeof year); // 변수의 타입 리턴
// // number


// var year = 2023;

// console.log(year.toString());
// // "2023"
// console.log(typeof year.toString());
// // string



// Q. 메서드 문제
// Q에서 끝까지 모든 문자를 추출해보세요

// var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// var startIndex = alphabet.indexOf("Q");

// console.log(alphabet.substring(startIndex));
// // QRSTUVWXYZ



/*
  연산자

  1 수리연산자
  2 대입연산자
  3 비교연산자
  4 논리연산자
  5 타입연산자
*/


/*
  수리연산자

  1 4칙 연산자
  2 증가 연산자
  3 감소 연산자
  4 지수 연산자
  5 계수 연산자
*/


// 1 4칙 연산자
// +, -, *, /

// var add = 1 + 1;
// var subtract = 2 - 1;
// var divide = 1 / 2;
// var multiply = 1 * 2;


// console.log("1 + 1 =", add);
// console.log("2 - 1 =", subtract);
// console.log("1 / 2 =", divide);
// console.log("1 * 2 =", multiply)


// 문자열과 +를 사용하는 경우

// var s = "hello" + " world";

// console.log(s);
// // hello world


// 문자열과 숫자를 더하는 경우

// var s = "hello " + 2024;

// console.log(s);
// // "hello 2024"
// console.log(typeof s);
// // string


// 2 증가 연산자
// 변수를 1 증가시킨다

// var n = 1;

// n++; // 증가 연산자

// console.log(n);
// // 2


// 3 감소연산자
// 변수를 1 감소시킨다

// var n = 1;

// n--;

// console.log(n);
// // 0



// 4 지수 연산자
// 기수 ** 지수

// var exp = 2 ** 7;

// console.log(exp);
// 128



// 5 계수(나눗셈의 나머지) 연산자
// 나누어지는수 % 나누는 수

// var mod = 5 % 2;

// console.log(mod);
// // 1



/*
  대입 연산자

  1 변수 대입 연산자
  2 더하기 대입 연산자
  3 빼기 대입 연산자
  4 곱하기 대입 연산자
  5 나누기 대입 연산자
  6 지수 대입 연산자
  7 계수 대입 연산자
*/


// 1 변수 대입 연산자

// var foo = "bar"; // = (변수대입 연산자)


// 2 더하기 대입 연산자

// var n = 1;

// n += 1; // += (더하기 대입 연산자)
// // n = n + 1와 같다

// console.log(n);
// // 2


/*
  비교 연산자

  1 동등 연산자
  2 엄격 동등 연산자
  3 비동등 연산자
  4 엄격 비동등 연산자
  5 gt 연산자
  6 gte 연산자
  7 lt 연산자
  8 lte 연산자
*/


/*
  1 동등 연산자

  표현식1 == 표현식2

  두 표현식이 동등하면 참
  두 표현식이 동등하지 않으면 거짓을 리턴한다
*/


// console.log(1 == 2);
// // false
// console.log("foo" == "bar");
// // false
// console.log(0 == false);
// // true
// console.log(2023 == "2023"); 
// // true


/*
  2 엄격 동등 연산자

  표현식1 === 표현식2

  두 표현식이 엄격하게 동등하면 참
  두 표현식이 엄격하게 동등하지 않으면 거짓을 리턴한다
*/


// console.log(1 === 2); 
// // false
// console.log("foo" === "bar");
// // false
// console.log(0 === false); 
// // false
// console.log(2023 === "2023"); 
// // false


/*
  3 비동등 연산자

  표현식1 != 표현식2

  표현식이 동등하지 않으면 참
  표현식이 동등하면 거짓을 리턴한다
*/


// console.log(1 != 2) 
// // true
// console.log("foo" != "bar");
// // true
// console.log(0 != false);
// // false
// console.log(2023 != "2023");
// // false


/*
  4 엄격 비동등 연산자

  표현식1 !== 표현식2

  표현식이 엄격하게 비동등하면 참
  표현식이 엄격하게 동등하면 거짓을 리턴한다
*/


// console.log(1 !== 2) 
// // true
// console.log("foo" !== "bar");
// // true
// console.log(0 !== false); 
// // true
// console.log(2023 !== "2023") 
// // true


/*
  5 gt (greater than) 연산자
  >
  6 gte (greater than or equal to) 연산자
  >=
  7 lt (less than) 연산자
  <
  8 lte (less than or equal to) 연산자
  <=
*/

// console.log(1 > 0);
// console.log(1 >= 0);
// console.log(1 < 0);
// console.log(1 <= 0);


/*
  논리 연산자

  1 그리고
  2 또는
  3 부정
*/


/*
  1 그리고 (&&)
  표현식 1 && 표현식 2

  표현식이 모두 참으로 간주되는 경우 참을 리턴한다
*/


// console.log(1 > 0 && 1 < 2);
// console.log(1 > 0 && -1 > 0)
// false


/*
  2 또는 (||) 
  표현식1 || 표현식2

  둘 중에 하나가 참이거나 둘다 참이면 참을 리턴한다
*/


// console.log(1 > 0 || 1 > 2);
// true


/*
  3 부정 (!)
  !표현식

  표현식을 부정한다
*/


// console.log(!true);
// // false
// console.log(!false);
// // true


// Boolean 타입이 아닌 값을 부정하는 경우

// console.log(!2023);
// // false - 0이 아닌 숫자를 부정하는 경우
// console.log(!0);
// // true
// console.log(!"foo");
// // false
// console.log(!"");
// // true 
// console.log(!null);
// // true



/*
  타입 연산자

  변수의 타입을 리턴한다
*/


// var foo = "bar";

// console.log(typeof foo);
// // string



/*
  Q. 연산자

  다음의 문장을 코드로 작성하고
  결과를 출력해보세요

  1. 빈문자열과 false는 동등하다
  2. null과 false는 동등하지 않다
  3. 1은 true와 같고, 0은 false와 같다
*/


// console.log("" == false);
// console.log(null != false);
// console.log(1 == true && 0 == false)



/*
  조건문

  1 if문
  2 switch 문
  3 삼항연산자 문
*/


/*
  if 문

  1 if 
  2 if / else
  3 if / else if
*/


/*
  1 if 

  if (조건) {
    조건이 참인 경우 실행되는 코드
  }
*/


// var year = 2024;

// if (year === 2024) {
//   console.log("올 해");
// }


// 조건 부분이 Boolean 타입이 아닌 경우

// 빈문자열, null, 0 등은 false로 간주된다
// if ("") {
//   console.log("실행 안될거임");
// }


/*
  2 if / else 

  if (조건) {
    조건이 참인 경우 실행되는 코드
  } else {
    조건이 거짓이 경우 실행되는 코드
  }
*/


// var year = 2024;

// if (year == 2024) {
//   console.log("올해")
// } else {
//   console.log("올해가 아닙니다")
// }


/*
  3 if / else if

  if (조건1) {
    조건1이 참인 경우 실행되는 코드
  } else if (조건2) {
    조건2가 참인 경우 실행되는 코드 
  } else {
    모든 조건이 거짓인 경우 실행되는 코드
  }
*/


// var year = 2024;

// if (year == 2023) {
//   console.log("작년")
// } else if (year == 2024) {
//   console.log("올해")
// } else if (year == 2025) {
//   console.log("내년")
// } else { // 옵션
//   console.log("가까운 년도가 아닙니다")
// }


/*
  switch 문
  인자와 케이스 사이에서
  엄격 동등연산을 수행한다

  1 기본 사용방법
  2 default 
*/

// 1 기본 사용 방법
 
// var year = 2024;

// switch (year) {
//   case 2023:
//     console.log("작년");
//     break;

//   case 2024:
//     console.log("올해");
//     break;

//   case 2025:
//     console.log("내년");
//     break;
// }

// 올해


// default
// 모든 케이스가 거짓인 경우 default 코드가 실행된다

// var year = 2030;

// switch (year) {
//   case 2023:
//     console.log("작년");
//     break;

//   case 2024:
//     console.log("올해");
//     break;

//   case 2025:
//     console.log("내년");
//     break;

//   default:
//     console.log("가까운 년도가 아닙니다")
// }


/*
  삼항연산자 (?) 문

  조건 ? 값1 : 값2

  조건이 참인 경우 값1
  조건이 거짓인 경우 값2를 리턴한다
*/


// var year = 2024;

// var r = year === 2024 ? "올해" : "올해가 아닙니다"

// console.log(r);
// // 올해



/*
  Q1. 나이 변수에 따라서 사람이 성인인지 아닌지를
  출력하는 조건문을 만들어 보세요

  1 if / else 문
  2 삼항연산자 문
*/


// 1 if / else

// var age = 20;

// if (age >= 18) {
//   console.log("성인입니다")
// } else {
//   console.log("성인이 아닙니다")
// }


// // 삼항연산자

// var age = 20;

// var r = age >= 18 ? "성인입니다" : "성인이 아닙니다"

// console.log(r)



/*
  Q2. 차의 이름을 입력하면 가격을 알려주는
  switch 문을 만들어보세요
  (판매중인 차가 아니라면 적절한 메시지를 출력하세요)

  <하이브리드/전기차 리스트>

  1 아반떼 하이브리드
  2500
  2 XM3 하이브리드
  3000
  3 코나
  4500
  4 아이오닉6
  5000
*/


// var car = "XM3 Hybrid";

// switch (car) {
//   case "Avante Hybrid":
//     console.log(2500);
//     break;

//   case "XM3 Hybrid":
//     console.log(3000);
//     break;

//   case "KONA":
//     console.log(4500);
//     break;

//   case "IONIQ 6":
//     console.log(5000);
//     break;

//   default:
//     console.log("판매중인 차가 아닙니다");
// }



/*
  반복문
  블록의 코드를 여러번 실행한다

  1 for 문
  2 while 문
*/


/*
  for 문

  1 기본 사용법
  2 실제 사용사례
  3 break
  4 continue
*/


/*
  1 기본 사용법

  for (표현식1; 표현식2; 표현식3) {
    반복할 코드
  }

  표현식1 - 반복 변수의 초기값 설정
  표현식2 - 반복 조건
  표현식3 - 변수 업데이트 연산
*/


// for (var n = 1; n <= 10; n++) { // 블록 (block)
//   // 블록안에서 반복 변수에 접근 가능
//   console.log(n + "번 실행되었습니다")
// }



// 2 사용 사례
// 1부터 10까지의 합을 구하시오

// var sum = 0;

// for (var n = 1; n <= 10; n++) {
//   // 누적
//   sum += n; // sum = sum + n
// }

// console.log(sum);
// // 55


/*
  break

  특정 조건을 만족하는 경우 반복문을 빠져나온다
*/


// for (var n = 1; n <= 10; n++) {
//   if (n == 5) {
//     break;
//   }

//   console.log(n);
// }


// 4 continue
// 특정 조건을 만족할 때 현재 블록을 스킵한다

// for (var n = 1; n <= 10; n++) {
//   if (n == 5) {
//     continue;
//   }

//   console.log(n);
// }


/*
  while 반복문

  while (반복 조건) {
    반복할 코드
  }
*/


// 변수의 초기값 설정
// var n = 1;

// while (n <= 10) {
//   console.log(n + "번 실행되었습니다");

//   // 변수 업데이트 연산
//   n++;
// }


// var n = 1;

// while (n <= 10) {
//   n++;

//   console.log(n + "번 실행되었습니다")
// }


// while 문에서도 break, continue 사용 가능


// var n = 1;

// while (true) {
//   if (n == 5) {
//     break;
//   }

//   console.log(n);

//   n++;
// }


// Q. while 문으로 1부터 10까지의 합을 구하는 코드를
// 작성해보세요


// var n = 1;
// var sum = 0;

// while (n <= 10) {
//   sum += n;

//   n++;
// }

// console.log(sum);


// Q2. 1부터 10까지의 숫자중 짝수만 출력하는 코드를
// 작성해보세요 (for 문)


// for (var n = 1; n <= 10; n++) {
//   if (n % 2 == 0) { // 짝수
//     console.log(n);
//   }
// }

// for (var n = 1; n <= 10; n++) {
//   if (n % 2 == 1) { // 홀수
//     continue;
//   }

//   console.log(n);
// }

// for (var n = 2; n <= 10; n += 2) {
//   console.log(n);
// }



/*
  변수 (Variable)
  값을 저장하는 컨테이너

  1 기본 사용법
  2 전역변수와 지역변수
*/


// 1 기본 사용법

// 변수 초기화 (선언 및 값 할당)
// var foo = "bar";

// console.log(foo);


// // 선언
// var foo;

// // 나중에 정의
// foo = "bar";

// console.log(foo);
// // bar


// 정의
// var foo = "bar";

// // 재정의
// foo = "baz";

// console.log(foo);
// // baz



/*
  전역변수와 지역변수

  1 전역 변수 (global variable)
  2 지역 변수 (local variable)
*/


/*
  1 전역 변수
  소스코드 어디에서든지 접근가능한 변수
*/


// var varInGlobal = true;

// console.log(varInGlobal);
// // true


/*
  2 지역 변수
  함수 안에서 선언된 변수.
  선언된 함수 내에서만 접근 가능하다
*/


// function f() {
//   // 지역 변수
//   var varInFunction = true;
// }

// // 함수 밖에서 변수에 접근 시도
// console.log(varInFunction);

// // 함수 호출
// f();

// // ReferenceError: varInFunction is not defined
// // varInFunction이 정의되지 않았다



/*
  함수 (function)
  호출할때에만 실행되는 코드.
  기능의 단위로 사용된다

  1 함수 선언과 호출
  2 Hoisting
  3 매개변수와 인자
  4 return
  5 콜백
*/


// 1 함수 선언과 호출

// 함수 선언 및 정의
// function f() { // 정의
//   console.log("foo");
// }

// // 호출
// f();
// f();


// 함수 선언

// 변수에 익명함수를 할당한다 - 함수표현식
// var f = function () {
//   console.log("foo");
// }

// // 호출
// f();


/*
  Hoisting (게양)

  함수의 정의를 호출시점보다 아래에 작성할 수 있다
  일종의 가독성 옵션

  * 함수표현식에는 적용되지 않는다
*/


// f();

// function f() {
//   console.log("foo");
// }



/*
  매개변수와 인자

  1 매개변수 (Parameter)
  인자를 치환한 변수

  2 인자 (arguments)
  함수에 실제로 입력되는 값
*/

// 두개의 인자를 더해서 결과를 출력하는 함수

// function add(x, y) { // x, y - 매개변수
//   console.log("결과:", x + y);
// }

// add(1, 2); // 1, 2 - 인자
// // 결과: 3



/*
  return

  함수는 연산의 결과를 반환(return)할 수 있다
*/


// function add(x, y) {
//   return x + y;
// }

// // add함수가 반환한 값을 변수 r에 저장한다
// var r = add(1, 2);

// console.log("결과:", r);
// // 결과: 3


// 작업을 중단시킬때 return을 사용할 수 있다

// function isNegative(n) {
//   if (n < 0) {
//     console.log("음수입니다");
//     return;
//   }

//   // return 아래 코드는 실행되지 않는다
//   console.log("음수가 아닙니다");
// }

// isNegative(-1);
// // 음수입니다


/*
  콜백 (Callback)
  함수인자

  1 기본사용법
  2 실제 활용 예시
*/


// 1 기본 사용법

// function f(callback) {
//   var foo = "bar";

//   // f함수 안에서 콜백 호출
//   callback(foo);
// }

// function cb(data) { // 콜백
//   console.log(data);
// } 

// f(cb);


// 2 실제 활용 예시

// function getTime() {
//   // 현재시간
//   var time = new Date().toLocaleTimeString();
  
//   console.log(time);
// }

// // setInterval(콜백, ms) - ms마다 콜백을 실행한다
// // 1000ms = 1s
// setInterval(getTime, 1000);



// Q1. 나이를 입력하면 사람이 성인인지 아닌지를 출력하는 함수를 만들어보세요


// function isAdult(age) {
//   if (age >= 18) {
//     console.log("성인입니다")
//   } else {
//     console.log("성인이 아닙니다")
//   }
// }

// isAdult(20);
// // 성인입니다


// Q2. 인자(자연수)를 전달하면 1부터 인자까지의 합을 구해서
// 반환하는 함수를 만들어보세요
// 예) 10을 전달하면 1부터 10까지의 합을 구한다



// function f(m) {
//   var sum = 0;

//   for (var n = 1; n <= m; n++) {
//     sum += n;  
//   }

//   return sum;
// }

// var r = f(10);

// console.log(r);



/*
  배열 (Array)
  한개 이상의 값을 가지는 데이터 타입

  1 구조
  2 기본 사용법
  3 배열 메서드
  4 배열 순회
*/


// 1 구조

// 각 값 - 아이템
// var arr = [10, 20, 30];

// console.log(arr);


/*
  기본 사용법

  1 아이템에 접근하기
  2 아이템 바꾸기
  3 아이템의 갯수 구하기
*/


// 1 아이템에 접근하기

// var arr = [10, 20, 30];

// // 인덱스로 접근
// console.log(arr[0]); // 10
// console.log(arr[1]); // 20
// console.log(arr[2]); // 30


// 2 아이템 바꾸기

// var arr = [10, 20, 30];

// // 새 값 대입
// arr[2] = 99;

// console.log(arr)
// // 10, 20, 99


// 3 아이템 갯수 구하기

// var arr = [10, 20, 30];

// console.log(arr.length);
// 3


/*
  Q. 기본 사용법 문제

  1 탑5 자동차 제조사 리스트(문자열 배열)을 만들어보세요
  - 볼보, BMW, 현대, 토요타, 포드

  2. 최근 토요타가 연비조작사건으로 나락으로 가게 생겼습니다
  토요타를 기아로 바꾸어보세요
*/


// var top5brands = ["볼보", "BMW", "현대", "토요타", "포드"];

// // 도요타를 기아로 바꾸기
// top5brands[3] = "기아"

// console.log(top5brands)


/*
  배열 메서드
  배열에 특정한 작업을 수행한다

  1 push
  2 pop
  3 concat
  4 splice
  5 sort
*/


/*
  1 push(새아이템1, 새아이템2, ...)

  배열의 마지막에 새 아이템(들)을 추가한다
*/


// var arr = [10, 20];

// arr.push(30);

// console.log(arr);
// // 10, 20, 30


/*
  2 pop()

  배열의 마지막 아이템을 제거한다
*/


// var arr = [10, 20, 30];

// arr.pop();

// console.log(arr);
// // 10, 20


/*
  3 concat(배열1, 배열2, ..)

  새로운 배열들을 기존의 배열 뒤에 연결(concatenation)한다
  연결된 배열을 리턴한다
*/


var arr1 = [10, 20];
var arr2 = [30, 40];

var r = arr1.concat(arr2); 

// console.log(r);
// 10, 20, 30, 40


/*
  4 splice
  원하는 위치에 아이템을 추가하거나 삭제할 수 있다

  - 사용방법
  splice(시작인덱스, 삭제갯수, 새아이템1, 새아이템2, ..)
  시작인덱스는 필수
*/

// 1
// var arr = [10, 20, 30, 40];

// // 인덱스2에 해당하는 아이템부터 그 뒤의 모든 아이템 삭제
// arr.splice(2);

// console.log(arr);
// // 10, 20


// 2
// var arr = [10, 20, 30, 40];

// // 인덱스2의 아이템부터 뒤로 1개의 아이템을 삭제한다
// arr.splice(2, 1);

// console.log(arr);
// 10, 20, 40


// 3
// var arr = [10, 20, 30, 40];

// // 인덱스2의 아이템부터 뒤로 1개의 아이템을 삭제하고
// // 그 자리에 99를 추가한다
// arr.splice(2, 1, 99);

// console.log(arr);
// // 10, 20, 99, 40


/*
  5 sort
  아이템을 정렬한다
  숫자 배열인 경우 오름차순
  문자열 배열의 경우 알파벳순
*/


// var arr = [10, 30, 20];

// arr.sort();

// console.log(arr);
// // 10, 20, 30


/*
  Q1. 배열메서드

  자동차 리스트의 마지막에 새 자동차를 추가해보세요
*/

// var cars = ["스타리아", "아반떼", "아이오닉6"];
// var newCar = "캐스퍼";

// cars.push(newCar);

// console.log(cars);


/*
  Q2. 배열 메서드

  아시아 자동차 리스트(배열)을 만들어보세요
*/


// var koreanCars = ["현대", "기아"];
// var japaneseCars = ["렉서스", "닛싼", "토요타"];

// var asianCars = koreanCars.concat(japaneseCars);

// console.log(asianCars);



/*
  배열 순회 (loop)
  배열에 특정한 작업을 수행한다

  1 배열의 각아이템 업데이트하기
  2 배열 필터링하기
*/


// 1 배열의 각 아이템 업데이트
// 각 아이템에 10을 곱해야 하는 경우

// var arr = [10, 20, 30];

// // 변수 i를 인덱스로 활용한다
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 10);
// }


// 2 배열 필터링
// 성인만 출력해야 하는 경우

// var ages = [12, 19, 23, 30];

// for (var i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     console.log(ages[i]);
//   }
// }


/*
  Q1. 배열 순회
  각 브랜드의 이름을 대문자로 출력해보세요

  결과:
  APPLE
  SAMSUNG
  HUAWEI
*/

// var brands = ["apple", "samsung", "huawei"];

// for (var i=0; i < brands.length; i++) {
//   console.log(brands[i].toUpperCase());
// }



/*
  Q2. 배열 순회

  b로 시작하는 아이템을 출력해보세요

  결과:
  bar
  baz
*/

// var arr = ["foo", "bar", "baz"];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i][0] == "b") {
//     console.log(arr[i]);
//   }
// }


// var cars = ["그랜저", "소나타", "캐스퍼"];

// var r = cars.join("와 ");

// console.log(r);
// console.log(typeof r);
// // 그랜저, 소나타, 캐스퍼


// var cars = ["레이", "카니발", "K6"];

// var r = cars.includes("싼타페"); // 포함여부

// console.log(r);
// // false


// var cars = ["레이", "카니발", "K6"];

// var r = cars.indexOf("카니발");

// console.log(r);
// 1


/*
  객체 (Object)
  데이터와 함수의 집합
  데이터를 다루기 위한 기본 단위로 활용된다

  1 구조
  2 기본 사용방법
*/


/*
  구조

  1 속성 (property)
  객체가 가진 데이터
  key와 value로 구성된다

  2 메서드 (methods)
  속성 중에서 값(value)이 함수인 것을 특별히 메서드라고 부른다
*/


// var cat = {
//   // key: value
//   name: "치즈",
//   home: null,
//   sound: function () { // 메서드
//     return "야옹";
//   }
// }


// console.log(cat);


/*
  Q. 객체의 구조

  "korea"라는 이름의 객체를 선언해보세요

  - 속성
  1 수도 (Capital city)
  값: 서울
  타입: 문자열

  2 인구 (Population)
  값: 5000
  타입: Number

  3 언어 (Language)
  값: 한국어
  타입: 문자열

  4 G7 여부
  값: 아니오
  타입: Boolean

  - 메서드
  1 K-POP 재생기능
  케이팝 음악을 재생한다
*/


// var korea = {
//   capitalCity: "서울",
//   population: 5000,
//   language: "한국어",
//   isG7: false,
//   kpop: function() {
//     return "내가 만든 쿠키~"
//   }
// }


// console.log(korea);


/*
  기본 사용법

  1 속성에 접근하기
  2 속성 추가 / 수정
  3 속성 삭제
*/


// 1 속성에 접근
// var cat = {
//   name: "치즈",
//   home: null,
//   sound: function () {
//     return "야옹";
//   }
// }


// // name
// console.log(cat.name); // 치즈
// console.log(cat["name"]); // 치즈
// // home
// console.log(cat.home); // null
// // 없는 속성에 접근 시도
// console.log(cat.color); // undefined
// // 메서드 호출
// console.log(cat.sound()); // 야옹


// 2 속성 추가 / 수정

// var cat = {
//   name: "치즈",
//   home: null
// };

// // 속성 추가
// cat.age = 2;

// // 메서드 추가 (함수표현식)
// cat.sound = function () {
//   return "야옹";
// }

// console.log(cat);

// // 속성 수정
// cat.home = "삼산동"; // 입양됨

// console.log(cat)


// 4 속성 삭제

// var cat = {
//   name: "치즈",
//   home: null
// }

// delete cat.home; // 개냥정보 침해

// console.log(cat);


/*
  Q1. 기본 사용법

  판매중인 맥주의 이름만 출력해보세요
  (available - true)

  결과:
  Heineken
  Budwiser
  Kirin
*/


// var beers = [
//   { name: "Guinness", origin: "Ireland", available: false },
//   { name: "Heineken", origin: "Netherlands", available: true },
//   { name: "Budwiser", origin: "USA", available: true },
//   { name: "Kirin", origin: "Japan", available: true },
// ]


// for (var i = 0; i < beers.length; i++) {
//   if (beers[i].available == true) {
//     console.log(beers[i].name);
//   }
// }


/*
  Q2. 기본 사용법

  아일랜드 맥주가 재입고 되었습니다
  객체에 반영해보세요
*/


// var irishBeer = {
//   name: "기네스",
//   origin: "아일랜드",
//   available: false // 판매중(available)
// };


// irishBeer.available = true;

// console.log(irishBeer);


/*
  클래스 (Class)
  객체 생성을 위한 틀
  효율적인 객체 관리를 위해 사용된다

  1 클래스의 구조
  2 인스턴스
  3 생성자
  4 함수 멤버
  5 static 멤버
  6 내장된 클래스
  7 자바스크립트에서 넓은 의미에서의 객체
*/


/*
  클래스의 구조

  1 클래스 선언
  2 클래스 멤버
*/


// 1 클래스 선언

// 클래스의 이름은 대문자로 시작해야 한다
// class ClassA {
//   // 클래스 정의
// }


// 2 클래스 멤버 - 클래스에 속한 데이터

// class Beer {
//   // 변수 멤버
//   name;
//   origin;
//   available;

//   // 함수 멤버
//   drink() {
//     return "시원하다!";
//   }
// }


/*
  인스턴스 (instance)
  클래스로부터 생성된 객체

  1 인스턴스 생성 방법
  2 instanceof 연산자
  3 여러개 인스턴스 생성하기
*/

// // 1 인스턴스 생성 방법
// class Beer {
//   name;
//   origin;
//   available;
// }

// // Beer 클래스의 인스턴스
// var irishBeer = new Beer();

// // 인스턴스에 속성값 할당
// irishBeer.name = "Guinness"
// irishBeer.origin = "Ireland"
// irishBeer.available = false;

// console.log(irishBeer);

// // 클래스의 인스턴스인지 확인한다
// console.log(irishBeer instanceof Beer); // true


// 3 여러개의 인스턴스 생성하기
// class Beer {
//   name;
//   origin;
//   available;
// }

// var irishBeer = new Beer();
// irishBeer.name = "Guinness"
// irishBeer.origin = "Ireland"
// irishBeer.available = false;

// var dutchBeer = new Beer();
// irishBeer.name = "Heineken"
// irishBeer.origin = "Netherlands"
// irishBeer.available = true;

// var americanBeer = new Beer();
// irishBeer.name = "Budwiser"
// irishBeer.origin = "USA"
// irishBeer.available = true;

// console.log(irishBeer instanceof Beer); // true
// console.log(dutchBeer instanceof Beer); // true
// console.log(americanBeer instanceof Beer); // true


/*
  생성자 (constructor)

  인스턴스의 속성 설정을 처리한다
*/

// class Beer {
//   name;
//   origin;
//   available;

//   constructor (name, origin, available) {
//     // this - 인스턴스
//     this.name = name;
//     this.origin = origin;
//     this.available = available;
//   }
// }


// var irishBeer = new Beer("Guinness", "Ireland", false);
// var dutchBeer = new Beer("Heineken", "Netherlands", true);
// var americanBeer = new Beer("Budwiser", "USA", true);


/*
  함수 멤버

  인스턴스의 메서드가 된다
*/


// class Beer {

//   // ..

//   // 함수 멤버
//   drink() {
//     return "시원하다!";
//   }
// }

// var beer = new Beer();

// console.log(beer.drink());


/*
  static 멤버

  클래스와 관련된 유용한 기능을 제공한다
  클래스 자체가 호출한다
*/


// class Beer {
  
//   // ..

//   // static 변수
//   static history = "기원전 3000년 전";

//   // static 함수
//   static brewing() { // 양조(만드는 법)
//     return "밀, 홉, 효모, 물 등";
//   }
// }

// // 호출
// console.log(Beer.history);
// console.log(Beer.brewing());


// 내장된 클래스의 static 속성
// console.log(Math.PI);


// 완성된 Beer클래스

// class Beer {
//   name;
//   origin;
//   available;

//   constructor (name, origin, available) {
//     this.name = name;
//     this.origin = origin;
//     this.available = available;
//   }

//   drink() {
//     return "시원하다!";
//   }

//   static history = "기원전 3000년 전";

//   static brewing() {
//     return "밀, 홉, 효모, 물";
//   }
// }


/*
  Q. 클래스
  다음을 만족하는 <Car>클래스를 선언해보세요

  - 변수 멤버
  1 name
  2 brand (브랜드)
  3 color

  - 생성자 있음

  - 함수 멤버
  1 sound (배기음)
  자동차 소리를 리턴한다

  - static 함수
  1 getAge
  구매 연도를 입력하면 차의 나이를 알려준다
*/


// class Car {
//   // 변수 멤버
//   name;
//   brand;
//   color;

//   // 생성자
//   constructor (name, brand, color) {
//     this.name = name;
//     this.brand = brand;
//     this.color = color;
//   }

//   // 함수 멤버
//   sound() {
//     return "부릉";
//   }

//   // static 함수
//   static getAge(y) {
//     return "차의 나이: " + (2024 - y);
//   }
// }

// // 인스턴스
// var car = new Car("GV80", "제네시스", "블랙");

// console.log(car);

// // 메서드
// console.log(car.sound());

// // static 함수 호출
// console.log(Car.getAge(2022));


/*
  자바스크립트에 내장된 클래스

  1 문자처리: String
  2 숫자 및 날짜: Number, Math, Date
  3 컬렉션: Array
  4 에러: SyntaxError, ReferenceError, 기타 에러
  5 기타: Promise, JSON, Object
*/

// 내장된 클래스 활용 예시

// 현재 시간
// var time = new Date().toLocaleDateString();
// 수학관련 데이터
// var PI = Math.PI;


/*
  넓은 의미에서 자바스크립트에서의 객체

  1 예
  2 리터럴 표기법
*/


// 1 예
// 넓은 의미에서 모든 값은 객체이다

// var foo = "bar"; // 객체

// // 메서드 호출
// console.log(foo.toUpperCase());


// 2 리터럴 표기법

// String 클래스의 인스턴스

// var foo = "bar"; // 우항에 값만 작성 - 리터럴 표기법
// var foo = new String("bar");


// 리터럴 표기 불가
// var date = new Date();

// console.log(date);


/*
  에러와 예외

  1 에러 
  2 예외
*/


/*
  에러 (Error)
  
  debugging (bug를 잡는다)

  에러는 프로그램을 중단시킨다
  에러는 반드시 고쳐야 한다
*/


// console.log(foo);
// name: ReferenceError
// message: foo is not defined
// stack: 나머지


/*
  예외 (Exception)

  의도적으로 발생시키는 에러 (필요한 경우)

  예) 인증절차
*/


// 사용자가 로그인을 시도할때 입력한 비밀번호
// var input = "12";
// // 올바른 비밀번호
// var password = "123";

// // 인증실패 처리
// if (input != password) {
//   // 예외를 던진다(throw)
//   throw "비밀번호가 일치하지 않습니다";
// }


// 예외 처리
// try / catch 구문

// var password = "123";
// var input = "12";

// try { // 코드 작성
//   if (input != password) {
//     throw "비밀번호가 일치하지 않습니다";
//   }
  
//   // 실행되지 않는다
//   console.log("로그인 성공");

// } catch (error) { // 에러 처리
//   console.log("로그인 실패:", error);
// }



/*
  비동기 작업
  프로그램에서 블로킹(blocking)을 방지하기 위해 사용된다
  예) 서버에서 데이터를 가져올 때
  
  * blocking - 중단, 정체

  1 동기 작업
  2 비동기 작업
*/


// 동기 작업 (Synchronous operation)
// 작업이 순서대로 실행된다

// function f() {
//   console.log("작업 1");
// }

// f();
// console.log("작업 2");



// 비동기 작업(Asynchronous operation)
// 빠른 작업부터 실행된다

// 서버에서 데이터를 가져오는 과정 (가정)

// 서버에 데이터를 요청하는 함수
// function getData(callback) {
//   // 서버에서 데이터를 가져오는데 1초가 걸린다고 가정
//   setTimeout(function () {
//     callback(null, "야옹");
//   }, 1000);
// }

// // 데이터 요청
// getData(function (err, data) {
//   if (err) {
//     return console.error(err);
//   }

//   console.log("서버에서 전달받은 데이터:", data);
// });

// console.log("다음 작업");


/*
  JSON

  1 JSON 개념
  2 JSON.stringify
  3 JSON.parse
*/


/*
  JSON 개념

  JavaScript Object Notation(자바스크립트 객체 표기법)의
  약자.
  객체를 저장하거나 전송하기 위한 텍스트 포맷
*/


// var cat_json = '{ "name": "치즈" }';

// console.log(typeof cat_json); // string



// JSON.stringify()
// 객체를 JSON으로 변환한다

// 객체
// var cat = { name: "치즈" };

// var cat_json = JSON.stringify(cat);

// console.log(cat_json);
// // '{ "name": "치즈" }'
// console.log(typeof cat_json);
// // string


// JSON.parse()
// JSON을 객체로 변환한다



// var cat_json = '{ "name": "치즈" }';

// var cat = JSON.parse(cat_json);

// console.log(cat); // 객체
// console.log(typeof cat); // object


/*
  let, const

  1 let
  2 const
  3 블록 범위
*/


/*
  let
  변수 선언 예약어
  var과 사용법이 거의 같다
*/


// let foo = "bar";


// 재선언 불가
// let foo = "bar";
// let foo = "baz";


/*
  const

  상수(constant) 선언 예약어
*/


// 다음의 형태로만 사용 가능
// const foo = "bar";


/*
  블록 범위
  let과 const는 블록 범위를 갖는다
*/


// { // 블록 (block)
//   var varInBlock = true;
//   let letInBlock = true;
//   const constInBlock = true;
// }


// 블록 밖에서 접근 시도

// console.log(varInBlock); 
// 접근 가능
// console.log(letInBlock);
// 접근 불가 - letInBlock is not defined (정의되지 않음)
// console.log(constInBlock);
// 접근 불가 - constInBlock is not defined (정의되지 않음)


/*
  ES5 & ES6 메서드

  1 배열 메서드
  2 기타 메서드
*/


/*
  배열 메서드

  1 forEach
  2 map
  3 filter
*/


/*
  1 forEach

  - 사용 방법
  forEach(콜백)

  콜백의 인자

  1 item
  배열의 각 아이템

  2 index
  각 아이템의 인덱스

  3 self
  원본 배열
*/


// 각 아이템에 10을 곱해야 하는 경우
// var arr = [10, 20, 30];

// arr.forEach(function (item, index, self) {
//   // item - 10, 20, 30
//   // index - 0, 1, 2
//   // self - arr (원본배열)
//   console.log(item * 10);
// })


/*
  map

  forEach와 사용법이 거의 같다
  새 배열을 리턴한다
*/


// 각각의 아이템에 10을 곱한 아이템의 배열이 필요한 경우
// var arr = [10, 20, 30];


// // 새배열을 newArr 변수에 저장한다
// var newArr = arr.map(function (item, index, self) {
//   return item * 10;
// })


// console.log(newArr);
// // [100, 200, 300]


/*
  filter

  필터링된 새 배열을 리턴한다

  - 사용 방법
  filter(콜백)

  콜백의 인자 - item, index, self
*/


// 성인들로만 이루어진 배열이 필요한 경우
// var ages = [13, 20, 34, 40];


// var adults = ages.filter(function (age, index, self) {
//   // return + 필터링 조건
//   return age >= 18;
// })

// console.log(adults);
// // [20, 34, 40]


/*
  Q. 배열 메서드

  아래의 배열을 참고하여 다음 문제들을 풀어보세요

  1 판매중인 맥주의 이름만 출력해보세요

  결과:
  Heineken
  Budwiser
  Kirin

  2 판매중인 맥주로만 이루어진 배열을 만들어보세요
*/


var beers = [
  { name: "Guinness", available: false },
  { name: "Heineken", available: true },
  { name: "Budwiser", available: true },
  { name: "Kirin", available: true },
]


// 1
// beers.forEach(function (beer) {
//   if (beer.available) { // beer.available == true
//     console.log(beer.name);
//   }
// })


// 2
// var availableBeers = beers.filter(function (beer) {
//   return beer.available;
// })

// console.log(availableBeers);

// availableBeers.forEach(beer => {
//   console.log(beer);
// })


/*
  기타 메서드

  1 Object.keys
*/


/*
  Object.keys(객체)

  객체의 키들을 문자열 배열로 리턴한다
*/


// var cat = {
//   name: "치즈",
//   home: null,
//   sound: function () {
//     return "야옹";
//   }
// }


// var keys = Object.keys(cat);

// console.log(keys);
// // [name, home, sound]


/*
  화살표 함수

  익명함수를 더 간단하게 쓰는 방법

  1 기본 사용방법
  2 중괄호 생략
  3 매개변수 괄호 생략
*/


// 기본 사용 방법


// 기존의 방법
// var f = function () {
//   console.log("foo");
// }


// 2024년
// var f = () => {
//   console.log("foo");
// }


// 중괄호 생략


// 두개의 인자를 더해서 반환하는 함수
// var add = (x, y) => {
//   return x + y;
// }

// // 호출
// var r = add(1, 2);

// console.log(r);


// 중괄호를 생략하는 경우 화살표 뒤의 코드를 리턴한다
// var add = (x, y) => x + y;

// var r = add(1, 2);

// console.log(r);



// 매개변수 괄호 생략


// 매개변수가 하나인 경우 괄호 생략 가능
// var pow = n => n ** 2;
// // pow (power) - 거듭제곱을 구하는 함수

// var r = pow(5);

// console.log(r);
// 25


/*
  구조분해할당 (Destructing)

  1 배열 구조분해할당
  2 객체 구조분해할당
*/


/*
  배열 구조분해할당

  간단하게 배열의 아이템을 변수에 할당할 수 있다
*/


// 기존의 방법
// var beers = ["Guinness", "Heineken", "Budwiser"];

// var irishBeer = beers[0];
// var dutchBeer = beers[1];
// var americanBeer = beers[2];

// console.log(irishBeer);
// console.log(dutchBeer);
// console.log(americanBeer);


// 구조분해할당 방법
// var beers = ["Guinness", "Heineken", "Budwiser"];

// // 구조분해할당
// var [irishBeer, dutchBeer, americanBeer] = beers;

// console.log(irishBeer);
// console.log(dutchBeer);
// console.log(americanBeer);


// 매개변수에서
// var beers = ["Guinness", "Heineken", "Budwiser"];

// f(beers);

// // 구조분해할당
// function f([irishBeer, dutchBeer, americanBeer]) {
//   console.log(irishBeer);
//   console.log(dutchBeer);
//   console.log(americanBeer);
// }


/*
  Q. 배열구조분해할당

  각각의 브랜드를 구조분해할당으로 변수에 할당해보세요
*/


// var asianCars = ["현대", "토요타"];

// var [koreanCar, japaneseCar] = asianCars;

// console.log(koreanCar);
// console.log(japaneseCar);


/*
  객체 구조분해할당

  객체의 속성을 간단하게 변수에 할당할 수 있다
*/


// 기존의 방법
// var irishBeer = { 
//   name: "Guinness", 
//   origin: "Ireland", 
//   available: false 
// }

// var name = irishBeer.name;
// var origin = irishBeer.origin;
// var available = irishBeer.available;

// console.log(name);
// console.log(origin);
// console.log(available);


// 구조분해할당 방법
// var irishBeer = { 
//   name: "Guinness", 
//   origin: "Ireland", 
//   available: false 
// }

// // 구조분해할당
// var { name, origin, available } = irishBeer;

// console.log(name);
// console.log(origin);
// console.log(available);


// 매개변수에서
// var irishBeer = { 
//   name: "Guinness", 
//   origin: "Ireland", 
//   available: false 
// }

// f(irishBeer); 

// // 구조분해할당
// function f({ name, origin, available }) {
//   console.log(name);
//   console.log(origin);
//   console.log(available);
// }


/*
  Q. 구조분해할당

  구조분해할당후 객체의 각 속성에 접근해보세요
*/

// var car = { 
//   name: "GV80", 
//   color: "Black",
//   brand: "GENESIS" 
// };


// var { name, color, brand } = car;

// console.log(name);
// console.log(color);
// console.log(brand);


/*
  스프레드 연산자 (Spread Operator)

  1 배열에서 사용
  2 객체에서 사용
*/


/*
  배열에서 사용

  배열의 아이템을 간단하게 복사할 수 있다
  
  - 사용방법
  ...복사할 배열
*/


// var beers = ["Guinness", "Heineken"];
// var newBeer = "Budwiser";

// var updatedBeers = [...beers, newBeer];

// console.log(updatedBeers) 


/*
  Q. 배열

  스프레드 연산자를 사용하여 아시아 자동차 리스트를 만들어보세요
*/


// var koreanCars = ["현대", "기아"];
// var japaneseCars = ["토요타", "혼다"];


// var asianCars = [...koreanCars, ...japaneseCars];

// console.log(asianCars);


/*
  객체에서 사용

  객체의 속성을 간단하게 복사할 수 있다

  - 사용방법
  ...복사할 객체
*/


// var cat = {
//   name: "치즈",
//   age: 1,
//   home: null
// }

// // 치즈가 삼산동으로 입양됨
// var updatedCat = { ...cat, home: "삼산동" };

// console.log(updatedCat);


/*
  Q. 객체에서 사용
  기네스가 재입고 되었습니다
  스프레드 연산자를 사용하여 업데이트된 객체를 생성해보세요
*/


// var irishBeer = { 
//   name: "Guinness", 
//   origin: "Ireland", 
//   available: false 
// };


// var updatedIrishBeer = { ...irishBeer, available: true };

// console.log(updatedIrishBeer);


/*
  프로미스 (Promise) 객체

  비동기 작업의 결과와 데이터를 저장한다
  비동기 작업의 가독성을 향상시킨다

  1 프로미스의 구조
  2 async / await 
*/


/*
  프로미스의 구조

  1 res, rej 함수

  1) res (resolve)
  작업이 성공했을 때 호출된다

  2) rej (rejected)
  작업이 실패했을 때 호출된다


  2 프로미스의 결과 (상태)

  1) fullfilled
  비동기 작업의 성공

  2) rejected
  비동기 작업의 실패

  3) pending
  성공 또는 실패를 기다리는 상태


  3 프로미스의 메서드

  1) then
  성공했을 때 데이터를 처리하는 메서드

  2) catch
  실패했을 때 에러를 처리하는 메서드

  3) finally
  최종 작업을 처리하는 메서드
*/


// 프로미스 객체
// const promise = new Promise((res, rej) => {
//   // 비동기 작업의 성공
//   res("야옹");
// })

// // 프로미스 객체 사용
// promise
//   .then((data) => { // 데이터를 처리하는 부분
//     console.log("서버에서 받은 데이터:", data);
//   })
//   .catch((error) => { // 에러를 처리하는 부분
//     console.log("에러:", error);
//   })


/*
  async / await

  프로미스 작업의 가독성을 향상시킨다
  try / catch 구문과 함께 사용된다
*/


// const promise = new Promise((res, rej) => {
//   res("야옹");
// })

// async function f() {
//   try {

//     // 프로미스 객체가 결과를 반환할 때까지 기다린다(await)
//     const data = await promise;

//     console.log("서버에서 받은 데이터:", data);
  
//   } catch (error) { // 에러처리
//     console.log("에러:", error);
//   }
// }

// f();