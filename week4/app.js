// DOM이 완전히 로드된 후 실행
import {createAuthElement, createForm} from "./components/Auth.js";
import {LOGIN_DATA, REGISTER_DATA} from "./data/form.js";
import {loginForm, registerForm} from "./data/dom.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM 로드 완료");
  // ✅ DOM 요소 가져오기

  // ✅ 로그인 폼 생성
  if (loginForm) createForm(loginForm, LOGIN_DATA);

  // ✅ 회원가입 폼 생성
  if (registerForm) {
    createForm(registerForm, REGISTER_DATA);
    createAuthElement();   // 인증번호 필드 생성
  }
});