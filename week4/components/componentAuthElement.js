import {REGISTER_DATA} from "../data/form.js";
import {createElement} from "../utils";
import {useAuthentication, useVerification} from "../event";

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
  const authFields = REGISTER_DATA.filter(field =>
      field.name === "phone" || field.name === "authentication"
  );

  if (authFields.length === 0) return;

  // ✅ 기존 인증 필드 제거 (중복 방지)
  document.querySelector(".authentication")?.remove();

  // ✅ 인증 필드 전체를 감싸는 wrapper
  const authContainer = createElement("div", {
    class: "authentication"
  });

  // ✅ 필터링된 "휴대폰 번호" & "인증 번호" 필드 추가
  authFields.forEach(field => {
    console.log("🔍 필드 확인:", field.name);
    const fieldWrapper = createElement("div", {
      class: `input_wrap ${field.name === "authentication" ? "screen_out" : "phone_wrap"}`
    });

    const labelElement = createElement("label", {
      for: field.name, class: "screen_out"
    }, field.label);

    console.log(field.name)
    const inputElement = createElement("input", {
      type: field.type,
      name: field.name,
      id: field.name,
      placeholder: field.placeholder || "",
      required: field.required || false,
      value: field.value || "",
    });

    // ✅ 버튼 텍스트 설정
    const buttonText = field.name === "phone" ? "인증요청" : "인증하기";
    const authButton = createElement("button", { class: "auth_btn" }, buttonText);

    // ✅ "인증 요청" 버튼 클릭 시 클래스 토글
    if (field.name === "phone") useAuthentication(authButton, inputElement);
    if (field.name === "authentication") useVerification(authButton, inputElement);

    // 요소 추가
    fieldWrapper.appendChild(labelElement);
    fieldWrapper.appendChild(inputElement);
    fieldWrapper.appendChild(authButton);
    authContainer.appendChild(fieldWrapper);
  });

  // ✅ 인증 필드를 회원가입 버튼 위에 삽입
  const submitBtn = element.querySelector(".submit");
  if (submitBtn) element.insertBefore(authContainer, submitBtn);
  else console.error("회원가입 버튼을 찾을 수 없어 인증 필드를 추가할 수 없습니다.");
};
