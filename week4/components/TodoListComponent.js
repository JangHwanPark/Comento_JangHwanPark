import { getCurrentUser } from "../service";
import { todoItemComponent } from "../components";
import { todoList } from "../data";

/** 세션스토리지에 저장된 todo 리스트를 렌더링 */
export const todoListComponent = () => {
  const user = getCurrentUser();
  if (!user || !user.todo || user.todo.length === 0) return;

  // 기존 리스트 비우기 (중복 렌더링 방지)
  todoList.innerHTML = "";
  console.log(user.todo)

  // 저장된 todo 데이터를 화면에 추가
  user.todo.forEach(({ title, status }) => {
    const todoItem = todoItemComponent(title);
    todoList.appendChild(todoItem);
  });
};
