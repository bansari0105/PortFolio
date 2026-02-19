const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('active');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('active');
  });
});
