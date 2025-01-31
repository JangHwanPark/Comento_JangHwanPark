import {createElement} from "../utils";
import {componentInputField} from "../components";
import {setupFormEvents} from "../service";

/**
 * ✅ 로그인 / 회원가입 폼 동적 생성
 * @param {HTMLElement} form - 대상 폼 요소
 * @param {Array} data - 입력 필드 데이터 배열
 * @param {String} buttonText - 버튼 텍스트 (기본값: "제출")
 */
export const componentForm = (
    form,
    data,
    buttonText = "제출"
) => {
  if (!form) {
    console.error("폼 요소가 존재하지 않음");
    return;
  }

  // DOM 조작 최소화를 위한 Fragment
  const fragment = document.createDocumentFragment();

  // ✅ 필드 생성 및 추가 (인증 필드는 제외)
  data.filter(({name}) => !["authentication", "phone"].includes(name))
      .forEach((field) => fragment.appendChild(componentInputField(field)));

  // ✅ 버튼 추가
  const submitButton = createElement("button", {
    class: "submit"
  }, buttonText);

  fragment.appendChild(submitButton);
  form.appendChild(fragment);

  // ✅ 이벤트 설정 (자동 매핑)
  setupFormEvents(form);
};