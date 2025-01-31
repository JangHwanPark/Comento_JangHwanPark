/**
 * ✅ 폼 제출 이벤트 핸들러
 * @param {HTMLElement} button - 제출 버튼 요소
 * @param {HTMLElement} form - 폼 요소
 * @param {Function} handleAction - 실행할 핸들러 함수
 */
export const useSubmit = (button, form, handleAction) => {
  if (!button || !form || typeof handleAction !== "function") {
    console.error("⚠️ 버튼, 폼, 또는 핸들러가 존재하지 않음");
    return;
  }

  button.addEventListener("click", (e) => {
    e.preventDefault();
    handleAction(form);
  });
};