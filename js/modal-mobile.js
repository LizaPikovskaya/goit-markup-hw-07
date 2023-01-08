(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
    const toggleModal = () => {
      const isModalOpen =
        refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
      refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
      refs.modal.classList.toggle('is-hidden');
      const scrollLockMethod = !isModalOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  })();