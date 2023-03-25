function burgerMenu() {
	const burger = document.querySelector(".burger")
	const headerCategories = document.querySelector(".header__categories")
	const overlay = document.querySelector(".overlay")

	burger.addEventListener("click", () => {
		burger.classList.toggle("active")
		headerCategories.classList.toggle("active")
		overlay.classList.toggle("active")
	})

	overlay.addEventListener("click", () => {
		burger.classList.remove("active")
		headerCategories.classList.remove("active")
		overlay.classList.remove("active")
	})

	window.addEventListener("resize", () => {
		if (window.innerWidth > 768.98) {
			burger.classList.remove("active")
			headerCategories.classList.remove("active")
			overlay.classList.remove("active")

			//
		}
	})
}
burgerMenu()

const cardItems = document.querySelectorAll(".card__left")

cardItems.forEach(cardItem => {
	const video = cardItem.querySelector(".card__video")
	video.addEventListener("mouseenter", () => {
		video.play()
	})
	video.addEventListener("mouseleave", () => {
		video.pause()
	})
})