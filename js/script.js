// Show/Hide "Back to Top" button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Back to Top event
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle sidebar visibility on smaller screens
document.getElementById('sidebarToggle').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('show-sidebar');
  console.log("clicked")
});
