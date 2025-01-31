// DOM이 완전히 로드된 후 실행
import {componentAuthElement, componentForm} from "./components";
import {LOGIN_DATA, REGISTER_DATA, TODO_DATA} from "./data/form.js";
import {handleClickTodo} from "./event";

window.addEventListener("DOMContentLoaded", () => {
  // ✅ DOM 요소 가져오기
  const registerForm = document.querySelector(".register");
  const loginForm = document.querySelector(".login");
  const todoForm = document.querySelector("#todo");
  const todoList = document.querySelector(".todo_list");

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
  if (todoForm && todoList) {
    componentForm(todoForm, TODO_DATA, "추가");

    // 폼 렌더링 이후 버튼을 불러와야한
    const addButton = todoForm.querySelector(".submit");
    if (addButton) {
      addButton.addEventListener("click", (e) => {
        e.preventDefault();
        handleClickTodo(todoForm, todoList);
      });
    }
  }
});