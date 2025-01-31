import {createElement} from "../utils";

/**
 * ✅ 인증 코드 UI 컴포넌트
 * @param {string} authCode - 생성된 인증번호
 * @returns {HTMLElement} - 인증번호 UI 요소
 */
export const componentAuthCode = (authCode) => {
  const authCodeWrap = createElement("div", {
    class: "input_wrap code_display" });

  const auth = createElement("div", {
    class: "code_wrap" });

  const title = createElement("span", {
    class: "title" }, "인증번호 : ");

  const code = createElement("span", {
    class: "code" }, authCode);

  auth.append(title, code);
  authCodeWrap.appendChild(auth);

  return authCodeWrap;
}