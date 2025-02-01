/**
 * 회원가입 데이터 로컬스토리지 저장
 * @param {HTMLElement} form - 회원가입 폼 요소
 */
export const saveUserInfo = (form) => {
  const formData = {
    defaultCnt: [{
      todoCnt: 0,
      completeCnt: 0,
      deleteCnt: 0,
    }]
  };

  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    formData[input.name] = input.value.trim();
  });

  // 기존 사용자 목록 호출
  const localGet = localStorage.getItem("users");
  const users = localGet ? JSON.parse(localGet) : [];
  users.push(formData);

  const localSetUsers = JSON.stringify(users);
  localStorage.setItem("users", localSetUsers);
}

export const getUserData = (id) => {
  const data = localStorage.getItem("users"); // 로컬스토리지에서 데이터 가져오기
  if (!data) return null; // 데이터가 없으면 null 반환

  const users = JSON.parse(data);
  const user = users.find((user) => user.user_id === id);
  return user || null;
};

/**
 * ✅ 세션스토리지에서 현재 로그인한 사용자 데이터 가져오기
 * @returns {Object|null} - 사용자 데이터 반환 (없으면 null)
 */
export const getCurrentUser = () => {
  const userData = sessionStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};

/**
 * ✅ 세션스토리지에 현재 로그인한 사용자 데이터 업데이트
 * @param {Object} updatedUser - 업데이트할 사용자 객체
 */
export const setCurrentUser = (updatedUser) => {
  sessionStorage.setItem("user", JSON.stringify(updatedUser));
};