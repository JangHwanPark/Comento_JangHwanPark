import {createElement} from "../utils";

/**
 * ✅ 개별 인증 필드 생성 함수 (재사용 가능)
 * @param {Object} field - 필드 데이터 (label, name, type, placeholder 등)
 * @returns {HTMLElement} - 생성된 필드 요소
 */
export const createAuthField = ({
  name,
  label,
  type,
  placeholder,
  required,
  value
}) => {
// ✅ input_wrap 생성 (인증번호는 기본적으로 숨김 처리)
  const fieldWrapper = createElement("div", {
    class: `input_wrap ${name === "authentication" ? "screen_out" : "phone_wrap"}`
  });

  // ✅ label 생성 (접근성 지원)
  const labelElement = createElement("label", {
    for: name,
    class: "screen_out"
  }, label);

  // ✅ input 생성
  const inputElement = createElement("input", {
    type,
    name,
    id: name,
    placeholder: placeholder || "",
    required: required || false,
    value: value || "",
  });

  // ✅ 버튼 생성
  const buttonText = name === "phone" ? "인증요청" : "인증하기";
  const authButton = createElement("button", { class: "auth_btn" }, buttonText);

  // ✅ 요소 추가
  fieldWrapper.append(labelElement, inputElement, authButton);
  return fieldWrapper;
}