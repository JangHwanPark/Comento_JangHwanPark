import {REGISTER_DATA, EVENT_HANDLERS} from "../data/";
import {createElement} from "../utils";
import {componentAuthField} from "../components";

/**
 * 인증번호 입력 필드 및 버튼 생성 (UI 담당)
 * @param {HTMLElement} element - 폼 요소 (인증 UI 추가할 위치)
 */
export const componentAuthElement = (element) => {
  if (!element) {
    console.error("회원가입 폼이 존재하지 않아 인증 필드를 추가할 수 없습니다.");
    return;
  }

  // ✅ "휴대폰 번호"와 "인증 번호" 필드 가져오기
  const authFields = REGISTER_DATA.filter(({name}) =>
      ["phone", "authentication"].includes(name));
  if (authFields.length === 0) return;

  // ✅ 기존 인증 필드 제거 (중복 방지)
  document.querySelector(".authentication")?.remove();

  // ✅ 인증 필드 전체를 감싸는 wrapper
  const authContainer = createElement("div", {
    class: "authentication"
  });

  // ✅ 필드 생성 및 추가
  authFields.reduce((conn, field) => {
    const fieldWrapper = componentAuthField(field);
    const handler = EVENT_HANDLERS[field.name];

    // ✅ 핸들러 등록 (존재하는 경우)
    if (handler) {
      const inputElement = fieldWrapper.querySelector("input");
      const authButton = fieldWrapper.querySelector(".auth_btn");
      handler(authButton, inputElement);
    }

    conn.appendChild(fieldWrapper);
    return conn;
  }, authContainer);

  // ✅ 인증 필드를 회원가입 버튼 위에 삽입
  const submitBtn = element.querySelector(".submit");
  if (submitBtn) element.insertBefore(authContainer, submitBtn);
  else console.error("회원가입 버튼을 찾을 수 없어 인증 필드를 추가할 수 없습니다.");
};
