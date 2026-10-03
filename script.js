// Мобильное меню
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

// Статус "открыто / закрыто" по текущему времени (часы заданы в HTML выше)
function updateHoursStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = вс
  const hour = now.getHours() + now.getMinutes() / 60;
  const isWeekend = day === 0 || day === 6;
  const open = isWeekend ? 9 : 7.5;
  const close = 21;
  const isOpen = hour >= open && hour < close;
  const el = document.getElementById('hoursStatus');
  el.textContent = isOpen ? 'Открыто сейчас' : 'Сейчас закрыто';
}
updateHoursStatus();
setInterval(updateHoursStatus, 60000);
