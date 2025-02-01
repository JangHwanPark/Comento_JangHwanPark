import {userInfo} from "../data";
import {createElement} from "../utils";
import {handleLogout} from "../event";

export const todoUserInfoComponent = () => {
  if (!userInfo) return;

  // ✅ 세션스토리지에서 로그인한 사용자 정보 가져오기
  const userData = sessionStorage.getItem("user");
  if (!userData) {
    window.location.replace("../../index.html");
    return;
  }

  const user = JSON.parse(userData);
  const infoStatus = [
    { tagName: "p", class: "name_wrap", children: [
        { tagName: "strong", class: "name", text: user.nickname },
        { tagName: "span", class: "text", text: " 님 환영합니다." }
      ]},
    { tagName: "button", class: "logout_btn", text: "로그아웃" }
  ];

  const stats = [
    { label: "생성 개수", value: user.defaultCnt[0].todoCnt, class: "value todo" },
    { label: "삭제 개수", value: user.defaultCnt[0].deleteCnt, class: "value delete" },
    { label: "완료 개수", value: user.defaultCnt[0].completeCnt, class: "value complete" }
  ];

  // 사용자 정보(닉네임) 요소 생성
  const userInfoWrap = createElement("div", {class: "info"});
  infoStatus.forEach(({ tagName, class: className, text, children }) => {
    const element = createElement(tagName, className ? { class: className } : {}, text);

    // ✅ 하위 요소가 있는 경우 추가
    if (children) {
      children.forEach(child => {
        const childElement = createElement(child.tagName, { class: child.class }, child.text);
        element.appendChild(childElement);
      });
    }

    userInfoWrap.appendChild(element);
  });

  // 사용자 정보(투두, 생성 개수 등등) 요소 생성
  const userTodoWrap = createElement("ul", {class: "todo_info"});
  const todoElements = stats.map(({ label, value, class: className }) => {
    const li = createElement("li", { class: "item" });
    const labelElement = createElement("p", { class: "label" }, label);
    const valueElement = createElement("p", { class: className }, `${value} 개`);

    li.append(labelElement, valueElement);
    return li;
  });

  // 요소 삽입
  userTodoWrap.append(...todoElements)
  userInfo.append(userInfoWrap, userTodoWrap);

  // 로그아웃 버튼 클릭 이벤트 바인딩
  const logoutBtn = userInfoWrap.querySelector(".logout_btn");
  if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);
}