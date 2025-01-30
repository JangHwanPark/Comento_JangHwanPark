/**
 * 공백 검사 (빈 문자열 또는 공백만 포함된 경우)
 * @param {string} value - 검사할 입력값
 * @returns {boolean} - 공백이면 true, 아니면 false
 */
const isEmpty = (value) => {
  return value.trim() === "";
};

/**
 * 길이 검사 (아이디 & 비밀번호 공통)
 * @param {string} value - 검사할 입력값
 * @param {number} min - 최소 길이
 * @param {number} max - 최대 길이
 * @returns {boolean} - 길이가 유효하면 true, 아니면 false
 */
const isValidLength = (value, min, max) => {
  return value.length >= min && value.length <= max;
};

/**
 * SQL 인젝션 방지 (입력값에 위험한 특수문자가 포함되어 있는지 확인)
 * @param {string} value - 검사할 입력값
 * @returns {boolean} - 위험한 문자 포함 시 true, 아니면 false
 */
const hasInvalidCharacters = (value) => {
  const regex = /[<>'"%;)(&+]/g; // SQL 인젝션에서 사용될 수 있는 문자들
  return regex.test(value);
};

/**
 * 전화번호 형식 검사 (01012345678 형식만 허용)
 * @param {string} value - 검사할 전화번호 값
 * @returns {boolean} - 형식이 올바르면 true, 아니면 false
 */
const isValidPhone = (value) => {
  const phoneRegex = /^01[0-9]{9}$/; // 01012345678 형식만 허용
  return phoneRegex.test(value);
};

// ✅ 테스트 코드
console.log(isEmpty("   ")); // true
console.log(isValidLength("user1234", 4, 16)); // true (아이디 길이 검사)
console.log(isValidLength("password123!", 8, 20)); // true (비밀번호 길이 검사)
console.log(hasInvalidCharacters("DROP TABLE users;")); // true (SQL 인젝션 방지)
console.log(isValidPhone("01012345678")); // true
console.log(isValidPhone("010-1234-5678")); // false (허용되지 않음)
