window.addEventListener("DOMContentLoaded", () => {
	//   AddDividers();

	setTimeout(() => {
		const loading_div = document.querySelector(".loading");
		loading_div.classList.add("fade");
	}, 2000);

	GlideLoading();
});

function GlideLoading() {
	var glide = new Glide(".glide", {
		type: "carousel",
		startAt: 0,
		perView: 3,
		breakpoints: {
			1024: {
				perView: 2,
			},
			800: {
				perView: 1,
			},
			400: {
				perView: 1,
			},
		},
	});

	glide.mount();
}
