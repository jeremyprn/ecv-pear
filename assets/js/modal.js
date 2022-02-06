const modal = () => {
    const lightBox = document.querySelector("section.single .modal");
    let closeBtn = document.querySelector("section.single .close");
    let imgProduct = document.querySelector("section.single .single__product .single__product-img");
    const lightBoxImg = document.querySelector("section.single .modal .modal__content img");

    imgProduct.addEventListener('click', () => {
        lightBox.classList.add('show');
        lightBoxImg.src = imgProduct.children[0].src;
    });

    lightBox.addEventListener('click', () => {
        lightBox.classList.remove('show');
    });

    window.onkeyup = function (event) {
        if (event.keyCode == 27 && lightBox.classList.contains('show')) {
            lightBox.classList.remove('show');
        }
    }

    closeBtn.addEventListener('click', () => {
        lightBox.classList.toggle('show');
    });
};
export { modal };