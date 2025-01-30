export const useSubmit = (button) => {
  if (!button) {
    console.error("⚠️ 버튼 요소가 존재하지 않음");
    return;
  }

  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submit");
  });
}
