import { useSubmit, handleSignUp, handleSignIn, handleAuthRequest, handleAuthVerification } from "../event";

/**
 * ✅ 회원가입 및 로그인 폼 설정
 * @param {HTMLElement} form - 폼 요소
 */
export const setupFormEvents = (form) => {
  if (!form) return;

  const EVENT_HANDLERS = {
    "회원가입": handleSignUp,
    "로그인": handleSignIn,
  };

  const submitButton = form.querySelector(".submit");
  if (!submitButton) return;

  const btnText = submitButton.textContent.trim();
  const handler = EVENT_HANDLERS[btnText];

  if (handler) useSubmit(submitButton, form, handler);
  else console.warn(`⚠️ 예상치 못한 버튼 텍스트: ${btnText}`);
};
