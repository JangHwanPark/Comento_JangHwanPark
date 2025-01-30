/**
 * label: 입력 필드의 제목
 * name: 필드의 고유 식별자 (HTML name 속성)
 * type: 입력 필드의 유형 (text, password, email, date 등)
 * placeholder: 사용자 입력을 돕기 위한 힌트
 * required: 필수 입력 여부 (true 또는 false)
 * minLength, maxLength: 입력 값의 최소 및 최대 길이 (옵션)
 * pattern: 특정 형식의 입력값을 요구하는 정규식 (옵션)
 * options: radio 타입에서 사용 가능한 선택지 목록 (옵션)
 */
export const LOGIN_DATA = [
  {
    label: "아이디",
    name: "id",
    type: "text",
    placeholder: "아이디를 입력하세요",
    required: true,
    value: "janghwan01",
  },
  {
    label: "비밀번호",
    name: "pwd",
    type: "password",
    placeholder: "비밀번호를 입력하세요",
    required: true,
    minLength: 8,
    maxLength: 20,
    value: "qlalfqjsgh12@",
  }
];

export const REGISTER_DATA = [
  {
    label: "아이디",
    name: "id",
    type: "text",
    placeholder: "아이디를 입력하세요",
    required: true,
    minLength: 4,
    maxLength: 16,
    value: "janghwan01",
  },
  {
    label: "비밀번호",
    name: "pwd",
    type: "password",
    placeholder: "비밀번호를 입력하세요",
    required: true,
    minLength: 8,
    maxLength: 20,
    value: "qlalfqjsgh12@",
  },
  {
    label: "비밀번호 확인",
    name: "pwd_confirm",
    type: "password",
    placeholder: "비밀번호를 다시 입력하세요",
    required: true,
    value: "qlalfqjsgh12@",
  },
  {
    label: "닉네임",
    name: "nickname",
    type: "text",
    placeholder: "닉네임을 입력하세요",
    required: true,
    minLength: 2,
    maxLength: 12,
    value: "HelloWorld",
  },
  {
    label: "이메일",
    name: "email",
    type: "email",
    placeholder: "example@email.com",
    required: true,
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    value: "janghwan01@example.com",
  },
  {
    label: "휴대폰 번호",
    name: "phone",
    type: "tel",
    placeholder: "01012345678",
    required: true,
    pattern: "^01[0-9]-[0-9]{3,4}-[0-9]{4}$",
    value: "01012345678",
  },
  {
    label: "인증 번호",
    name: "authentication",
    type: "text",
    placeholder: "인증 번호를 입력하세요",
    required: true,
    value: "",
  }
];

export const TODO_DATA = [

]