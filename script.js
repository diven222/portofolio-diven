// Hamburger toggle
document.getElementById('toggleButton').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('hidden');
});

// Kirim form
document.getElementById('formKontak').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Pesan berhasil dikirim!');
});

// Scroll Reveal animasi
ScrollReveal().reveal('section', {
  delay: 200,
  distance: '40px',
  origin: 'bottom',
  duration: 800,
  reset: false
});

// Dark mode
const toggleDark = document.getElementById('darkModeToggle');
toggleDark.addEventListener('click', () => {
  const body = document.getElementById('body');
  body.classList.toggle('bg-gray-900');
  body.classList.toggle('text-white');
  toggleDark.textContent = body.classList.contains('bg-gray-900') ? '☀️' : '🌙';
});
