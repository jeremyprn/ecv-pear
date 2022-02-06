const lightMode = () => {
	const body = document.body;
	const activeLightMode = document.querySelector(".header__settings-checkbox");

	activeLightMode.addEventListener("change", () => {
		if (activeLightMode.checked) {
			body.classList.add("light");
		} else {
			body.classList.remove("light");
		}
	});
};

export { lightMode };
