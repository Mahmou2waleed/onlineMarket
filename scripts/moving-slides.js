document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('#slider img');
  const navLinks = document.querySelectorAll('#slider-nav a');
  let currentIndex = 0;

  function showSlide(index) {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(${-index * 100}%)`;
    navLinks.forEach(link => link.style.backgroundColor = 'rgba(255, 255, 255, 0.75)');
    navLinks[index].style.backgroundColor = 'rgba(255, 255, 255, 1)';
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  setInterval(autoSlide, 3000);
});
