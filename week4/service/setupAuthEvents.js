import { handleAuthRequest } from "../event";
import {isAuthVerification} from "../service";

/**
 * ✅ 인증 필드에 이벤트 핸들러 등록
 * @param {HTMLElement} authContainer - 인증 필드가 포함된 컨테이너
 */
export const setupAuthEvents = (authContainer) => {
  if (!authContainer) return;

  const phoneInput = authContainer.querySelector("input[name='phone']");
  const authInput = authContainer.querySelector("input[name='authentication']");
  const authButtons = authContainer.querySelectorAll(".auth_btn");
  const phoneButton = authButtons[0];
  const authButton = authButtons[1];

  if (phoneButton && phoneInput) {
    phoneButton.addEventListener("click", (e) => {
      e.preventDefault();
      phoneInput.disabled = true;
      phoneButton.textContent = "재전송";
      handleAuthRequest(authContainer);
    });
  }

  if (authButton && authInput) {
    authButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("인증 버튼 클릭")
      isAuthVerification(authContainer);
    });
  }
};
