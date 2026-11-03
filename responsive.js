/* Keep the original links available when JavaScript is disabled. */
document.querySelectorAll('nav').forEach((nav) => {
  const customLinks = nav.querySelector('.nav-links');
  const links = customLinks || nav.querySelector('.nav-link')?.parentElement;
  const shell = nav.querySelector('.mx') || (customLinks ? nav : null);
  if (!links || !shell) return;
  nav.classList.add('site-nav');
  shell.classList.add('nav-shell');
  const row = customLinks ? null : shell.firstElementChild;
  if (row && row !== links) row.classList.add('nav-brand-row');
  const brand = nav.querySelector('a[href="index.html"]:not(.nav-link)');
  if (brand && brand.parentElement !== row && brand.parentElement !== shell) {
    brand.parentElement.classList.add('nav-brand-group');
  }
  const contact = nav.querySelector('a[href^="tel:"]');
  contact?.parentElement.classList.add('nav-contacts');
  links.classList.add('mobile-nav-links');
  links.id = 'mobile-navigation';
  // Moving the menu to the shell gives every page the same mobile reading order.
  shell.append(links);
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'mobile-menu-toggle';
  toggle.textContent = 'Menu ☰';
  toggle.setAttribute('aria-controls', links.id);
  toggle.setAttribute('aria-expanded', 'false');
  shell.insertBefore(toggle, links);
  const setOpen = (open) => {
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close ×' : 'Menu ☰';
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('menu-open')));
  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('menu-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  matchMedia('(max-width: 1100px)').addEventListener('change', () => setOpen(false));
  nav.classList.add('menu-ready');
});
