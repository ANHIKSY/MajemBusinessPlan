// Reveal animations on scroll
const cards = document.querySelectorAll('.card');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Dark Mode toggle
const toggleBtn = document.querySelector('.toggle-dark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});