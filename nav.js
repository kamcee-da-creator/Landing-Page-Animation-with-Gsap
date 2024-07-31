const primaryNav = document.querySelector(".nav__links");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.classList.add('active');
  }else if ( visibility === 'true'){
    primaryNav.setAttribute("data-visible", false);
    navToggle.classList.remove('active');
}
});
