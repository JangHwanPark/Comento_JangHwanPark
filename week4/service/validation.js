import {ERROR_MESSAGES, getFields} from "../data";
import {removeError, showError} from "../utils";
import {getUserData} from "../service";

/**
 * 공백 검사 (빈 문자열 또는 공백만 포함된 경우)
 * @param {string} value - 검사할 입력값
 * @returns {boolean} - 공백이면 true, 아니면 false
 */
export const isEmpty = (value) => {
  return value.trim() === "";
};

/**
 * 길이 검사 (아이디 & 비밀번호 공통)
 * @param {string} value - 검사할 입력값
 * @param {number} min - 최소 길이
 * @param {number} max - 최대 길이
 * @returns {boolean} - 길이가 유효하면 true, 아니면 false
 */
export const isValidLength = (value, min, max) => {
  return value.length >= min && value.length <= max;
};

/**
 * SQL 인젝션 방지 (입력값에 위험한 특수문자가 포함되어 있는지 확인)
 * @param {string} value - 검사할 입력값
 * @returns {boolean} - 위험한 문자 포함 시 true, 아니면 false
 */
export const hasInvalidCharacters = (value) => {
  const regex = /[<>'"%;)(&+]/g; // SQL 인젝션에서 사용될 수 있는 문자들
  return regex.test(value);
};

/**
 * 이메일 형식 검사 (example123@gmail.com...)
 * @param {string} value - 검사할 이메일 값
 * @returns {boolean} - 형식이 올바르면 true, 아니면 false
 */
export const isValidEmail = (value) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(value);
}

/**
 * 전화번호 형식 검사 (01012345678 형식만 허용)
 * @param {string} value - 검사할 전화번호 값
 * @returns {boolean} - 형식이 올바르면 true, 아니면 false
 */
export const isValidPhone = (value) => {
  const phoneRegex = /^01[0-9]{9}$/; // 01012345678 형식만 허용
  return phoneRegex.test(value);
};

/**
 * 생성된 인증번호와 입력한 인증번호 일치 여부 검사
 * @param {string} userInput - 사용자가 입력한 인증번호
 * @param {string} generatedCode - 생성된 인증번호
 * @returns {boolean} - 인증번호가 일치하면 true, 아니면 false
 */
export const isAuthCodeValid = (userInput, generatedCode) => {
  if (!userInput || !generatedCode) {
    console.error("⚠️ 인증번호가 제공되지 않았습니다.");
    return false;
  }
  return userInput.trim() === generatedCode.trim();
}

/**
 * 유효성 검사 공통 함수
 * @param {HTMLElement} input - 입력 필드
 * @param {Function} validateFn - 유효성 검사 함수
 * @param {string} errorType - 오류 메시지 타입 (ERROR_MESSAGES 키 값)
 * @param {Array} params - 오류 메시지에 전달할 값 (예: min, max 등)
 * @returns {boolean} - 유효하면 true, 아니면 false
 */
export const validateField = (input, validateFn, errorType, ...params) => {
  if (!input) return false;

  const labelElement = input.closest(".input_wrap")?.querySelector("label");
  const label = labelElement ? labelElement.textContent.trim() : null;

  // ✅ 유효성 검사 실행
  if (isEmpty(input.value) || !validateFn(input.value)) {
    const errorMessage = typeof ERROR_MESSAGES[errorType] === "function"
        ? ERROR_MESSAGES[errorType](label, ...params)
        : ERROR_MESSAGES[errorType];

    showError(input, errorMessage);
    return false;
  }

  // ✅ 필드가 유효한 경우만 에러 제거 실행
  removeError(input);
  return true;
};

/**
 * 인증번호 검증 함수
 * @param {HTMLElement} form - 인증을 수행할 폼 요소
 * @returns {boolean} - 인증 성공 여부
 */
export const isAuthVerification = (form) => {
  const input = form.querySelector("input[name='authentication']");
  const authValue = document.querySelector(".code")?.textContent;

  if (!input || !authValue) {
    showError(input, ERROR_MESSAGES.authCodeMissing);
    return false;
  }

  if (isEmpty(input.value)) {
    showError(input, ERROR_MESSAGES.authCodeEmpty);
    return false;
  }

  return validateField(input, (val) =>
      isAuthCodeValid(val, authValue), "authCodeMismatch");
};

/**
 * ✅ 로그인 유효성 검사 (아이디 비밀번호)
 * @param {HTMLElement} form - 회원가입 폼
 * @returns {boolean} - 모든 필드가 유효하면 true, 아니면 false
 */
export const isValidSignInFields = (form) => {
  if (!form) return false;
  let isValid = true;

  const idInput = form.querySelector("input[name='user_id']");
  const passwordInput = form.querySelector("input[name='password']");

  // ✅ 공백 검사
  if (isEmpty(idInput.value)) {
    showError(idInput, ERROR_MESSAGES.empty("아이디"));
    isValid = false;
  }

  if (isEmpty(passwordInput.value)) {
    showError(passwordInput, ERROR_MESSAGES.empty("비밀번호"));
    isValid = false;
  }

  // 기본 검사 실패 시 중단
  if (!isValid) return false;

  // ✅ 로컬스토리지에서 사용자 데이터 가져오기
  const userData = getUserData(idInput.value);

  // ✅ 아이디 확인 (로컬스토리지의 아이디와 비교)
  if (!userData || userData.user_id !== idInput.value) {
    showError(idInput, "존재하지 않는 아이디입니다.");
    return false;
  }

  if (userData.password !== passwordInput.value) {
    showError(passwordInput, "비밀번호가 일치하지 않습니다.");
    return false;
  }

  return true;
}

/**
 * ✅ 회원가입 필드별 유효성 검사
 * @param {HTMLElement} form - 회원가입 폼
 * @returns {boolean} - 모든 필드가 유효하면 true, 아니면 false
 */
export const isValidSignUpFields = (form) => {
  let isValid = true;

  // ✅ 필드별 검증
  const fields = getFields();
  fields.forEach(({name, label, min, max, checkSpecial, match, validateFn, errorKey}) => {
    const input = form.querySelector(`input[name='${name}']`);
    if (!input) return;

    let fieldValid = true;

    // ✅ 공백 검사 (공백이면 이후 검사를 하지 않음)
    if (!validateField(input, (val) => !isEmpty(val), "empty", label)) {
      isValid = false;
      fieldValid = false;
    }

    // ✅ 길이 검사 (공백이 아닐 때만 진행)
    if (fieldValid && min && max && !validateField(input, (val) => isValidLength(val, min, max), "length", label, min, max)) {
      isValid = false;
      fieldValid = false;
    }

    // ✅ 특수문자 검사
    if (fieldValid && checkSpecial && !validateField(input, (val) => !hasInvalidCharacters(val), "invalidCharacters", label)) {
      isValid = false;
      fieldValid = false;
    }

    // ✅ 비밀번호 확인 검사 (일치 여부)
    if (fieldValid && match && !validateField(input, (val) => val === form.querySelector(`input[name='${match}']`)?.value, "authCodeMismatch")) {
      isValid = false;
      fieldValid = false;
    }

    // ✅ 이메일 & 휴대폰 검사
    if (fieldValid && validateFn && !validateField(input, validateFn, errorKey, label)) {
      isValid = false;
      fieldValid = false;
    }

    // ✅ 해당 필드가 유효한 경우만 removeError 실행
    if (fieldValid) removeError(input);
  });

  return isValid;
};
