import {createElement} from "../utils";

/**
 * ✅ 일반 입력 필드 생성 함수 (인증 필드 제외)
 * @param {Object} field - 입력 필드 데이터
 * @returns {HTMLElement} - 생성된 필드 요소
 */
export const inputFieldComponent = (field) => {
  const inputWrapper = createElement("div", { class: "input_wrap" });

  const labelElement = createElement("label", {
    for: field.name,
    class: "screen_out"
  }, field.label);

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

  // ✅ 요소 추가
  inputWrapper.append(labelElement, inputElement);
  return inputWrapper;
}