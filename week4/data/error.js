import {isValidEmail, isValidPhone} from "../service";

/** 공통 에러 메시지 관리 객체 */
export const ERROR_MESSAGES = {
  empty: (label) => `${label} 는 필수 입력 항목입니다.`,
  length: (label, min, max) => `${label}의 입력값은 ${min}~${max}자 사이여야 합니다.`,
  invalidCharacters: "허용되지 않는 문자가 포함되어 있습니다.",
  invalidEmail: "이메일 형식이 올바르지 않습니다.",
  invalidPhone: "휴대폰 번호 형식이 올바르지 않습니다. (예: 01012345678)",
  authCodeEmpty: "인증번호를 입력해 주세요.",
  authCodeMissing: "인증번호가 생성되지 않았습니다.",
  authCodeMismatch: "입력한 인증번호가 올바르지 않습니다.",
  invalidPassword: "비밀번호는 최소 8자 이상이어야 합니다.",
  passwordMismatch: "비밀번호가 일치하지 않습니다.",
  duplicate: (label) => `이미 사용 중인 ${label}입니다.`,
};

/** 검증할 필드 목록 정의 */
export const getFields = () => [
  {name: "user_id", label: "아이디", min: 4, max: 16, checkSpecial: true},
  {name: "password", label: "비밀번호", min: 8, max: 20},
  {name: "password_confirm", label: "비밀번호 확인", match: "password"},
  {name: "nickname", label: "닉네임", min: 2, max: 12},
  {name: "email", label: "이메일", validateFn: isValidEmail, errorKey: "invalidEmail"},
  {name: "phone", label: "휴대폰 번호", validateFn: isValidPhone, errorKey: "invalidPhone"},
];