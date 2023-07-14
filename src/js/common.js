document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#open-modal-btn').addEventListener('click', function(){
        document.querySelector('#my-modal').classList.add('active');
    });
    document.querySelector('#close-my-modal-btn').addEventListener('click', function(){
        document.querySelector('#my-modal').classList.remove('active');
    });

    //Закрыть попап с помощью Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelector('#my-modal').classList.remove('active');
        }
    })

    //Закрыть попап кликом вне его
    document.querySelector('#my-modal .pop_up__body').addEventListener('click', event => {
        event._isClickWithInModal = true;
    });

    document.querySelector('#my-modal').addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('active');
    })
});