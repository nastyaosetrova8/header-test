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
