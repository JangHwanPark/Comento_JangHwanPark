// 둠 조작
export let registerForm, loginForm, todoForm;

document.addEventListener("DOMContentLoaded", () => {
  registerForm = document.querySelector(".register");
  loginForm = document.querySelector(".login");
  todoForm = document.querySelector(".todo");

  console.log("DOM 로드 완료:", { registerForm, loginForm, todoForm });
});
