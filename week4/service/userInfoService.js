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
    }],
    todo: []
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

/**
 * 특정 유저 데이터 가져오기 (로컬스토리지)
 * @param {string} id - 검색할 사용자 ID
 * @returns {Object|null} - 해당 ID의 사용자 데이터 반환 (없으면 null)
 */
export const getUserData = (id) => {
  // 로컬스토리지에서 데이터 가져오기
  const data = localStorage.getItem("users");
  if (!data) return null;

  // JSON 변환 후 해당하는 사용자 데이터 찾기
  const users = JSON.parse(data);
  const user = users.find((user) => user.user_id === id);
  return user || null;
};

/**
 * 세션스토리지에서 현재 로그인한 사용자 데이터 가져오기
 * @returns {Object|null} - 사용자 데이터 반환 (없으면 null)
 */
export const getCurrentUser = () => {
  const userData = sessionStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};

/**
 * 세션스토리지에 현재 로그인한 사용자 데이터 업데이트
 * @param {Object} updatedUser - 업데이트할 사용자 객체
 */
let saveTimer = null;
export const setCurrentUser = (updatedUser) => {
  if (!updatedUser) return;

  // 세션스토리지, 로컬스토리지 업데이트
  sessionStorage.setItem("user", JSON.stringify(updatedUser));

  // 기존 타이머가 있으면 취소 (변경이 계속되면 저장을 미룸)
  if (saveTimer) clearTimeout(saveTimer);

  // 변경 후 2초 동안 추가 변경이 없으면 저장
  saveTimer = setTimeout(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map(user =>
        user.user_id === updatedUser.user_id ? updatedUser : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log("✅ 로컬스토리지 업데이트 완료");
  }, 2000);
};