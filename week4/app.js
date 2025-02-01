// DOM이 완전히 로드된 후 실행
import {authElementComponent, formComponent, todoUserInfoComponent} from "./components";
import {handleCompleteTodo, handleDeleteTodo, handleFilterTodo, useAddEvent} from "./event";
import {LOGIN_DATA, REGISTER_DATA, TODO_DATA} from "./data/form.js";
import {todoList} from "./data";
import {todoListComponent} from "./components";
import {todoNav} from "./data";

// 여기서 렌더링함
window.addEventListener("DOMContentLoaded", () => {
  // ✅ DOM 요소 가져오기
  const registerForm = document.querySelector(".register");
  const loginForm = document.querySelector(".login");
  const todoForm = document.querySelector("#todo");

  // ✅ 로그인 폼 생성
  if (loginForm) {
    formComponent(loginForm, LOGIN_DATA, "로그인");
  }

  // ✅ 회원가입 폼 생성
  if (registerForm) {
    formComponent(registerForm, REGISTER_DATA, "회원가입");
    authElementComponent(registerForm);
  }

  // ✅ 할일 목록 폼 생성
  if (todoForm) {
    todoUserInfoComponent();
    todoListComponent("all");
    formComponent(todoForm, TODO_DATA, "추가");
    useAddEvent(todoList, ".delete_btn", "click", handleDeleteTodo);
    useAddEvent(todoList, ".complete_btn", "click", handleCompleteTodo);
    useAddEvent(todoNav, ".nav_btn", "click", handleFilterTodo);
  }
});