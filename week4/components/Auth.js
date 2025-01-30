import {loginForm, registerForm} from "../data/dom.js";
import {REGISTER_DATA} from "../data/form.js";
import {createElement} from "../utils/createElement.js"; // 폼 데이터 임포트

export const createForm = (element, data) => {
  if (!element) {
    console.error("폼 요소가 존재하지 않음");
    return;
  }

  // DOM 조작 최소화를 위한 Fragment
  const fragment = document.createDocumentFragment();

  data.forEach(field => {
    // ✅인증번호 필드는 회원가입에서만 별도로 추가하고 따로 처리 (createAuthElement에서)
    if (field.name === "authentication") return;

    // ✅div.wrapper, label, input 생성
    const inputWrapper = createElement("div", {
      class: "input_wrapper",});

    const labelElement = createElement("label", {
      for: field.name}, field.label);

    const inputElement = createElement("input", {
      type: field.type,
      name: field.name,
      id: field.id || field.name,
      placeholder: field.placeholder,
      required: field.required || false,
      minLength: field.minLength || null,
      maxLength: field.maxLength || null,
      pattern: field.pattern || null,
    });

    // ✅요소 추가
    inputWrapper.appendChild(labelElement);
    inputWrapper.appendChild(inputElement);
    fragment.appendChild(inputWrapper);
  });

  // ✅입력 필드 추가
  element.appendChild(fragment);

  // ✅로그인, 회원가입 버튼 추가
  const btnText = element === loginForm ? "로그인" : "회원가입";
  const submitButton = createElement("button", {
    class: "submit"}, btnText);
  element.appendChild(submitButton);

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submit");
  })
};

// 인증번호 입력 필드와 인증 버튼을 동적으로 생성
export const createAuthElement = () => {
  if (!registerForm) {
    console.error("회원가입 폼이 존재하지 않아 인증 필드를 추가할 수 없습니다.");
    return;
  }

  // 인증번호 필드 정보 가져오기
  const authField = REGISTER_DATA.find(field => field.name === "authentication");
  if (!authField) return;

  // 기존 인증번호 필드 제거 (중복 방지)
  document.querySelector(".authentication_wrapper")?.remove();

  // div, label, input, button 태그 생성
  const authWrapper = createElement("div", {
    class: "input_wrapper authentication_wrapper"
  });

  const labelElement = createElement("label", {
    for: authField.name
  }, authField.label);

  const inputElement = createElement("input", {
    type: authField.type,
    name: authField.name,
    id: authField.name,
    placeholder: authField.placeholder || "",
    required: authField.required || false,
  });

  const authButton = createElement("button", {
    class: "auth_btn"}, "인증하기");

  // 이벤트 등록
  authButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("authBtn");
    authButton.classList.toggle("auth_btn");
  })

  // 요소 추가
  authWrapper.appendChild(labelElement);
  authWrapper.appendChild(inputElement);
  authWrapper.appendChild(authButton);

  // 인증번호 필드는 회원가입 폼에서 회원가입 버튼 위에 삽입
  const submitBtn = registerForm.querySelector(".submit");
  if (submitBtn) registerForm.insertBefore(authWrapper, submitBtn);
  else console.error("회원가입 버튼을 찾을 수 없어 인증 필드를 추가할 수 없습니다.");
};


