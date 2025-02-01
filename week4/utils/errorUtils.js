/**
 * 📌 입력 필드에 에러 메시지를 `.error` 컨테이너에 표시하는 함수
 * @param {HTMLElement} input - 오류가 발생한 입력 필드
 * @param {string} message - 표시할 오류 메시지
 */
export const showError = (input, message) => {
  if (!input || !message) return;

  // ✅ 에러 메시지 컨테이너 찾기
  const errorWrapper = document.querySelector(".error");
  if (!errorWrapper) return;

  // ✅ 기존 에러 메시지 모두 삭제 (중복 방지)
  const existingMessages = Array.from(errorWrapper.querySelectorAll(".error_message"));
  if (existingMessages.some((msg) => msg.textContent === `⚠️ ${message}`)) return;

  // ✅ 에러 메시지 추가
  if (!errorWrapper) return;
  const errorTag = document.createElement("p");
  errorTag.classList.add("error_message");
  errorTag.textContent = `⚠️ ${message}`;
  errorWrapper.appendChild(errorTag);

  // ✅ 입력 필드에 에러 스타일 추가
  input.classList.add("input_error");
};

/**
 * 📌 필드의 에러 스타일 및 메시지 제거
 * @param {HTMLElement} input - 유효한 입력값을 가진 필드
 */
export const removeError = (input) => {
  if (!input) return;

  // ✅ 입력 필드의 에러 스타일 제거
  input.classList.remove("input_error");

  // ✅ 해당 필드 관련 에러 메시지만 삭제
  const errorWrapper = document.querySelector(".error");
  if (!errorWrapper) return;

  Array.from(errorWrapper.querySelectorAll(".error_message")).forEach((msg) => {
    if (msg.textContent.includes(input.closest(".input_wrap")?.querySelector("label")?.textContent.trim())) {
      msg.remove();
    }
  });
};