class Modal {
    constructor(modal) {
        this.isOpen = false;
        this.modal = modal;
        this.closeModal = modal.querySelectorAll('[data-close]');
        this.closeModal.forEach(item => {
            item.addEventListener("click", (e) => {
                this.close();
            });
        });
    }
    open() {
        this.modal.classList.add('show-modal');
    }
    close() {
       this.modal.classList.remove('show-modal');
    }
    
}