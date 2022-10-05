document
  .querySelector('.services-item-form')
  .addEventListener('change', function ({ target }) {
    document.querySelectorAll('.services-radio-wrapper').forEach(item => {
      item.classList.remove('active');
    });
    target.closest('.services-radio-wrapper').classList.add('active');
  });
