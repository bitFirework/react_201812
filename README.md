# react_201812

## 강의 소개
* 원형섭 강사
* email : stepanowon@hotmail.com

## 개발 환경설정
  * node : v10.14.2
  * Editor : VSCode
  * nvm : 여러가지 node version을 바꿔가며 쓸 수 있다.
  * VSCode 확장 : Babel ES6/ES7, Reactjs code snippets, view-in-browser
  * 크롬에 추가 : React Developer Tools 
  ** 크롬 확장팩 세부사항에서 '파일 URL에 대한 액세스 허용' 체크
  * npm 설정 : npm install -g babel-cli babel-preset-env babel-preset-stage-2
  * testapp npm 설정 : npm install babel-cli babel-core babel-preset-env babel-preset-stage-2 --save-dev
  
## 1일차
* testapp
 - babel명령어 : babel src -d build
* Destructuring
* Arrow Function
* Javascript Design Pattern
  - 캡슐화 : 이전 방식은 모듈 패턴 방식, 요즘은 export를 이용한다.
* Promise 패턴
  - Callback Hell을 해결하기 위한 방법
  - 자바스크립트 비동기 처리를 수행하는 추상적인 패턴
* 비동기에 대한 처리 방법
  - Callback -> Promise -> async ~ await -> RxJS
  - RxJS 공부할 것!
  - 예외처리를 제대로하려면 Promise가 나은 방법이라고 생각함(강사님)

## 용어
* React
* ES2015(ES6)
* webpack
* Component
* JSX
* Redux
* SPA (Single Page App)
* Babel
  - https://babeljs.io/repl
  - babel은 ES2015(ES6) 코드를 ES5 버전이 코드로 번역해주는 트랜스파일러임.
* 가상 DOM (Virtual DOM)
  - 동영상 소개 : https://www.youtube.com/watch?v=BYbgopx44vo
* npm
 - --global : 컴퓨터 어디에서든
 - --save-dev : 개발환경에서만 필요한 경우
 - --save : production 에서도 필요한 경우
* source map
 - 트랜스파일된 코드로 실행하지만 디버깅은 원본 코드로...
* hoisting
 - <pre><code>console.log(A1); var A1 = "hello"; function test() { console.log("강사바보!!") } test() function test() { console.log("강사만세!!") }</code></pre>
 - 변수를 선언하기도 전에 사용하지만 변수를 hoisting 과정에서 변수를 메모리 할당해놓은 상태라서 변수는 만들어진 상태.
* 가변 파라미터(Rest Operator)
  - 마지막에 배치해야 함.
* 구조 분해 할당(★ Destructuring)
  - 배열, 객체의 값들을 여러 변수에 추출하여 할당할 수 있도록 하는 새로운 표현식
* 화살표 함수 표현식(★ Arrow Function Expression)
  - this에 대한 접근이 다르기 때문에 일반 function 사용과 구별해서 사용해야 한다.
  - 바깥쪽 this가 안에 this로 자동으로 전달이 된다.(function 안에 function을 사용한 상태) : 이전에는 apply, bind를 이용해서 전달했다.
  - javascript에서는 class랑 function이랑 같다.
* this
  - 객체 자기 자신? 바인딩 시점? 
  - (JAVA) instance가 만들어질 때 this가 주어진다.
  - (Javascript) 호출 중인 메서드를 보유한 객체
  - (Javascript) 바인딩 시점? 메서드, 함수를 호출할 떄마다 바인딩됨.
  - this를 강제로 지정 
    -- <pre><code>test.apply(obj, [4,5])</code></pre>
  - 호출하는 시점이 중요하다. 호출하는 주체가 없으면 window가 생략된 상태이다. test(); : window.test();
* window 
  - 전역 객체
* bind
  - 기존 함수의 this를 obj로 못을 박아버린 새로운 함수를 리턴한다.
    -- <pre><code>var test2 = test.bind(obj)</code></pre>
* 메소드 : obj 내의 속성이 function인 경우 메소드라고 한다.
* export : export한 것은 public, 안한것은 private 라고 생각하면 된다.