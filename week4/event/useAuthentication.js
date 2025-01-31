import {showError} from "../utils";
import {isEmpty, isValidPhone, createAuthCode, generateAuthCode} from "../service";

/**
 * ✅ 인증 요청 이벤트 핸들러
 * @param {HTMLElement} button - 인증 요청 버튼
 * @param {HTMLElement} input - 휴대폰 번호 입력 필드
 */
export const useAuthentication = (button, input) => {
  if (!button || !input) {
    console.error("⚠️ 버튼 또는 입력 필드가 존재하지 않음");
    return;
  }

  button.addEventListener("click", (e) => {
    e.preventDefault();

    // ✅ .input_wrapper 감싸는 요소 찾기
    let authWrapper = input.closest(".input_wrap");
    if (!authWrapper) return;

    // ✅ 유효성 검사
    if (isEmpty(input.value)) {
      showError(authWrapper, "휴대폰 번호는 필수 입력 항목입니다.");
      return;
    }
    if (!isValidPhone(input.value)) {
      showError(authWrapper, "휴대폰 번호 형식이 올바르지 않습니다. (예: 01012345678)");
      return;
    }

    // ✅ 인증번호 입력 필드 찾아서 보이게 처리
    let authFieldWrapper = authWrapper.nextElementSibling;
    if (!authFieldWrapper || !authFieldWrapper.classList.contains("screen_out")) {
      authFieldWrapper = document.querySelector(".authentication .input_wrap.screen_out");
    }

    if (authFieldWrapper) {
      authFieldWrapper.classList.remove("screen_out");
    }

    // ✅ 인증번호 생성
    const authCode = generateAuthCode();
    createAuthCode(authWrapper, authCode);
  });
};
