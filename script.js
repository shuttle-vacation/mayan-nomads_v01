(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const dateInput = document.querySelector('#travel-date');
  if (dateInput) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dateInput.min = localToday;
  }

  const filters = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.experience-card[data-category]');
  filters.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      card.hidden = filter !== 'all' && !categories.includes(filter);
    });
  }));

  const form = document.querySelector('#inquiry-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const fields = [
        'Hola, Mayan Nomads. Quiero consultar una experiencia.',
        '',
        'Nombre: ' + data.get('name'),
        'Destino: ' + data.get('destination'),
        'Fecha tentativa: ' + (data.get('date') || 'Flexible / por definir'),
        'Número de viajeros: ' + data.get('travelers'),
        'Interés: ' + data.get('interest'),
        'Detalles: ' + (data.get('message') || 'Sin detalles adicionales'),
        '',
        'Entiendo que esta consulta no confirma una reservación.'
      ];
      const url = 'https://wa.me/529981182783?text=' + encodeURIComponent(fields.join('\n'));
      const status = document.querySelector('#form-status');
      if (status) status.textContent = 'Abriendo WhatsApp. Revisa tu mensaje antes de enviarlo.';
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
})();