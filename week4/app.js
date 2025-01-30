// DOM이 완전히 로드된 후 실행
import {createAuthElement, createForm} from "./components/Form.js";
import {LOGIN_DATA, REGISTER_DATA} from "./data/form.js";

window.addEventListener("DOMContentLoaded", () => {
  // ✅ DOM 요소 가져오기
  const registerForm = document.querySelector(".register");
  const loginForm = document.querySelector(".login");
  const todoForm = document.querySelector(".todo");

  // ✅ 로그인 폼 생성
  if (loginForm) createForm(loginForm, LOGIN_DATA);

  // ✅ 회원가입 폼 생성
  if (registerForm) {
    createForm(registerForm, REGISTER_DATA);
    createAuthElement(registerForm);   // 인증번호 필드 생성
  }
});