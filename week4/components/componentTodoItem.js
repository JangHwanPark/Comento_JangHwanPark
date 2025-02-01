import { createElement } from "../utils";

export const componentTodoItem = (text) => {
  const todoItems = [
    { tag: "span", class: "todo_title", text },
    { tag: "div", class: "btn_wrap", children: [
        { tag: "button", class: "complete_btn submit", text: "완료" },
        { tag: "button", class: "delete_btn", text: "삭제" }
      ]}
  ];

  // ✅ <li> 생성
  const li = createElement("li", { class: "todo_item" });

  // ✅ 요소 동적 생성 및 추가
  todoItems.forEach(({ tag, class: className, text, children }) => {
    const element = createElement(tag, { class: className }, text);

    // 하위 요소(children)가 있으면 추가
    if (children) {
      children.forEach(child => {
        const childElement = createElement(child.tag, { class: child.class }, child.text);
        element.appendChild(childElement);
      });
    }

    li.appendChild(element);
  });

  return li;
};
