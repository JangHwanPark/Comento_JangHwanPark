import { componentTodoItem } from "../components";
import {todoList} from "../data";
import {getCurrentUser, setCurrentUser} from "../service";

export const handleAddTodo = (form) => {
  const inputElement = form.querySelector("input[name='todo']");
  const value = inputElement?.value.trim();
  if (!value) return;

  const todoItem = componentTodoItem(value);
  todoList.appendChild(todoItem);

  const user = getCurrentUser();
  if (!user) return;

  // ✅ 새로운 투두 데이터 추가 (개수 증가 및 세션스토리지 반영)
  user.todo.push({ title: value, status: "pending" });
  user.defaultCnt[0].todoCnt += 1;
  setCurrentUser(user);

  // ✅ UI 업데이트 후 입력창 초기화
  setUserTodoInfo();
  inputElement.value = "";
};

export const handleDeleteTodo = (e) => {
  if (!e.target.classList.contains("delete_btn")) return;

  const todoItem = e.target.closest(".todo_item");
  if (!todoItem) return;

  const user = getCurrentUser();
  if (!user) return;

  // ✅ 해당 투두 인덱스 찾기
  const todoTitle = todoItem.querySelector(".todo_title").textContent;
  const todoIndex = user.todo.findIndex(todo => todo.title === todoTitle);

  // ✅ 삭제 카운트 증가
  if (todoIndex !== -1) {
    user.todo.splice(todoIndex, 1);
    user.defaultCnt[0].deleteCnt += 1;
  }

  // ✅ 데이터 업데이트 (UI 업데이트)
  setCurrentUser(user);
  todoItem.remove();
  setUserTodoInfo();
}

export const handleCompleteTodo = (e) => {
  if (!e.target.classList.contains("complete_btn")) return;

  const todoItem = e.target.closest(".todo_item");
  if (!todoItem) return;

  const user = getCurrentUser();
  if (!user) return;

  // ✅ 해당 투두 인덱스 찾기
  const todoTitle = todoItem.querySelector(".todo_title").textContent;
  const todoIndex = user.todo.findIndex(todo => todo.title === todoTitle);

  // ✅ 완료 카운트 증가
  if (todoIndex !== -1 && user.todo[todoIndex].status !== "completed") {
    user.todo[todoIndex].status = "completed";
    user.defaultCnt[0].completeCnt += 1;
  }

  // ✅ UI 업데이트 (데이터 업데이트)
  setCurrentUser(user);
  setUserTodoInfo();
};

/** ✅ UI에서 사용자 투두 정보 업데이트 */
const setUserTodoInfo = () => {
  const user = getCurrentUser();
  if (!user) return;

  // ✅ 투두 카운트 업데이트
  document.querySelector(".value.todo").textContent = `${user.defaultCnt[0].todoCnt} 개`;
  document.querySelector(".value.delete").textContent = `${user.defaultCnt[0].deleteCnt} 개`;
  document.querySelector(".value.complete").textContent = `${user.defaultCnt[0].completeCnt} 개`;
};

