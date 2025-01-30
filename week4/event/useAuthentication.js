import {generateAuthCode} from "../utils/generateAuthCode.js";

export const useAuthentication = (button, input) => {
  if (!button || !input) {
    console.error("⚠️ 버튼 또는 입력 필드가 존재하지 않음");
    return;
  }

  button.addEventListener("click", (e) => {
    e.preventDefault();

    let authWrapper = document.querySelector(".input_wrap:last-child");
    if (authWrapper) {
      authWrapper.classList.remove("screen_out");
      authWrapper.classList.toggle("request");

      const authCode = generateAuthCode();
      console.log(`📌 생성된 인증번호: ${authCode}`);
      return;
    }
  });
};
