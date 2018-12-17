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
 ** babel명령어 : babel src -d build
 
 
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
 - <pre><code>console.log(A1);var A1 = "hello";
 function test() { console.log("강사바보!!") } 
 test() 
 function test() { console.log("강사만세!!") }
 </code></pre>
 - 변수를 선언하기도 전에 사용하지만 변수를 hoisting 과정에서 변수를 메모리 할당해놓은 상태라서 변수는 만들어진 상태.
