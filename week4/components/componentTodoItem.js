// 할일 목록 동적으로 생성
import {createElement} from "../utils";

export const componentTodoItem = (text) => {
  // ✅ 요소 생성
  const li = createElement("li", {
    class: "todo_item"
  });

  const span = createElement("span", {
    class: "todo_title",
  }, text);

  const button = createElement("button", {
    class: "delete_btn",
  }, "삭제");

  // ✅ 요소 바인딩
  li.appendChild(span);
  li.appendChild(button);

  return li;
}