console.log("AI/ML Portfolio Loaded Successfully!");

// Stagger card animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
  });
});

const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('active');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('active');
  });
});
