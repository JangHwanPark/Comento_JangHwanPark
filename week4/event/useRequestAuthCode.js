import { generateAuthCode } from "../utils/generateAuthCode.js";

export const useRequestAuthCode = (button, input) => {
  if (!button || !input) {
    console.error("⚠️ 버튼 또는 입력 필드가 존재하지 않음");
    return;
  }

  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("📌 인증 버튼 클릭됨!");

    // ✅ .input_wrapper 감싸는 요소 찾기
    let authWrapper = input.closest(".input_wrapper");
    if (!authWrapper) {
      console.warn("⚠️ input이 .input_wrapper 내부에 존재하지 않음. 대신 부모 요소를 사용합니다.");
      authWrapper = input.parentElement;
    }

    // ✅ 인증번호 입력 필드 찾아서 보이게 처리
    let authFieldWrapper = authWrapper.nextElementSibling;
    if (!authFieldWrapper || !authFieldWrapper.classList.contains("screen_out")) {
      authFieldWrapper = document.querySelector(".authentication .input_wrapper.screen_out");
    }

    if (authFieldWrapper) {
      authFieldWrapper.classList.remove("screen_out");
    }

    // ✅ 인증번호 생성
    const authCode = generateAuthCode();
    console.log(`📌 생성된 인증번호: ${authCode}`);

    // ✅ 기존 `.code_display` 요소 찾기
    let authCodeWrap = authWrapper.parentElement.querySelector(".code_display");

    // ✅ .phone_wrap 다음에 .code_display 삽입
    const phoneWrap = authWrapper.parentElement.querySelector(".phone_wrap");
    if (!authCodeWrap) {
      authCodeWrap = document.createElement("div");
      authCodeWrap.classList.add("code_display");
      authCodeWrap.textContent = `인증번호: ${authCode}`;

      if (phoneWrap) {
        phoneWrap.parentElement.insertBefore(authCodeWrap, phoneWrap.nextElementSibling);
      } else {
        console.error("❌ `.phone_wrap`을 찾을 수 없음!");
      }
    } else {
      // ✅ 기존 인증번호 업데이트
      authCodeWrap.textContent = `인증번호: ${authCode}`;
    }
  });
};
