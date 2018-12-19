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
* Webpack 4대 loader(핵심?)
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
    + 상세한 설정이 필요한 경우 eject 후 설정을 수정한다.

## 1일차 정리
* React : Library -> Framework라고 불리게 될 정도가 되었다(feat. +Redux+Router)
* 빠른 UI (VirtualDOM 때문에 빠르다)
* ES6를 거의 필수적으로 사용
  - Destructuring, Promise, Class, Spread Operator
* SPA -> webpack
  - Parcel이 새로 뜨고 있다. 설정이 간단해서 다만, webpack처럼 많은 plugin을 포함하지 않고 있다.
* webpack : loader + plugin
* webpack의 중요한 4대 구성 : entry, output, module(loaders), plugins


## 2일차
### 4장
* PWA 
  - 좀 더 발전된 웹앱
  - React에서 PWA로 구현하기 위해서 중요한게 serviceWorker이다.
* Reactjs code snippets
  - Reactjs code snippets을 사용
  - rcc( ReactClassComponent) : Class Component skeleton 코드를 자동 생성할 수 있다.
* React 생명주기 
* 함수형 컴포넌트 : 생명주기 이벤트 사이클을 쓰지 못하는 단점이 있다.
  - ES6 클래스 기반의 컴포넌트 : 함수형 컴포넌트에 비해 렌더링 속도가 느림
    + 강사님 Tip : 클래스 기반의 컴포넌트는 html 구조를 볼 때 편하므로, 클래스 기반 컴포넌트로 개발 후에 함수형 컴포넌트를 쓰면 속도를 향상 시킬 수 있다.
* ES6 클래스 기반의 컴포넌트 vs 함수형 컴포넌트
  - React는 클래스 기반의 컴포넌트가 기본이다.

* JSX
  - 선언적 XML 스타일의 자바스크립트 확장 문법
  - 대소문자 구분함
  - 값은 모두 HTML Encoding 되어 출력됨
    + XSS 공격 때문에 자동으로 HTML Encoding을 수행함.
  - 단일 루트 요소만 렌더링할 수 있음. (React.Fragement)
* map 
  - return된 갑을 모아서 새로운 배열을 만드는게 map이다.
* 속성 : props
  - 컴포넌트가 외부로부터 데이터를 전달받기 위해 사용
    + 부모 컴포넌트 -> 자식컴포넌트로 정보 전달
    + 전달받은 속성의 값은 그 컴포넌트에서 변경하지 않는다(※변경 추적이 안된다. 부모가 전달한 속성을 자식이 변경하는 경우로 하지 않아야 한다. 되기는 된다.)
  - 컴포넌트 세분화
    + 부모와 자식간에 컴포넌트를 세분화한다.
    + 부모 단에 State를 구성하여 Data를 관리, 추적한다.
  - 속성의 전달방향 : 부모 컴포넌트 --> 자식 컴포넌트
  - Callback 메소드

* 전개 연산자
  - Rest Operator는 Spread Operator라고도 부름
~~~
var obj = [10, 20, 30];
var arr = { 111, ...obj, 999 };
~~~
  - {...item} -> no={item.no} country={item.country} ...
  - 변경을 방지하기 위한 목적
  - 여러 속성을 한번에 전달하기도 편함.

* 상태 : state
  - 컴포넌트가 보유하는 데이터
  - 속성을 통해서 자식 컴포넌트로 전달할 수 있음.
  - 상태의 변경은 보유하고 있는 컴포넌트에서만 수행함.
    + 속성을 통해 자식컴포넌트로 전달된 경우 자식컴포넌트에서 상태 변경 불가.
* 상태 컴포넌트와 무상태 컴포넌트
  - 상태 컴포넌트 : stateful component
    + 자신의 상태를 가지는 컴포넌트
  - 무상태 컴포넌트 : stateless component
    + 
  - 컨테이너 컴포넌트 : 상태만 가지고 있는 컴포넌트

* 상태의 초기화와 변경
  - 상태의 변경은 setState() 메서드를 이용해야 함.
    + 생성자에서 초기화할 때만 this.state = {}을 허용함.
    + react engine에게 rerender하라는 명령이 포함되어 있음.

### 5장
* 컴포넌트 스타일링
  - React Native는 인라인 스타일만 가능하다(?)
  - styled-component
    + Template Literal, Tagged Template Literal 사용
    + style이 지정된 컴포넌트를 만들어 준다.
  
* 속성 심화
  - 속성의 유효성 검증
    + 컴포넌트 기반으로 개발할 때 컴포넌트의 속성은 다음을 쉽게 식별할 수 있어야 함.
    + 이를 위해 속성의 유효성 검사 기능이 필요함.
  - 유효성 검증 방법 
    + PropTypes
    + Flow
    + Typescript
  - 지정 가능한 유효성 검증 타입
    + 함수를 이용한 커스텀 유효성 검증
      = props : 속성
      = propName : 속성명
      = componentName : 컴포넌트명
  - 속성의 기본값 지정
    + defaultProps
* 설계가 중요하다
  1. UI 시안
  2. Component 도출, 필요로 하는 Data, Stateful, Stateless
  3. 부모 StateTree, 자식 Props : Redux의 State
  4. Mehtod, State를 변경하는 : Reduce

* 이벤트 기초
  - 이벤트와 상태 변경
    + 상태의 변경은 상태를 보유한 컴포넌트 객체에서만 가능함.
    + 상태의 변경은 반드시 setState() 메서드를 이용해서만 가능함. this.state를 직접 변경하는것은 하면 안된다.
* 제어컴포넌트와 비제어 컴포넌트
  - 제어컴포넌트를 더 권장함
  - 값 변경이 없다가 마지막 버튼을 눌러서 처리하고 싶으면 : 비제어 컴포넌트
  - 실시간으로 값이 바뀌는게 필요하면 : 제어 컴포넌트

* 상태 심화
  - 상태와 불변성
    + 불변성을 왜 확보하는가? : render, re-render 최적화를 위해 사용한다고 생각하면 된다.
    + 불변성 확보해주는 library
      = immutability-helper (MongoDB 써본 사람은 익숙하다. update가)
      = immutable.js
      = immer.js (핫하다)
    + 강의에서 책은 immutability-helper를 썻지만, 실제로는 immer를 사용해서 실습할 것임.
    + Redux를 쓰려면 불변성을 확보해야한다.
  - 불변성
    + https://codesandbox.io : 웹상에서 react 개발할 수 있는 사이트
    + immer 성능은 나쁘지 않다. ES5에서 괜찮은 성능을 낸다.
  ~~~
  npm install immer
  ~~~
* 상태 컴포넌트 vs 비상태 컴포넌트
  - 상태의 보유 여부에 따른 컴포넌트의 유형
  - 비즈니스 로직 기능과 표현 기능으로 구분하는 방법
* 부모-자식 컴포넌트간의 통신
  - this를 주의할 것.
  - callback method
  - 간단한 앱이라면 지금 예제로 가능하지만, 대규모 애플리케이션의 경우는 효과적으로 관리할 수 있는 기능이 필요함.(ex: Flux 아키텍처)
* Todolist 앱 작성
  - shortid 를 이용해서 고유키를 만들 수 있다.
    + ex) shortid, 유휴 id 등을 이용해서 고유키를 만들 수 있다.
  - this를 잘 구분해야 함. (arrow function 과 일반 function 일 때 bind 해주냐 마냐의 처리가 필요함)

## 2일차
### 6장 컴포넌트 심화
* 컴포넌트 생명주기 메서드
  - React v16.2와 v16.3 이후는 다르다.
  - 책은 v16.2기준으로 작성되었다.
  ---------------------- v16.2 이전
  - 컴포넌트가 생성되거나 상태나 속성이 업데이트되거나 할 때 자동으로 호출되는 메서드
  - 컴포넌트 마운트 시, Render (Virtual DOM에 Render를 한다.)
  - constructor(props) : 생성자
  - componentWillMount()
  - componentDidMount()
  - componentWillReceiveProps(nextProps)
  - shouldComponentUpdate(nextProps, nextState)
    + 여기에서 사용하기 위해 불변성을 사용.
    + shallowCompare를 하여 바뀌지 않으면 return false로 변경되지 않았다는 것을 명시한다.
  - componentWillUpdate(nextProps, nextState)
  - componentDidUpdate(prevProps, prevState)
  - ? 실제 DOM과 VirtualDOM의 내용이 다를 수도 있다. 동기는 어떻게 하나?
  - componentWillUnmount
  - componentDidCatch(error, info)
  ---------------------- v16.3 이후
  - v16.3 이후는 componentWillMount(), componentWillUpdate(), componentWillReceiveProps() 는 deprecated 되었다.
  - 위의 3개가 Deprecate되었고 그에 대해 static getDerivedStateFromProps(), getSnapshotBeforeUpdate() 가 생겼다.
* 가상DOM과 조정 작업
  - React의 render는 VirtualDOM에 대한 render이다.
  - 이전 VirtualDOM과 새로운 VirtualDOM을 비교하여 차이가 나는 부분만을 업데이트.
  - Vue는 View가 업데이트 되는 부분은 자동으로 해준다.
  - Virtual DOM
    + DOM에 대한 추상화된 객체
    + 그냥 Data이다. 실제 UI는 아님. 업데이트 속도가 빠르다.
  - key특성
    + key는 index가 아니라 고유한 값을 부여해야 한다.
    + index의 경우는 list 중에 하나의 item이 삭제되면 index가 바뀌게 되기 때문이다.
    + rendering을 최적화하기 위해서 사용한다.
* PureComponent
  - shouldComponentUpdate()가 shallowCompare 하도록 이미 구현되어 있음
  - App.js에서 constructor가 아닌 곳에 bind를 하게 되면 App이 render하는 경우 bind가 계속 실행되어 새로운 객체를 return하게 된다. 그렇기에 consturctor부분에서 bind를 해줘야 한다.
* 고차 컴포넌트
  - HOC : Higher Order Component
  - 컴포넌트를 입력값으로 받아 새로운 기능을 축하여 다시 리턴하는 컴포넌트
* Portal
  - render할 떄 자식 요소를 부모 컴포넌트의 DOM 트리 밖에 존재하는 DOM 요소 내에 추가할 수 있는 기능
  - 언제 사용할까?
    + Modal, Hover, Tooltip과 같이 메인화면과 독립적인 UI를 구성하고자 할 때.
  - 이벤트 버블링
    + body -> container -> button 인 상태에서 button의 onClick이 실행되면 container의 onClick과 body의 onClick이 실행되는 것.
    + ? React는 VirtualDOM 수준에서 이벤트를 한 곳에 설정하기 떄문에 이벤트 버블링이 가능하다 (강사님 : <onClick={ }> : Virtual DOM으로 이벤트를 상위 한 곳에 설정해놓는다?)
  - v15 이전에는 직접 만들었지만 v16이후는 Portal.js를 만들지 않는다
  - v16 이후는 react-portal을 추가
  ~~~
  yarn add react-portal
  npm install --save react-portal
  ~~~
* 컴포넌트의 설계
  - 컴포넌트를 설계할 때 고려할 점
    + 재사용성
    + 관리성
    + Rendering 과정 최적화
      = ListItem을 List와 분리시킨 이유 : 재사용성 + Rendering 최적화
    + 상속보다는 조합 방식을 사용
      = UI와 관련없는 기능은 고차함수
      = UI와 관련있는 기능은 조합
    + 여러 컴포넌트에서 공통적으로 사용하는 기능은?
      = 상속보다는 고차 컴포넌트!!
      = 공통 로직의 분리가 핵심 : 로직을 구체화시키고 공통 로직을 찾아내 분리함.
* React Performance Devtool
  - 크롬 개발자 도구에도 Performance를 확인할 수 있도록 제공하지만
  - 간편하게 보기위해서는 React Performance Devtool을 사용하는 것도 좋다.

### 7장 axios를 이용한 통신
* HTTP 통신 라이브러리
  - axios 이외에도 jquery ajax, fetch, superagent 등이 있음
    + jquery ajax는 Promise를 사용하지 않아서 권하지 않는다. 쓰면 안된다.
  - 이 중 axios가 최근에 가장 많이 사용됨.
  - es6-promise를 참조하면 IE에서도 사용가능하다.
* 크로스 도메인 문제 해결
  - Cross Domain 문제란?
    + SOP : Same Origin Policy, 브라우저의 기본 보안 정책
  - 크로스 도메인 문제 해결 방법
    + 컨슈머 서버측에 프록시 요소 생성
    + 서비스 제공자측에서 CORS기능을 제공
    + 서비스 제공자측에서 JSONP기능을 제공
  - 우리가 개발하는 것은 컨슈머 애플리케이션
    + CORS나 JSONP는 서비스제공자가 지원해야 함.
    + 컨슈머 서버에 프록시 요소를 설정할 수 있음
  - 빌드 된 ReactApp을 다양한 웹 서버에 실제 배포할 경우는 node.js 서버나 다른 웹 기술로 서버를 구성해야 한다.
    + Apache Tomcat
      = Http Proxy Servlet
      = https://github.com/mitre/HTTP-Proxy-Servlet
    + Apache Web Server
      = 내장된 Proxy 기능이 있다.
      = proxy, proxyReverse
    + node.js + express
      = http proxy middleware 
      = https://github.com/chimurai/http-proxy-middleware
* 






## 용어 정리
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
* 보간법(Interpolation)
* PWA
* Hybrid Desktop App
  - ex) Electron
* Kebab Casing (Kebab-case)
  - ex) background-color
* Sass
  - 중첩구조 허용 등 css보다 발전된 형태
  - 다만, csss가 아니기에 트랜스파일 해야 한다.(sass-loader를 이용해서)
* 서버사이드 렌더링
  - React는 브라우저에서 렌더링을 한다.
  - 서버사이드 렌더링은 ...?
* 이벤트 버블링
  - body -> container -> button 인 상태에서 button의 onClick이 실행되면 container의 onClick과 body의 onClick이 실행되는 것.
* Cross Domain 문제란?
  - SOP : Same Origin Policy, 브라우저의 기본 보안 정책
* Origin
  - 문자열, 이곳에서 page를 받았다.
~~~
location.origin
~~~
  - 브라우저에서 위의 명령어로 확인 가능.
* 다양한 웹 서버 Proxy 설정
  - Apache Tomcat
    + Http Proxy Servlet
    + https://github.com/mitre/HTTP-Proxy-Servlet
  - Apache Web Server
    + 내장된 Proxy 기능이 있다.
    + proxy, proxyReverse
  - node.js + express
    + http proxy middleware 
    + https://github.com/chimurai/http-proxy-middleware


## 기타
* Local NPM Server
  ~~~
  local-npm
  npm set registry http://127.0.0.1:5080
  ~~~
* React는 Publisher와 Front-end 개발자가 같이 일하기 힘든 구조다.
  - Publisher가 react를 알던가
  - Front-end 개발자가 Publish를 알던가
  - 정리하면, 광범위하게 아는 사람이 일해야하는 구조이다.
  - 그래서 강사님은 Vue를 선택함. (한국에서는 Publisher나 Front-end개발을 외주를 쓰는 경우가 많기 때문에)
* 공짜로 서비스 할 수 있는 곳.
  - netlify
    + 무료로 쓸 수 있는 서비스.
    + front-end
  - heroku
    + node에 express기반으로 서비스 만든다.
    + back-end
  - MongoDB Atlas
    + Data크기 1GB 까지 무료로 쓸 수 있다.
