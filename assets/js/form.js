const form = (products) => {
	let currentProduct;
	const takeContact = document.querySelector(".single__product-contact");
	const hiddenField = document.querySelector(".contact__form-input--hiden");

	if (location.hash) {
		let urlId = Number(location.hash.substring(1));

		products.forEach((product) => {
			if (product.productId == urlId) {
				currentProduct = product;
			}
		});
	}

	takeContact.addEventListener("click", () => {
		if (location.hash) {
			let urlId = Number(location.hash.substring(1));

			products.forEach((product) => {
				if (product.productId == urlId) {
					currentProduct = product;
				}
			});
		}

		let currentSection = document.querySelector(".active");
		let currentLink = document.querySelector(".header__link--current");
		let destinationSection = document.querySelector(`.contact`);

		currentSection.classList.remove("active", "animate");
		currentLink.classList.remove("header__link--current");
		destinationSection.classList.add("active", "animate");

		let classNames = destinationSection.className.split(" ");
		let destinationLink = document.querySelector(`.header__navigation span[data-link=${classNames[1]}]`);
		destinationLink.classList.add("header__link--current");

		hiddenField.value = currentProduct.title;
		hiddenField.style.display = "block";
		hiddenField.disabled = true;
		hiddenField.readonly = true;
	});

	const submit = document.querySelector(".contact__form-submit");
	submit.addEventListener("click", (event) => {
		event.preventDefault();
		if (confirm("Souhaitez-vous vraiment envoyé ?")) {
			alert("Votre message a bien été envoyé.");
			location.href = "";
		}
	});
};

export { form };
