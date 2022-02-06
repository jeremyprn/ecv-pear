const buildProducts = (products) => {
	const containerProducts = document.querySelector(".store__products");

	products.forEach((product) => {
		containerProducts.innerHTML += `
            <div data-link="store" data-id="${product.productId}" class="store__product">
				<div class="store__product-text">
					<div class="store__product-name">${product.productTitle}</div>
					<div class="store__product-slogan">${product.productSubtitle}<br /></div>
					<div class="store__product-prices">
					    <span class="store__product-price">${product.productPrice}</span> <span class="countryCurrency">€</span>
				    </div>
				</div>
			    <img class="store__product-img  ${product.productImageFull ? "store__product-img--full" : ""}" src="assets/images/${
			product.productImage
		}" alt="${product.productTitle}" />
		    </div>
        `;
	});
};

export { buildProducts };
