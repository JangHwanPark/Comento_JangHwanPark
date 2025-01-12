document.addEventListener("DOMContentLoaded", () => {
  const EXPERIENCE = [
    {
      name: "EA Korea",
      startDate: "2020.02",
      endDate: "2022.02",
    },
    {
      name: "안산대학교",
      startDate: "2021.03",
      endDate: "~",
    }
  ];

  const EXPERIENCE_LIST_CLASS = document.querySelector(".experience-list");

  EXPERIENCE.forEach(experience => {
    EXPERIENCE_LIST_CLASS.insertAdjacentHTML(
      "afterbegin",
      `<li><h3>${experience.name}</h3></li>`
    );
  });
});
