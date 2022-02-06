const popup = () => {
	let news = document.querySelector("div.popup");
	let newsOverlay = document.querySelector("div.popup__overlay");
	let submitButton = document.querySelector('div.popup .popup__body form button[type="submit"]');
	let closeButton = document.querySelector("div.popup .popup__body form button.popup__close");

	document.addEventListener("mouseleave", (event) => {
		if (
			event.clientY <= 0 ||
			event.clientX <= 0 ||
			event.clientX >= window.innerWidth ||
			event.clientY >= window.innerHeight
		) {
			news.classList.add("open");
			newsOverlay.classList.add("open");
		}
	});

	submitButton.addEventListener("click", (e) => {
		alert("Merci pour votre abonnement !");
		news.classList.remove("open");
		newsOverlay.classList.remove("open");
		e.preventDefault();
	});

	closeButton.addEventListener("click", (e) => {
		news.classList.remove("open");
		newsOverlay.classList.remove("open");
		e.preventDefault();
	});
};

export { popup };
