const singleProduct = (products) => {
	const productsElement = document.querySelectorAll(".store__product");
	const singleNavigations = document.querySelector(".single__navigations");
	let currentProduct;

	if (location.hash) {
		let urlId = Number(location.hash.substring(1));

		products.forEach((product) => {
			if (product.productId == urlId) {
				currentProduct = product;
				buildSingleProduct(currentProduct);
			}
		});
	}

	productsElement.forEach((product) => {
		product.addEventListener("click", () => {
			location.hash = `${product.dataset.id}`;

			let currentSection = document.querySelector(".active");
			let destinationSection = document.querySelector(`.single`);

			currentSection.classList.remove("active", "animate");
			destinationSection.classList.add("active", "animate");
		});
	});

	window.addEventListener("hashchange", () => {
		let urlId = Number(location.hash.substring(1));

		products.forEach((product) => {
			if (product.productId == urlId) {
				currentProduct = product;
				buildSingleProduct(currentProduct);
			}
		});

		let filterProducts = products.filter((product) => {
			return product.id != currentProduct.id;
		});

		singleNavigations.innerHTML = "";

		filterProducts.forEach((product) => {
			singleNavigations.innerHTML += `
				<span data-destination="${product.id}" class="single__navigation">${product.title}</span>`;
			clickOnProduct();
		});
	});
};

const buildSingleProduct = (product) => {
	document.querySelector(".single__title-content").textContent = product.productTitle;
	document.querySelector(".single__product-title").textContent = product.productTitle;
	document.querySelector(".single__product-description").innerHTML = product.productDescription;
	document.querySelector(".single__product-img img").src = `assets/images/${product.productImage}`;
};

const clickOnProduct = () => {
	const others = document.querySelectorAll(".single__navigation");
	others.forEach((other) => {
		other.addEventListener("click", () => {
			location.hash = other.dataset.destination;
		});
	});
};

export { singleProduct };
