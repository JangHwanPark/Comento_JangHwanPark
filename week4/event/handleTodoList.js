import { componentTodoItem } from "../components";

export const handleClickTodo = (form, todoList) => {
  if (!todoList) {
    console.error("❌ todoList가 존재하지 않습니다.");
    return;
  }

  const inputElement = form.querySelector("input[name='todo']");
  const value = inputElement?.value.trim();

  if (!value) {
    console.warn("⚠️ 할 일을 입력해 주세요.");
    return;
  }

  console.log("📝 추가된 할 일:", value);
  const todoItem = componentTodoItem(value);
  todoList.appendChild(todoItem);

  // ✅ 입력 필드 초기화
  inputElement.value = "";
};

export const handleDeleteTodo = (e) => {
  if (e.target.classList.contains("delete_btn")) {
    console.log("🗑️ 삭제 버튼 클릭됨");
    const todoItem = e.target.closest(".todo_item");
    if (todoItem) todoItem.remove(); // ✅ 리스트에서 삭제
  }
}