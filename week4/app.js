// DOM이 완전히 로드된 후 실행
import {componentAuthElement, componentForm, componentUserInfo} from "./components";
import {handleCompleteTodo, handleDeleteTodo, useAddEvent} from "./event";
import {LOGIN_DATA, REGISTER_DATA, TODO_DATA} from "./data/form.js";
import {todoList} from "./data";
import {todoListComponent} from "./components";

window.addEventListener("DOMContentLoaded", () => {
  // ✅ DOM 요소 가져오기
  const registerForm = document.querySelector(".register");
  const loginForm = document.querySelector(".login");
  const todoForm = document.querySelector("#todo");

  // ✅ 로그인 폼 생성
  if (loginForm) {
    componentForm(loginForm, LOGIN_DATA, "로그인");
  }

  // ✅ 회원가입 폼 생성
  if (registerForm) {
    componentForm(registerForm, REGISTER_DATA, "회원가입");
    componentAuthElement(registerForm);
  }

  // ✅ 할일 목록 폼 생성
  if (todoForm) {
    componentUserInfo();
    todoListComponent();
    componentForm(todoForm, TODO_DATA, "추가");
    useAddEvent(todoList, ".delete_btn", "click", handleDeleteTodo);
    useAddEvent(todoList, ".complete_btn", "click", handleCompleteTodo);
  }
});