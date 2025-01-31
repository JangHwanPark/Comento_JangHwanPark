// 할일 목록 동적으로 생성
import {createElement} from "../utils";

export const componentTodoItem = (text) => {
  // ✅ 요소 생성
  const li = createElement("li", {
    className: "todo_item"
  });

  const span = createElement("span", {
    className: "todo_title",
  }, text);

  const button = createElement("button", {
    className: "delete_btn",
  }, "삭제");

  // ✅ 요소 바인딩
  li.appendChild(span);
  li.appendChild(button);

  return li;
}