/**
 * 회원가입 데이터 로컬스토리지 저장
 * @param {HTMLElement} form - 회원가입 폼 요소
 */
export const saveUserInfo = (form) => {
  const formData = {};
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
  console.log("데이터 저장함 : ", formData);
}