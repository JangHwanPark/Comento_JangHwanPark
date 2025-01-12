const PROJECTS = [
  {
    name: "Teamming",
    description: "프로젝트 팀 구인 구직을 위한 웹 플랫폼입니다. 사용자는 자신의 프로젝트를 등록하고 팀원을 모집하거나, 원하는 프로젝트에 지원할 수 있습니다.",
    role: "프론트엔드"
  },
  {
    name: "DA (온라인 학식 결제 시스템)",
    description: "학식 결제 프로세스를 간소화하기 위한 온라인 플랫폼입니다. 학생들은 학식을 선택하고 간편 결제를 통해 예약 및 결제가 가능합니다.",
    role: "프론트엔드"
  }
];

const PROJECTS_LIST_CLASS = document.querySelector(".projects-list");

PROJECTS.forEach(project => {
  PROJECTS_LIST_CLASS.insertAdjacentHTML(
    "afterbegin",
    `<li><h3>${project.name}</h3></li>`
  );
});