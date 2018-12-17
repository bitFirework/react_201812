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
* Module
  - import : 상대경로이다.

* Webpack
  - 여러 개의 js파일들을 하나의 js파일로 번들링한다.
  - 자바스크립트 모듈 번들러 : 모듈들이 포함하는 정적 자원(CSS, image 등) 들을 번들링하여 모듈을 생성함
  - 가장 핵심은 loader와 plugin
  - webpack 내부 : node + express인 개발 서버를 지원한다.
  - HMR(Hot Module Replacement) 지원
    + 코드가 수정될 때마다 페이지 자동갱신
  - 책은 webpack 3.x 버전, PPT는 webpack 4.x 버전
* Webpack 개발 서버
  - 로컬 개발을 위한 webpack 옵션
* cross-env
  - 윈도우와 리눅스, MacOS는 환경변수를 설정하는 방법이 다르기 때문에 cross-env를 사용할 것을 권장한다.
  - --hot : HMR(Hot Module Replacement) 지원. 코드 수정 후 저장하면 즉시 화면에 반영됨.
* css 모듈화
  - 모듈화 : 코드를 명시적으로 선언된 독립적인 단위로 분할하는 작업
  - 컴포넌트 단위로 스타일을 적용하여야 한다.
* Webpack 4대 loader
  - entry
  - output
  - module(loaders)
  - plugins
* Plugin 이란
  - webpack에서 사용가능한 추가기능 제공
  - 빌드프로세스 과정에 플러그인을 주입시켜 Custom 동작이 가능하게 함
  - loader VS plugin
    + Loader는 리소스 파일(js, css, image, html등)을 로딩할때 동작
    + plugin은 빌드 프로세스 과정에서 동작
  - CommonChunkPlugin(Webpack 3.x), SplitChunkPlugin(Webpack 4.x) : 이름이 바뀜
    + 하나의 js파일을 로딩하기에는 시간이 너무 오래 걸릴 수 있으니, 여러개의 파일로 나누어서 번들링하는 플러그인
  - HtmlWebpackPlugin
  - UglifyJsPlugin
    + Webpack 4.x 버전에서 production mode로 빌드하면 난독화가 기본으로 적용되어 있다.
  - ExtractTextPlugin
    + 모든 CSS에 대한 require, import를 별도의 css 출력 파일로 옮겨서 JS에서 스타일을 인라인으로 추가할 필요가 없도록 해줌
      = CSS 텍스트 파일을 묶어서 번들링한 뒤 하나 또는 여러개의 css 파일로 생성함.

* create-react-app
  - 내부적으로 yarn packager을 사용한다.
  - npm install -g webpack
  - yarn global add webpack
  - windows에서 npm으로 yarn을 설치한 경우 yarn global add 는 할 수 없다. 해서는 안된다. 하지만 해야 할 경우는 yarnpkg.com 에서 window 버전의 yarn 설치 파일을 설치해야 한다.
  - <pre><code>create-react-app tempapp</code></pre>
  - 'react-scripts' 안에 많은 node module이 포함되어 있다.
  - react-scripts eject 는 묶여있던 내용들을 풀어버린다. (되돌릴 수 없음. 주의 필요!)


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
  - babel은 ES2015 코드를 ES5(ES2016) 코드로 트랜스파일 함.
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
* yarn
  - npm이 공식이지만, yarn이 속도가 더 빠르다.
  - create-react-app은 내부적으로 yarn을 사용한다.