/**
 * 이벤트 추가 함수
 * @param {HTMLElement} selector - 이벤트를 위임할 부모 요소 (예: '.todo_list')
 * @param {string} targetSelector - 클릭할 대상 요소 (예: '.delete_btn')
 * @param {string} eventType - 이벤트 유형 (예: 'click')
 * @param {Function} callback - 실행할 콜백 함수
 */
export const useAddEvent = (
    selector,
    targetSelector,
    eventType,
    callback
) => {
  if (!selector) return;
  selector.addEventListener(eventType, (e) => {
    const target = e.target.closest(targetSelector);
    if (target) callback(e);
  });
}