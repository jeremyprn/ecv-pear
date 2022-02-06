const settings = () => {
	const countriesCurrencies = ["€", "¥", "$"];
	const currencyConversion = [1, 127.81, 1.13];
	const settings = document.querySelector(".header__settings-icon");
	const settingsChoices = document.querySelector(".header__settings-box");
	const settingsSelect = document.querySelector(".header__settings-currencies");
	let lastCountryCurrency = "€";

	settings.addEventListener("click", () => {
		settingsChoices.classList.toggle("open");
	});

	settingsSelect.addEventListener("change", (event) => {
		let choice = event.target.value;
		let newCurrentCountryCurrency = countriesCurrencies[choice];
		updateCurrency(newCurrentCountryCurrency, lastCountryCurrency);
	});

	const updateCurrency = (newCurrentCountryCurrency) => {
		let countriesCurrencies = document.querySelectorAll(".countryCurrency");
		countriesCurrencies.forEach((countryCurrency) => {
			countryCurrency.textContent = newCurrentCountryCurrency;
		});

		const prices = document.querySelectorAll(".store__product-price");

		if (newCurrentCountryCurrency != lastCountryCurrency) {
			prices.forEach((price) => {
				let numberPrice = Number(price.textContent.replace(",", "."));

				if (newCurrentCountryCurrency === "$" && lastCountryCurrency === "€") {
					price.textContent = String((numberPrice * currencyConversion[2]).toFixed(2)).replace(".", ",");
				} else if (newCurrentCountryCurrency === "€" && lastCountryCurrency === "$") {
					price.textContent = String((numberPrice / currencyConversion[2]).toFixed(2)).replace(".", ",");
				} else if (newCurrentCountryCurrency === "¥" && lastCountryCurrency === "€") {
					price.textContent = String((numberPrice * currencyConversion[1]).toFixed(2)).replace(".", ",");
				} else if (newCurrentCountryCurrency === "€" && lastCountryCurrency === "¥") {
					price.textContent = String((numberPrice / currencyConversion[1]).toFixed(2)).replace(".", ",");
				} else if (newCurrentCountryCurrency === "$" && lastCountryCurrency === "¥") {
					let frenchPrice = numberPrice / currencyConversion[1];
					price.textContent = String((frenchPrice * currencyConversion[2]).toFixed(2)).replace(".", ",");
				} else if (newCurrentCountryCurrency === "¥" && lastCountryCurrency === "$") {
					let frenchPrice = numberPrice / currencyConversion[2];
					price.textContent = String((frenchPrice * currencyConversion[1]).toFixed(2)).replace(".", ",");
				}
			});

			lastCountryCurrency = newCurrentCountryCurrency;
		}
	};
};

export { settings };
