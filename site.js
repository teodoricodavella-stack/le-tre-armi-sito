document.documentElement.classList.add('js');
const menuButton = document.getElementById('hamb');
const menu = document.getElementById('menu');
function closeMenu() {
  menu?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Apri menu');
}
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!menu?.contains(event.target) && !menuButton?.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
