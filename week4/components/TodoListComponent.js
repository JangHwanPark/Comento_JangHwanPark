import { getCurrentUser } from "../service";
import { todoItemComponent } from "../components";
import { todoList } from "../data";

/** 세션스토리지에 저장된 todo 리스트를 렌더링 */
export const todoListComponent = (status) => {
  const user = getCurrentUser();
  if (!user || !user.todo || user.todo.length === 0) return;

  // 기존 리스트 비우기 (중복 렌더링 방지)
  todoList.innerHTML = "";

  // 필터링된 데이터 가져오기
  const filteredTodos = user.todo.filter(todo => {
    if (status === "all") return true;
    if (status === "completed") return todo.status === "completed";
    if (status === "deleted") return todo.status === "deleted";
    return false;
  });

  // 저장된 todo 데이터를 화면에 추가
  filteredTodos.forEach(({ title }) => {
    const todoItem = todoItemComponent(title);
    todoList.appendChild(todoItem);
  });
};
