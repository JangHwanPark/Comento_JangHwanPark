// DOM이 완전히 로드된 후 실행
import {createAuthElement, createForm, createTodoForm} from "./components";
import {LOGIN_DATA, REGISTER_DATA, TODO_DATA} from "./data/form.js";

window.addEventListener("DOMContentLoaded", () => {
  // ✅ DOM 요소 가져오기
  const registerForm = document.querySelector(".register");
  const loginForm = document.querySelector(".login");
  const todoForm = document.querySelector(".todo");

  // ✅ 로그인 폼 생성
  if (loginForm) {
    createForm(loginForm, LOGIN_DATA, "로그인");
  }

  // ✅ 회원가입 폼 생성
  if (registerForm) {
    createForm(registerForm, REGISTER_DATA, "회원가입");
    createAuthElement(registerForm);
  }

  // ✅ Todo 폼 생성
  if (todoForm) {
    createForm(todoForm, TODO_DATA, "생성하기")
  }
});