import {todoItemComponent, todoListComponent} from "../components";
import {todoList} from "../data";
import {getCurrentUser, setCurrentUser} from "../service";

export const handleAddTodo = (form) => {
  const inputElement = form.querySelector("input[name='todo']");
  const value = inputElement?.value.trim();
  if (!value) return;

  const todoItem = todoItemComponent(value);
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
    user.todo[todoIndex].status = "deleted";
    user.defaultCnt[0].deleteCnt += 1;
  }

  // ✅ 데이터 업데이트 (UI 업데이트)
  setCurrentUser(user);
  //todoItem.remove();
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

/** UI 에서 사용자 투두 정보 업데이트 */
const setUserTodoInfo = () => {
  const user = getCurrentUser();
  if (!user) return;

  // 투두 카운트 업데이트
  document.querySelector(".value.todo").textContent = `${user.defaultCnt[0].todoCnt} 개`;
  document.querySelector(".value.delete").textContent = `${user.defaultCnt[0].deleteCnt} 개`;
  document.querySelector(".value.complete").textContent = `${user.defaultCnt[0].completeCnt} 개`;
};

// ✅ 네비게이션 필터 클릭 이벤트 핸들러
export const handleFilterTodo = (e) => {
  const button = e.target.closest(".nav_btn"); // 클릭된 버튼 찾기
  if (!button) return;

  // 현재 클릭된 버튼에 맞는 상태 설정
  const status = button.classList.contains("all") ? "all"
      : button.classList.contains("complete") ? "completed"
          : button.classList.contains("delete") ? "deleted"
              : "all";

  // ✅ 기존 active 제거 후 클릭된 버튼에 추가
  document.querySelectorAll("#todo_nav .nav_btn").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  // ✅ 필터링된 todo 리스트 렌더링
  todoListComponent(status);
};

