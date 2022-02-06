class PearProduct {
	constructor(id, title, subtitle, price, image, imageFull, description) {
		this.id = id;
		this.title = title;
		this.subtitle = subtitle;
		this.price = price;
		this.image = image;
		this.imageFull = imageFull;
		this.description = description;
	}

	get productId() {
		return this.id;
	}

	get productTitle() {
		return this.title;
	}

	get productSubtitle() {
		return this.subtitle;
	}

	get productPrice() {
		return this.price;
	}

	get productImage() {
		return this.image;
	}

	get productImageFull() {
		return this.imageFull;
	}

	get productDescription() {
		return this.description;
	}
}

export { PearProduct };
