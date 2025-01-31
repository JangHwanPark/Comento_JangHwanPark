// 로그인 회원가입 폼 동적으로 생성
import {createElement} from "../utils";
import {useSubmit} from "../event";

export const componentForm = (form, data, buttonText = "제출") => {
  if (!form) {
    console.error("폼 요소가 존재하지 않음");
    return;
  }

  // DOM 조작 최소화를 위한 Fragment
  const fragment = document.createDocumentFragment();

  // 입력필드 저장
  const inputFields = [];

  data.forEach(field => {
    // ✅인증번호 필드는 회원가입에서만 별도로 추가하고 따로 처리 (createAuthElement에서)
    const isAuthentication = field.name === "authentication";
    const isPhone = field.name === "phone";
    if (isAuthentication || isPhone) return;

    // ✅div.wrapper, label, input 생성
    const inputWrapper = createElement("div", {
      class: "input_wrap",});

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
      value: field.value || "",
    });

    // ✅요소 추가
    inputFields.push(inputWrapper);
    inputWrapper.appendChild(labelElement);
    inputWrapper.appendChild(inputElement);
    fragment.appendChild(inputWrapper);
  });

  // ✅ 버튼 추가
  const submitButton = createElement("button", {
    class: "submit"
  }, buttonText);

  fragment.appendChild(submitButton);
  form.appendChild(fragment);

  // 이벤트 등록
  useSubmit(submitButton, form);
};