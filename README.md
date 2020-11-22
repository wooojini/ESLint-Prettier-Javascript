# Javascript ESLint-Prettier 

## 린트(Lint) or 린터(Linter)
- 코드의 오류나 버그, 스타일을 점검하는 것을 린트 혹은 린터라 한다
- 코드의 품질, 포맷팅을 검사해준다
- 코드의 가독성을 높이는 것 뿐만 아니라 동적 언어의 특성인 런타임 버그를 예방하는 역할을 한다
- 협업시 동일한 코드 스타일을 유지하기위해 사용할 수 있다 

## ESLint
- 린터는 여러가지 종류가 존재한다
    -  JS Lint, JS Hint, ESlint 등
- ESLint는 ECMAScript 코드에서 문제점을 검사하고 일부는 더 나은 코드로 정정하는 린트 도구 중의 하나
- 코드의 가독성을 높이고 잠재적인 오류와 버그를 제거해 단단한 코드를 만드는 것이 목적

## 코드 검사 항목
- 포맷팅(formatting)
    - 일관된 코드 스타일을 유지
    - "들여쓰기 규칙", "코드 라인의 최대 너비 규칙" 등
    - 가독성 향상을 위한 포맷팅
- 코드 품질
    - 어플리케이션의 잠재적인 오류나 버그를 예방하기 위함
    - 사용하지 않는 변수 쓰지 않기, 글로벌 스코프 함부로 다루지 않기 등
    - 오류 발생 확률을 줄여 준다

## 설치 및 사용법
- ESLint는 node.js 패키지이므로, node.js 설치 및 npm과 같은 노드 패키지 매니저도 설치

- [ESLint - Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started)

```
    npm install -D eslint
```
- ESLint 설정파일 생성
    - .eslintrc.js
    - Node.js 모듈을 반환하여 린트 옵션을 설정한다
```
    module.exports = {}
```
- 실행
    - Node package.json에 빌드 스크립트로 정의해도된다
```
    npx eslint 경로(폴더명 or 파일명)
```

## 규칙(Rules)
- ESLint를 적용하려면 코드 검사 규칙을 설정해주어야한다
- rules 프로퍼티로 옵션 정의
- [ESLint - Rules(공식문서)](https://eslint.org/docs/rules/)
    - 체크표시가 있는 옵션은 추천 옵션
    - fix표시가 있는 옵션은 자동수정 옵션
        - --fix 옵션을 추가하면 자동수정 옵션에 대해서 수정해준다 
        - npx eslint app.js --fix
```
module.exports = {
  rules: {
    "no-unexpected-multiline": "error",
  },
}
```

## Extensible Config
- 여러가지 규칙을 미리 정해 모아놓은 규칙 세트를 설정할 수도 있다
- eslint:recommended : 체크표시가 있는 검사규칙을 모아놓은 규칙 세트
- eslint-config-airbnb-base
    - [airbnb 스타일 가이드](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- eslint-config-standard
    - [자바스크립트 스탠다드 스타일](https://github.com/standard/eslint-config-standard)
```
module.exports = {
  extends: [
    "eslint:recommended",
  ],
}
```

## env
- 린트를 실행할 환경을 설정할 수 있다
- 예를들어 환경설정을 안해주면, console.log()와 같은 코드는 린트에서 console이 정의되어있지 않은 것으로 분류한다
```
env: {
    es6: true,
    node: true,
    browser: true,
}
```

## parser
- ESLint는 구문 분석을 위해 기본적으로 Espree 파서를 사용
- babel-eslint : Babel과 함께 사용되는 파서
- @typescript-eslint/parser : Typescript 구문 분석을 위해 사용

## parserOptions
- ESLint 사용을 위해 지원하려는 Javascript 언어 옵션을 지정
- ecmaVersion: 사용할 ECMAScript 버전
- sourceType: parser의 export 형태
- ecmaFeatures: ECMAScript의 언어 확장 기능
    - globalReturn: 전역 스코프의 사용 여부
    - impliedStric: strict mode 사용 여부
    - jsx: ECMScript 규격의 JSX 사용 여부
```
parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true
    }
},
```

## processor
- 다른 형식의 파일로 부터 Javascript 코드를 추출 후, Lint를 수행하는 전처리기(preprocessor)와 후처리기(postprocessor)를 작성하는 용도로 사용
- eslint-plugin-markdown
    -  markdown 문서의 Javascript 코드블록에 대해서 정적분석을 수행하고 린팅을 적용
```
{
  "plugins": ["a-plugin"],
  "processor": "a-plugin/a-processor"
}
```
```
{
  ...
  module.exports = {
    processors: {
      ".markdown": processor,
      ".mdown": processor,
      ".mkdn": processor,
      ".md": processor
    }
  }
}
```

## plugin
- ESLint는 서드파티 플러그인 사용을 지원
- 플러그인 패키지를 설치하고, 해당 플러그인을 plugins에 추가하여 사용
- eslint-plugin- 접두사는 생략이 가능
```
{
  "plugins": [
    "eslint-plugin-react"
  ]
}
```

## 초기화
- --init 옵션을 추가하면 쉽게 설정파일을 구성할 수 있다

## Prettier
- Prettier는 포맷팅을 수행한다
- ESLint와 충돌되는 부분이 있지만, prettier가 더 이쁜 스타일로 만들어준다
- Prettier는 자동으로 구문을 분석해서 수정해준다
- 코드 품질에 대해서는 검사해주지 않는다


## Prettier 설치 및 사용
- --write 옵션을 사용하면 자동으로 수정해준다

```
    npm install -D prettier
    npx prettier app.js --write
```


## ESLint - Prettier 통합
- 코드 품질은 ESLint를 활용
- 코드 포맷팅은 Prettier를 활용
- eslint-config-prettier
    - Prettier와 충돌하는 ESLint 규칙을 끄는 역할
- eslint-plugin-prettier
    - Prettier 규칙을 ESLint 규칙으로 추가하는 플러그인
    - ESLint만 실행해주면 된다
```
    npm install -D eslint-config-prettier
    npm install -D eslint-plugin-prettier
```
- prettier 옵션 추가
    - endOfLine : 라인의 끝에 EOF 문자를 추가
```
plugins: [
    "prettier"
],
rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  }
```
- 두 패키지를 함께 사용하는 단순한 설정을 제공
```
extends: ["plugin:prettier/recommended"]
```
## 자동화
- Git Hook을 이용하는 방법
    - Git commit 변경전에 ESLint를 적용한다
- 에디터 확장도구를 사용하는 방법
    - 코드를 작성하는 순간에 적용가능해서 훨씬 편하다
    - ESLint 확장 프로그램 추가 및 enable 설정
    - 에디터 설정 추가
        - 저장 단축키 입력시 자동으로 eslint 수행
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```


## 참고자료
- [김정환블로그-프론트엔드 개발환경의 이해: 린트](https://jeonghwan-kim.github.io/series/2019/12/30/frontend-dev-env-lint.html)
- [ESLint 설정 살펴보기](https://velog.io/@kyusung/eslint-config-2)
