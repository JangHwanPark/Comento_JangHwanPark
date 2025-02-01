import {userInfo} from "../data";
import {createElement} from "../utils";

export const componentUserInfo = () => {
  if (!userInfo) return;

  // ✅ 세션스토리지에서 로그인한 사용자 정보 가져오기
  const userData = sessionStorage.getItem("user");
  if (!userData) {
    window.location.replace("../../index.html");
    return;
  }

  const user = JSON.parse(userData);

  // 사용자 정보(닉네임) 요소 생성
  const userInfoWrap = createElement("div", {
    class: "info"});
  const userName = createElement("strong", {
    class: "user_name",}, user.nickname);
  const nameWrap = createElement("span", {});
  const logoutBtn = createElement("button", {
    class: "logout_btn",}, "로그아웃");

  // 사용자 정보(투두, 생성 개수 등등) 요소 생성
  const stats = [
    { label: "생성 개수", value: user.defaultCnt[0].todoCnt },
    { label: "삭제 개수", value: user.defaultCnt[0].deleteCnt },
    { label: "완료 개수", value: user.defaultCnt[0].completeCnt }
  ];

  const userTodoWrap = createElement("ul", {
    class: "todo_info"});

  const todoElements = stats.map(({ label, value }) => {
    const li = createElement("li", { class: "item" });

    const labelElement = createElement("p", { class: "label" }, label);
    const valueElement = createElement("p", { class: "value" }, `${value} 개`);

    li.append(labelElement, valueElement);
    return li;
  });

  // 요소 삽입
  nameWrap.append(userName)
  nameWrap.append(" 님 환영합니다.");
  userInfoWrap.append(nameWrap, logoutBtn);

  userTodoWrap.append(...todoElements)
  userInfo.append(userInfoWrap, userTodoWrap);
}