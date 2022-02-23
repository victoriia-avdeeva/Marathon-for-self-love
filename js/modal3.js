(() => {
    const refs2 = {
        openModalBtn: document.querySelector("[data-modal-open3]"),
        closeModalBtn: document.querySelector("[data-modal-close3]"),
        modal: document.querySelector("[data-modal-3]"),
    };

    refs2.openModalBtn.addEventListener("click", toggleModal);
    refs2.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs2.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open");
    }
})();