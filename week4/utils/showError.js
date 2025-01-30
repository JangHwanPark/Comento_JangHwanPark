/**
 * 📌 입력 필드에 에러 메시지를 표시하는 함수
 * @param {HTMLElement} field - 오류가 발생한 입력 필드를 포함하는 부모 요소
 * @param {string} message - 표시할 오류 메시지
 */
export const showError = (field, message) => {
  if (!field || !message) return;

  // 기존 에러 메시지 제거
  field.querySelector(".error_message")?.remove();

  // 에러 메시지 추가
  const errorWrapper = document.querySelector(".error");
  if (!errorWrapper) return; // .error 요소가 없을 경우 중단

  const errorTag = document.createElement("p");
  errorTag.classList.add("error_message");
  errorTag.textContent = `⚠️ ${message}`;

  errorWrapper.appendChild(errorTag);
};
