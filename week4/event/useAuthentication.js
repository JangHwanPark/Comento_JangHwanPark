import { generateAuthCode } from "../utils/generateAuthCode.js";
import {createElement} from "../utils/createElement.js";
import {isEmpty, isValidPhone} from "../utils/validation.js";
import {showError} from "../utils/showError.js";

export const useAuthentication = (button, input) => {
  if (!button || !input) {
    console.error("⚠️ 버튼 또는 입력 필드가 존재하지 않음");
    return;
  }
  console.log(input)
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("📌 인증 버튼 클릭됨!");

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
    console.log(`📌 생성된 인증번호: ${authCode}`);

    // ✅ 기존 .code_display 요소 찾기
    let authCodeWrap = authWrapper.parentElement.querySelector(".code_display");

    // ✅ .phone_wrap 다음에 .code_display 삽입
    const phoneWrap = authWrapper.parentElement.querySelector(".phone_wrap");
    if (!authCodeWrap) {
      authCodeWrap = createElement("div", { class: "input_wrap code_display" });
      const auth = createElement("div", { class: "code_wrap" });
      const title = createElement("span", { class: "title" });
      const code = createElement("span", { class: "code" });
      title.textContent = `인증번호 : `;
      code.textContent = authCode;
      auth.appendChild(title);
      auth.appendChild(code);
      authCodeWrap.appendChild(auth);

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
