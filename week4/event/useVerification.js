import {isAuthCodeValid, isEmpty} from "../utils/validation.js";
import {showError} from "../utils/showError.js";

export const useVerification = (button, input) => {
  if (!button || !input) {
    console.error("⚠️ 버튼 또는 입력 필드가 존재하지 않음");
    return;
  }

  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("📌 인증 확인 버튼 클릭됨!");
    console.log("input value is: " + input.value);
    const authValue = document.querySelector(".code");
    const code = authValue.textContent;

    // ✅ .input_wrapper 감싸는 요소 찾기
    let authWrapper = input.closest(".input_wrap");
    if (!authWrapper) return;

    console.log("code value is: " + authValue.textContent);
    if (isEmpty(input.value)) {
      showError(authWrapper, "인증번호를 입력해 주세요.")
    } else if (!isAuthCodeValid(input.value, code)) {
      showError(authWrapper,"인증번호가 올바르지 않습니다.")
    }
  })
}