import {createAuthCode, generateAuthCode, isAuthCodeValid, isEmpty, isValidPhone, saveUserInfo} from "../service";
import {showError} from "../utils";

/**
 * ✅ 유효성 검사 공통 함수
 * @param {HTMLElement} input - 입력 필드
 * @param {Function} validateFn - 유효성 검사 함수
 * @param {string} errorMessage - 오류 메시지
 * @returns {boolean} - 유효하면 true, 아니면 false
 */
const validateField = (input, validateFn, errorMessage) => {
  const wrapper = input.closest(".input_wrap");
  if (!input || !wrapper) return false;

  if (isEmpty(input.value) || !validateFn(input.value)) {
    showError(wrapper, errorMessage);
    return false;
  }
  return true;
};

/**
 * ✅ 회원가입 이벤트 핸들러
 * @param {HTMLElement} form - 사용자가 입력한 폼 데이터
 */
export const handleSignUp = (form) => {
  // 🚨 인증 실패 시 회원가입 중단
  const isAuthVerified = handleAuthVerification(form);
  if (!isAuthVerified) {
    console.warn("🚨 인증이 완료되지 않아 회원가입이 중단됨.");
    return;
  }

  saveUserInfo(form);
  window.location.replace("../../index.html");
};

/** ✅ 로그인 이벤트 핸들러 */
export const handleSignIn = () => {
  window.location.replace("./pages/todo/index.html");
};

/**
 * ✅ 인증 요청 이벤트 핸들러
 * @param {HTMLElement} form - 사용자가 입력한 폼 데이터
 */
export const handleAuthRequest = (form) => {
  const input = form.querySelector("input[name='phone']");
  if (!input) return;

  const authInputWrap = input.closest(".input_wrap");
  const authInputField = form.querySelector(".input_wrap.screen_out");
  if (!authInputWrap) return;

  // 유효성 검사
  if (isEmpty(input.value)) {
    showError(authInputWrap, "휴대폰 번호는 필수 입력 항목입니다.");
    return;
  }
  if (!isValidPhone(input.value)) {
    showError(authInputWrap, "휴대폰 번호 형식이 올바르지 않습니다. (예: 01012345678)");
    return;
  }

  // ✅ 인증번호 생성 UI 업데이트
  const authCode = generateAuthCode();
  createAuthCode(authInputWrap, authCode);

  // ✅ 인증번호 입력 필드 표시
  if (authInputField) authInputField.classList.remove("screen_out");
}

/**
 * ✅ 인증 확인 이벤트 핸들러
 * @param {HTMLElement} form - 사용자가 입력한 폼 데이터
 */
export const handleAuthVerification = (form) => {
  const input = form.querySelector("input[name='authentication']");
  const authValue = document.querySelector(".code")?.textContent;

  // 🚨 인증 실패 시 false 반환
  if (!input || !authValue) {
    const inputWrap = input.closest(".input_wrap");
    const message= "인증번호가 생성되지 않았습니다.";
    showError(inputWrap, message);
    return false;
  }

  // 🚨 인증이 실패하면 false 반환};
  return validateField(input, (val) =>
      isAuthCodeValid(val, authValue), "인증번호가 올바르지 않습니다.");
}