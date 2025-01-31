// DOM이 완전히 로드된 후 실행
import {componentAuthElement, componentForm} from "./components";
import {LOGIN_DATA, REGISTER_DATA, TODO_DATA} from "./data/form.js";
import {handleClickTodo, handleDeleteTodo} from "./event";

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
  if (todoForm) {
    componentForm(todoForm, TODO_DATA, "추가");

    // ✅ 투두 리스트 버튼 이벤트, 폼 렌더링 이후 버튼을 불러와야함
    const addButton = todoForm.querySelector(".submit");
    if (addButton) {
      addButton.addEventListener("click", () => handleClickTodo(todoForm, todoList));

      // ✅ 삭제 버튼 이벤트 위임
      todoList.addEventListener("click", handleDeleteTodo);
    }
  }
});