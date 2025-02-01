import {
  createAuthCode,
  generateAuthCode,
  isAuthVerification,
  saveUserInfo,
  isValidSignUpFields, isValidSignInFields
} from "../service";

/**
 * ✅ 회원가입 이벤트 핸들러
 * @param {HTMLElement} form - 사용자가 입력한 폼 데이터
 */
export const handleSignUp = (form) => {
  // 🚨 필수 필드 유효성 검사
  if (!isValidSignUpFields(form)) {
    console.warn("🚨 회원가입 입력값이 올바르지 않아 중단됨.");
    return;
  }

  // 🚨 인증 실패 시 회원가입 중단
  if (!isAuthVerification(form)) {
    console.warn("🚨 인증이 완료되지 않아 회원가입이 중단됨.");
    return;
  }

  saveUserInfo(form);
  window.location.replace("../../index.html");
};

/**
 * ✅ 로그인 이벤트 핸들러
 * @param {HTMLElement} form - 사용자가 입력한 폼 데이터
 */
export const handleSignIn = (form) => {
  if (isValidSignInFields(form)) {
    console.log("로그인 성공")
    //window.location.replace("./pages/todo/index.html");
  } else {
    console.log("로그인 실패")
  }
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

  // ✅ 인증번호 생성 UI 업데이트
  const authCode = generateAuthCode();
  createAuthCode(authInputWrap, authCode);

  // ✅ 인증번호 입력 필드 표시
  if (authInputField) authInputField.classList.remove("screen_out");
}