// =========== Modal window =========== //
let modalForm = document.querySelector('.modal');
let body = document.querySelector('body');

let btnOpenModalFormIntro = document.querySelector('.btn_intro_form');
let btnOpenModalFormOrder = document.querySelector('.btn_order');

let btnCloseForm = document.querySelector('.btn_close_form');
let btnCancelForm = document.querySelector('.btn_cancel');

btnOpenModalFormIntro.onclick = function() {
    body.classList.add('no-scroll');
    modalForm.classList.add('open_modalForm');
};

btnOpenModalFormOrder.onclick = function() {
    body.classList.add('no-scroll');
    modalForm.classList.add('open_modalForm');
};

btnCloseForm.onclick = function () {
    body.classList.remove('no-scroll');
    modalForm.classList.remove('open_modalForm');
};

btnCancelForm.onclick = function () {
    body.classList.remove('no-scroll');
    modalForm.classList.remove('open_modalForm');
};

window.onclick = function(event) {
    if (event.target == modalForm) {
        body.classList.remove('no-scroll');
        modalForm.classList.remove('open_modalForm');
    }
};


// =========== Offer functions =========== //
let offerCards = document.querySelectorAll('.offer_card');

function handleClick(event) {
    let card = event.target.closest('.offer_card');
    let btnOfferClose = card.querySelector('.offer_card_close_ico');

    if (event.target != btnOfferClose) {
        offerCards.forEach(function(offerCard) {
            offerCard.classList.add('card_mini');
            offerCard.classList.remove('card_maxi');
        });
    
        card.classList.remove('card_mini');
        card.classList.add('card_maxi');
    } else {
        offerCards.forEach(function(offerCard) {
            offerCard.classList.remove('card_mini');
            offerCard.classList.remove('card_maxi');
        });
    };
};




