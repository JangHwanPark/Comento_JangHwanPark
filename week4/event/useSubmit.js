import {showError} from "../utils";
import {
  saveUserInfo,
  hasInvalidCharacters,
  isEmpty,
  isValidEmail,
  isValidLength,
  isValidPhone
} from "../service";

/**
 * ✅ 폼 제출 이벤트 핸들러
 * @param {HTMLElement} button - 제출 버튼 요소
 * @param {HTMLElement} form - 폼 요소
 */
export const useSubmit = (button, form) => {
  if (!button || !form) {
    console.error("⚠️ 버튼 또는 폼이 존재하지 않음");
    return;
  }

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;
    const fields = Array.from(form.querySelectorAll(".input_wrap"));

    fields.forEach((field) => {
      const inputElement = field.querySelector("input");
      const label = field.querySelector("label")?.textContent.trim() || "undefined";
      const value = inputElement?.value.trim() || "";

      // 기존 경고 메시지 삭제
      field.querySelector(".error-message")?.remove();
      let errorMessage = "";

      switch (label) {
        case "아이디":
          if (isEmpty(value)) errorMessage = `"${label}"은 필수 입력 항목입니다.`;
          else if (!isValidLength(value, 4, 16)) errorMessage = `"${label}"은 4~16자 사이여야 합니다.`;
          else if (hasInvalidCharacters(value)) errorMessage = `"${label}"에 허용되지 않는 문자가 포함되어 있습니다.`;
          break;

        case "비밀번호":
        case "비밀번호 확인":
          if (isEmpty(value)) errorMessage = `"${label}"은 필수 입력 항목입니다.`;
          else if (!isValidLength(value, 8, 20)) errorMessage = `"${label}"은 8~20자 사이여야 합니다.`;
          break;

        case "닉네임":
          if (isEmpty(value)) errorMessage = `"${label}"은 필수 입력 항목입니다.`;
          else if (!isValidLength(value, 2, 12)) errorMessage = `"${label}"은 2~12자 사이여야 합니다.`;
          break;

        case "이메일":
          if (isEmpty(value)) errorMessage = `"${label}"은 필수 입력 항목입니다.`;
          else if (!isValidEmail(value)) errorMessage = `"${label}" 형식이 올바르지 않습니다.`;
          break;

        case "휴대폰 번호":
          if (isEmpty(value)) errorMessage = `"${label}"은 필수 입력 항목입니다.`;
          else if (!isValidPhone(value)) errorMessage = `"${label}" 형식이 올바르지 않습니다. (01012345678)`;
          break;

        case "인증 번호":
          if (isEmpty(value)) errorMessage = `"${label}"은 필수 입력 항목입니다.`;
          break;

        default:
          console.warn(`⚠️ "${label}"에 대한 유효성 검사 없음`);
          break;
      }

      // ⚠️ 오류 메시지가 있으면 p 태그 추가
      if (errorMessage) {
        isValid = false;
        showError(field, errorMessage);
      }
    });

    if (isValid) {
      const btnText = button.textContent.trim();

      switch (btnText) {
        case "회원가입":
          saveUserInfo(form);
          window.location.replace("../../index.html");
          break;

        case "로그인":
          window.location.replace("./pages/todo/index.html");
          break;

        default:
          console.warn(`⚠️ 예상치 못한 버튼 텍스트: ${btnText}`);
          break;
      }
    } else {
      console.log("❌ 유효하지 않은 필드가 있어 제출 취소됨");
    }
  });
};