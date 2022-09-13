(() => {
  const burger = document?.querySelector('.burger');
  const nav = document?.querySelector('.header__nav');
  const body = document.body;
  const navItems = nav?.querySelectorAll('a');
  const search = document?.querySelector('.header__search');
  const searchForm = document?.querySelector('.header__form');
  const searchClose = document?.querySelector('.header__close-search');
  const checkWrapper = document?.querySelector('.footer__check-agree');
  const checkbox = document?.querySelector('.footer__checkbox');

  let tabsBtn = document.querySelectorAll('.work__btn-tabs');
  let tabsItem = document.querySelectorAll('.work__content-item');
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });

  burger?.addEventListener('click', () => {
    body.classList?.toggle('stop-scroll');
    burger?.classList?.toggle('burger--active');
    nav.classList?.toggle('nav--visible')
  });

  search?.addEventListener('click', () => {
    searchForm.classList?.add('header__form--active');
    searchForm.classList?.remove('header__form--inable');
  });

  searchClose?.addEventListener('click', (e) => {
    searchForm?.classList?.add('header__form--inable');
    searchForm?.classList?.remove('header__form--active');
    e.preventDefault();
  });

  navItems.forEach(el => {
    el.addEventListener('click', () => {
      body.classList?.remove('stop-scroll');
      burger?.classList?.remove('burger--active');
      nav.classList?.remove('nav--visible');
    });
  });

  tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn){btn.classList.remove('work__btn-tabs--active')});
      e.currentTarget.classList.add('work__btn-tabs--active');

      tabsItem.forEach(function(element){element.classList.remove('work__content-item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('work__content-item--active');
    });
  });

  new Accordion('.faq__list', {
    elementClass:'faq__item',
    triggerClass: 'faq__trigger',
    panelClass: 'faq__panel',
    activeClass: 'faq__item--active',
  });

  checkbox.addEventListener('click', () => {
    switch(checkWrapper.getAttribute('aria-checked')) {
      case 'true':
        checkWrapper.setAttribute('aria-checked', 'false');
        break;
      case 'false':
        checkWrapper.setAttribute('aria-checked', 'true');
        break
    }

  });

})();
