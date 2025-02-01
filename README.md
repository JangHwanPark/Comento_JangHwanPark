## [Comento 프론트엔드 현직자와 함께하는 개발 직무 A to Z](https://comento.kr/classroom/15182])

## Week 1
- 개발 환경 설정 (Web Storm - (InteliJ))
- Github repository 생성
- 자기소개 페이지 작성 (수정 필요)

## Week 2
### 프로젝트
- 계산기 프로젝트 (레이아웃 및 기능구현)
- 자판기 프로젝트 (레이아웃 및 기능구현)

### 기본기 다지기
- HTML 박스모델 정리 및 예제코드 생성
- HTML display 속성 정리 및 예제코드 생성
- HTML id 와 class 정리 및 예제코드 생성
- HTML 레이아웃 정리 및 예제코드 생성

## Week 3
### 시계 프로젝트
- 최초 실행시 배터리는 100% (초당 1%씩 감소)
- 배터리를 모두 소모하면 검은화면 출력
- 시/분/초를 설정하고 추가를 누르면 알람이 추가
- 최대 3개 알람까지 가능
- (추가기능)

### 기본기 다지기
- HTML 의 form 과 action
- JS Dom
- JS 이벤트 리스너
- JS 이벤트 루프
- JS var, let... const
- JS Array 메소드
- JS Rest parameter
- JS 화살표 함수 (외 다른함수)
- JS 1급 객체
- JS Object 개념

## Week 4
### 회원가입 및 로그인이 가능한 투두 리스트
#### 공통 작업
- 폼 생성 (`componentForm` 활용)
- 유효성 검사 및 에러 처리 (`validateField`, `showError`, `removeError` 등)
- 로컬스토리지 활용 (회원 정보 저장 및 검증)

#### 로그인 (index.html)
##### ✅ 구현 기능
- ID 및 비밀번호 입력
- 유효성 검사: 공백 검사, 아이디 존재 여부 확인, 비밀번호 일치 여부 확인
- 로그인 성공 시: 투두 리스트 페이지(/todo/index.html)로 이동
- 에러 처리: showError를 사용하여 .error 영역에 메시지 출력

##### 🛠️ 주요 함수
- handleSignIn(form): 로그인 이벤트 핸들러
- isValidSignInFields(form): 로그인 폼 유효성 검사
- getUserData(id): 로컬스토리지에서 사용자 데이터 가져오기

##### 회원가입 (/register/index.html)
##### ✅ 구현 기능
- 입력 필드: 아이디, 비밀번호, 비밀번호 확인, 닉네임, 이메일, 휴대폰 번호, 인증번호
- 유효성 검사: 공백, 길이 제한, 특수문자 검사, 이메일 형식, 비밀번호 일치 검사
- 인증번호 발송 및 검증
- 회원 정보 저장: 로컬스토리지에 users 데이터 저장

##### 🛠️ 주요 함수
- handleSignUp(form): 회원가입 이벤트 핸들러
- isValidSignUpFields(form): 회원가입 폼 유효성 검사
- isAuthVerification(form): 인증번호 검증
- saveUserInfo(form): 회원 정보 저장

##### 투두 리스트 (/todo/index.html)
##### ✅ 구현 기능
- 할 일 추가 / 삭제
- 유효성 검사: 빈 입력값 방지
- 이벤트 위임 활용: 동적으로 생성된 요소에 이벤트 적용
- 로컬스토리지 저장: 할 일 목록 저장 및 유지

##### 🛠️ 주요 함수
- handleAddTodo(form): 할 일 추가
- handleDeleteTodo(e): 할 일 삭제
- componentTodoItem(text): 할 일 목록 동적 생성
- useAddEvent(parent, targetSelector, eventType, callback): 이벤트 위임
