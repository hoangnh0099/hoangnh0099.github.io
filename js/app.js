const main = document.querySelector(".main");

const about = document.querySelector(".about");
const skill = document.querySelector(".skill");
const education = document.querySelector(".education");
const project = document.querySelector(".project");

const detailAbout = document.querySelector(".detail-about");
const detailSkill = document.querySelector(".detail-skill");
const detailEducation = document.querySelector(".detail-education");
const detailProject = document.querySelector(".detail-project");

about.addEventListener("click", () => {
  detailAbout.style.display = "block";

  about.classList.add("active");
  skill.classList.remove("active");
  education.classList.remove("active");
  project.classList.remove("active");

  detailSkill.style.display = "none";
  detailEducation.style.display = "none";
  detailProject.style.display = "none";
})

skill.addEventListener("click", () => {
  detailSkill.style.display = "block";

  skill.classList.add("active");
  about.classList.remove("active");
  education.classList.remove("active");
  project.classList.remove("active");

  detailAbout.style.display = "none";
  detailEducation.style.display = "none";
  detailProject.style.display = "none";
})

education.addEventListener("click", () => {
  detailEducation.style.display = "block";

  education.classList.add("active");
  skill.classList.remove("active");
  about.classList.remove("active");
  project.classList.remove("active");

  detailAbout.style.display = "none";
  detailSkill.style.display = "none";
  detailProject.style.display = "none";
})

project.addEventListener("click", () => {
  detailProject.style.display = "block";
  
  project.classList.add("active");
  education.classList.remove("active");
  skill.classList.remove("active");
  about.classList.remove("active");

  detailEducation.style.display = "none";
  detailAbout.style.display = "none";
  detailSkill.style.display = "none";
})
