import {componentAuthCode} from "../components";

/**
 * ✅ 인증번호 UI 업데이트 또는 생성
 * @param {HTMLElement} authWrapper - 휴대폰 입력 필드의 부모 요소
 * @param {string} authCode - 생성된 인증번호
 */
export const createAuthCode = (authWrapper, authCode) => {
// ✅ 기존 .code_display 요소 찾기
  let authCodeWrap = authWrapper.parentElement.querySelector(".code_display");

  // ✅ .phone_wrap 다음에 .code_display 삽입
  const phoneWrap = authWrapper.parentElement.querySelector(".phone_wrap");

  if (!authCodeWrap) {
    authCodeWrap = componentAuthCode(authCode);

    if (phoneWrap) {
      phoneWrap.parentElement.insertBefore(authCodeWrap, phoneWrap.nextElementSibling);
    } else {
      console.error("❌ `.phone_wrap`을 찾을 수 없음!");
    }
  } else {
    // ✅ 기존 인증번호 업데이트
    authCodeWrap.textContent = `인증번호: ${authCode}`;
  }
}