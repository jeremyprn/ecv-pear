const navigation = () => {
	const links = document.querySelectorAll(".header__link");

	if (location.hash != "") {
		location.href = "";
	}

	links.forEach((link) => {
		link.addEventListener("click", () => {
			let currentSection = document.querySelector(".active");
			let currentLink = document.querySelector(".header__link--current");
			let destinationSection = document.querySelector(`.${link.dataset.link}`);

			currentSection.classList.remove("active", "animate");
			currentLink.classList.remove("header__link--current");
			destinationSection.classList.add("active", "animate");

			let classNames = destinationSection.className.split(" ");
			let destinationLink = document.querySelector(`.header__navigation span[data-link=${classNames[1]}]`);
			destinationLink.classList.add("header__link--current");
		});
	});
};

export { navigation };
