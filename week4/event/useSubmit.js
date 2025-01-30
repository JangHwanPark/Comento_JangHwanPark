import { hasInvalidCharacters, isEmpty, isValidEmail, isValidLength, isValidPhone } from "../utils/validation.js";

export const useSubmit = (button, fields) => {
  if (!button || !fields || fields.length === 0) {
    console.error("⚠️ 버튼 또는 입력 필드가 존재하지 않음");
    return;
  }

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;

    fields.forEach((field) => {
      const inputElement = field.querySelector("input");
      const label = field.querySelector("label")?.textContent.trim() || "undefined";
      const value = inputElement?.value.trim() || "";

      // 기존 경고 메시지 삭제
      field.querySelector(".error-message")?.remove();
      console.log(`🔍 필드 확인 - label: "${label}", value: "${value}"`);
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
        const errorWrapper = document.querySelector(".error");
        const errorTag = document.createElement("p");
        errorTag.classList.add("error_message");
        errorTag.textContent = `⚠️ ${errorMessage}`;
        errorWrapper.appendChild(errorTag);
      }
    });

    if (isValid) window.location.replace("./pages/todo/index.html");
    else console.log("❌ 유효하지 않은 필드가 있어 제출 취소됨");
  });
};