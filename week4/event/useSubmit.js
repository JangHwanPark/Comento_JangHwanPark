import {hasInvalidCharacters, isEmpty, isValidEmail, isValidLength, isValidPhone} from "../utils/validation.js";

export const useSubmit = (button, fields) => {
  if (!button || !fields || fields.length === 0) {
    console.error("⚠️ 버튼 또는 입력 필드가 존재하지 않음");
    return;
  }

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;

    fields.forEach((field) => {
      const label = field.closest(".input_wrapper")?.querySelector("label")?.textContent?.trim() || "undefined";
      const value = field.value?.trim() || "";
      console.log(field)
      console.log(field.value)
      console.log(field.querySelector("input").value)
      console.log(`🔍 필드 확인 - label: "${label}", value: "${value}"`);

      switch (label) {
        case "아이디":
          if (isEmpty(value) || !isValidLength(value, 4, 16) || hasInvalidCharacters(value)) {
            console.warn(`⚠️ "${label}" 입력값이 유효하지 않음`);
            isValid = false;
          }
          break;

        case "비밀번호":
        case "비밀번호 확인":
          if (isEmpty(value) || !isValidLength(value, 8, 20)) {
            console.warn(`⚠️ "${label}" 입력값이 유효하지 않음`);
            isValid = false;
          }
          break;

        case "닉네임":
          if (isEmpty(value) || !isValidLength(value, 2, 12)) {
            console.warn(`⚠️ "${label}" 입력값이 유효하지 않음`);
            isValid = false;
          }
          break;

        case "이메일":
          if (isEmpty(value) || !isValidEmail(value)) {
            console.warn(`⚠️ "${label}" 입력값이 유효하지 않음`);
            isValid = false;
          }
          break;

        case "휴대폰 번호":
          if (isEmpty(value) || !isValidPhone(value)) {
            console.warn(`⚠️ "${label}" 입력값이 유효하지 않음`);
            isValid = false;
          }
          break;

        case "인증 번호":
          if (isEmpty(value)) {
            console.warn(`⚠️ "${label}" 입력값이 비어 있음`);
            isValid = false;
          }
          break;

        default:
          console.warn(`⚠️ "${label}"에 대한 유효성 검사 없음`);
          break;
      }
    });

    if (isValid) {
      console.log("✅ 모든 필드가 유효합니다. 폼 제출 진행...");
    } else {
      console.log("❌ 유효하지 않은 필드가 있어 제출 취소됨");
    }
  });
};
