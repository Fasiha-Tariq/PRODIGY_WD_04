// Animate skill bars
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector(".about");
  const progressBars = document.querySelectorAll(".progress-bar");

  function animateSkills() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos - 100) {
      progressBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      });
      window.removeEventListener("scroll", animateSkills);
    }
  }

  window.addEventListener("scroll", animateSkills);
  animateSkills(); // Animate if already visible
});
