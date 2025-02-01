import {REGISTER_DATA} from "../data/";
import {createElement} from "../utils";
import {authFieldComponent} from "../components";
import {setupAuthEvents} from "../service";

/**
 * 인증번호 입력 필드 및 버튼 생성 (UI 담당)
 * @param {HTMLElement} element - 폼 요소 (인증 UI 추가할 위치)
 */
export const authElementComponent = (element) => {
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
  authFields.forEach((field) => {
    const fieldWrapper = authFieldComponent(field);

    // ✅ 인증번호 입력 필드(`authentication`)는 기본적으로 숨김 상태이므로 표시하도록 수정
    if (field.name === "authentication") {
      fieldWrapper.classList.add("screen_out"); // 기본 숨김 상태 유지
    }

    authContainer.appendChild(fieldWrapper);
  });

  // ✅ 인증 필드를 회원가입 버튼 위에 삽입
  const submitBtn = element.querySelector(".submit");
  if (submitBtn) {
    element.insertBefore(authContainer, submitBtn);
    setupAuthEvents(authContainer); // ✅ 핸들러 연결
  } else {
    console.error("❌ 회원가입 버튼을 찾을 수 없어 인증 필드를 추가할 수 없습니다.");
  }
};
