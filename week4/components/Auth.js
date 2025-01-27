import { registerForm } from "../data/dom.js";
import { REGISTER_DATA } from "../data/form.js"; // 폼 데이터 임포트

const createRegisterForm = () => {
  // DOM 조작 최소화를 위한 Fragment
  const fragment = document.createDocumentFragment();

  REGISTER_DATA.forEach(field => {
    // 인증번호 필드는 따로 처리 (createAuthElement에서)
    if (field.name === "authentication") return;

    // div.wrapper 생성
    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input_wrapper");

    // label 생성
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", field.name);
    labelElement.textContent = field.label;

    let inputElement;

    if (field.type === "radio") {
      // 성별 선택 (radio 버튼 여러 개 추가)
      inputElement = document.createElement("div");

      field.options.forEach(option => {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = field.name;
        radioInput.value = option.value;
        radioInput.id = `${field.name}_${option.value}`;

        const radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", radioInput.id);
        radioLabel.textContent = option.label;

        inputElement.appendChild(radioInput);
        inputElement.appendChild(radioLabel);
      });
    } else {
      // 일반 input 생성
      inputElement = document.createElement("input");
      inputElement.type = field.type;
      inputElement.name = field.name;
      inputElement.id = field.name;
      inputElement.placeholder = field.placeholder || "";

      if (field.required) inputElement.required = true;
      if (field.minLength) inputElement.minLength = field.minLength;
      if (field.maxLength) inputElement.maxLength = field.maxLength;
      if (field.pattern) inputElement.pattern = field.pattern;
    }

    // 요소 추가
    inputWrapper.appendChild(labelElement);
    inputWrapper.appendChild(inputElement);
    fragment.appendChild(inputWrapper);
  });

  registerForm.appendChild(fragment); // DOM 업데이트 최소화
};

// 인증번호 입력 필드와 인증 버튼을 동적으로 생성
const createAuthElement = () => {
  // 인증번호 필드 정보 가져오기
  const authField = REGISTER_DATA.find(field => field.name === "authentication");
  if (!authField) return;

  // 기존 인증번호 필드 제거 (중복 방지)
  document.querySelector(".authentication_wrapper")?.remove();

  // 새로운 div 태그 생성 및 클래스 추가
  const authWrapper = document.createElement("div");
  authWrapper.classList.add("input_wrapper", "authentication_wrapper");

  // label 생성
  const labelElement = document.createElement("label");
  labelElement.setAttribute("for", authField.name);
  labelElement.textContent = authField.label;

  // input 생성
  const inputElement = document.createElement("input");
  inputElement.type = authField.type;
  inputElement.name = authField.name;
  inputElement.id = authField.name;
  inputElement.placeholder = authField.placeholder || "";
  inputElement.required = authField.required || false;

  // 버튼 생성
  const authButton = document.createElement("button");
  authButton.type = "button";
  authButton.textContent = "인증하기";

  // 요소 추가
  authWrapper.appendChild(labelElement);
  authWrapper.appendChild(inputElement);
  authWrapper.appendChild(authButton);

  registerForm.appendChild(authWrapper);
};

// DOM이 완전히 로드된 후 실행
window.addEventListener("DOMContentLoaded", () => {
  createRegisterForm();  // 기본 입력 필드 생성
  createAuthElement();   // 인증번호 필드 생성
});
