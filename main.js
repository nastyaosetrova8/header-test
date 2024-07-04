import "./style.css";

// === MOBILE MENU ===
(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
  };
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
  });
})();

// === DROPDOWN MENU ===
document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelectorAll(
    ".m-header-dropbtn, .header-dropbtn"
  );

  dropdownBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const dropdownList = button.nextElementSibling;
      const dropdownArrow = button.querySelector(
        ".m-dropdown-arrow, .dropdown-arrow"
      );

      if (dropdownList.style.display === "flex") {
        dropdownList.style.display = "none";
        dropdownArrow.style.transform = "rotate(0deg)";
      } else {
        dropdownList.style.display = "flex";
        dropdownArrow.style.transform = "rotate(180deg)";
      }
    });
  });

  document.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownBtn.forEach((button) => {
      const dropdownList = button.nextElementSibling;
      const dropdownArrow = button.querySelector(
        ".m-dropdown-arrow, .dropdown-arrow"
      );

      if (dropdownList.style.display === "flex") {
        dropdownList.style.display = "none";
        dropdownArrow.style.transform = "rotate(0deg)";
      }
    });
  });
});
