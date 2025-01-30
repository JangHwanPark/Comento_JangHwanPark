// DOM이 완전히 로드된 후 실행
import {createAuthElement, createRegisterForm} from "./components/Auth.js";

window.addEventListener("DOMContentLoaded", () => {
  createRegisterForm();  // 기본 입력 필드 생성
  createAuthElement();   // 인증번호 필드 생성
});