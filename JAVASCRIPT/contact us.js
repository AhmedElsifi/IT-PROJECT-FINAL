window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.9;
      if (sectionTop < triggerPoint) {
        section.classList.add("active");
      }
    });
  }
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});
