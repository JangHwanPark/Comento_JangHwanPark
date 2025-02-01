import { componentTodoItem } from "../components";
import {todoList} from "../data";
import {getCurrentUser, setCurrentUser} from "../service";

export const handleAddTodo = (form) => {
  const inputElement = form.querySelector("input[name='todo']");
  const value = inputElement?.value.trim();

  if (!value) {
    console.warn("⚠️ 할 일을 입력해 주세요.");
    return;
  }

  const todoItem = componentTodoItem(value);
  todoList.appendChild(todoItem);

  // ✅ 투두 카운트 증가 후 입력창 초기화
  setTodoCnt("todo");
  inputElement.value = "";
};

export const handleDeleteTodo = (e) => {
  if (e.target.classList.contains("delete_btn")) {
    const todoItem = e.target.closest(".todo_item");
    if (todoItem) {
      todoItem.remove();
      setTodoCnt("delete")
    }
  }
}

export const handleCompleteTodo = (e) => {
  if (e.target.classList.contains("complete_btn")) {
    console.log("완료 클릭");
    setTodoCnt("complete");
  }
}

/**
 * ✅ 투두 관련 카운트 업데이트
 * @param {string} type - 업데이트할 카운트 유형 (todo, delete, complete)
 */
export const setTodoCnt = (type) => {
  const user = getCurrentUser();
  if (!user) return;

  // ✅ 해당하는 카운트 증가
  switch (type) {
    case "todo":
      user.defaultCnt[0].todoCnt += 1;
      break;
    case "delete":
      user.defaultCnt[0].deleteCnt += 1;
      break;
    case "complete":
      user.defaultCnt[0].completeCnt += 1;
      break;
    default:
      return;
  }

  // ✅ 업데이트된 데이터 다시 저장
  setCurrentUser(user);

  // ✅ UI 업데이트
  setUserTodoInfo();
}

/** ✅ UI에서 사용자 투두 정보 업데이트 */
const setUserTodoInfo = () => {
  const user = getCurrentUser();
  if (!user) return;

  // ✅ 투두 카운트 업데이트
  document.querySelector(".value.todo").textContent = `${user.defaultCnt[0].todoCnt} 개`;
  document.querySelector(".value.delete").textContent = `${user.defaultCnt[0].deleteCnt} 개`;
  document.querySelector(".value.complete").textContent = `${user.defaultCnt[0].completeCnt} 개`;
};

