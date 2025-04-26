document.addEventListener('DOMContentLoaded', () => {
  const modeBtn = document.querySelector('.mode-toggle');
  const root = document.documentElement;

  // Inicjalizacja z localStorage
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    root.setAttribute('data-theme', 'dark');
    modeBtn.textContent = '☀️';
  }

  modeBtn.addEventListener('click', () => {
    if (root.getAttribute('data-theme') === 'dark') {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      modeBtn.textContent = '🌙';
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      modeBtn.textContent = '☀️';
    }
  });
});
