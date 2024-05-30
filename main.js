const resMenuBtn = document.querySelector("#res-menu-btn");
const resMenu = document.querySelector(".res-menu");

resMenuBtn.addEventListener("click", () => {
  console.log(resMenuBtn);
  resMenu.classList.toggle("active");
});
