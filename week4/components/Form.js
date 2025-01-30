import {REGISTER_DATA} from "../data/form.js";
import {createElement} from "../utils/createElement.js";
import {useSubmit} from "../event/useSubmit.js";
import {useAuthentication} from "../event/useAuthentication.js";

// 로그인 회원가입 폼 동적으로 생성
export const createForm = (element, data) => {
  if (!element) {
    console.error("폼 요소가 존재하지 않음");
    return;
  }

  // DOM 조작 최소화를 위한 Fragment
  const fragment = document.createDocumentFragment();

  // 입력필드 저장
  const inputFields = [];

  data.forEach(field => {
    // ✅인증번호 필드는 회원가입에서만 별도로 추가하고 따로 처리 (createAuthElement에서)
    if (field.name === "authentication") return;

    // ✅div.wrapper, label, input 생성
    const inputWrapper = createElement("div", {
      class: "input_wrapper",});

    const labelElement = createElement("label", {
      for: field.name, class: "screen_out"}, field.label);

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
    inputFields.push(inputWrapper);
    inputWrapper.appendChild(labelElement);
    inputWrapper.appendChild(inputElement);
    fragment.appendChild(inputWrapper);
  });

  // ✅로그인, 회원가입(입력 필드) 버튼 추가
  const btnText = element?.classList.contains("login") ? "로그인" : "회원가입";
  const submitButton = createElement("button", {
    class: "submit"}, btnText);

  fragment.appendChild(submitButton);
  element.appendChild(fragment);

  // 이벤트 등록
  useSubmit(submitButton, inputFields);
};

// 인증번호 입력 필드와 인증 버튼을 동적으로 생성
export const createAuthElement = (element) => {
  if (!element) {
    console.error("회원가입 폼이 존재하지 않아 인증 필드를 추가할 수 없습니다.");
    return;
  }

  // 인증번호 필드 정보 가져오기
  const authField = REGISTER_DATA.find(field =>
      field.name === "authentication");
  if (!authField) return;

  // 기존 인증번호 필드 제거 (중복 방지)
  document.querySelector(".authentication_wrapper")?.remove();

  // div, label, input, button 태그 생성
  const authWrapper = createElement("div", {
    class: "input_wrapper authentication_wrapper"
  });

  const labelElement = createElement("label", {
    for: authField.name, class: "screen_out"}, authField.label);

  const inputElement = createElement("input", {
    type: authField.type,
    name: authField.name,
    id: authField.name,
    placeholder: authField.placeholder || "",
    required: authField.required || false,
  });

  // 버튼 생성 및 인증번호 클릭 이벤트 등록
  const authButton = createElement("button", {
    class: "auth_btn"}, "인증하기");
  useAuthentication(authButton)

  // 요소 추가
  authWrapper.appendChild(labelElement);
  authWrapper.appendChild(inputElement);
  authWrapper.appendChild(authButton);

  // 인증번호 필드는 회원가입 폼에서 회원가입 버튼 위에 삽입
  const submitBtn = element.querySelector(".submit");
  if (submitBtn) element.insertBefore(authWrapper, submitBtn);
  else console.error("회원가입 버튼을 찾을 수 없어 인증 필드를 추가할 수 없습니다.");
};

// 할일 목록 폼 동적으로 생성
export const createTodoForm = () => {

}