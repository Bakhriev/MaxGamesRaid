const cardVideos = document.querySelectorAll(".card__video")
cardVideos.forEach(cardVideo => {
	cardVideo.addEventListener("mouseenter", () => {
		cardVideo.play()
	})
	cardVideo.addEventListener("mouseleave", () => {
		cardVideo.pause()
	})
})

// Slow motion right
const swiper = new Swiper(".swiper", {
	autoplay: {
		delay: 0
	},
	loop: true,
	speed: 7000,
	spaceBetween: 20,
	slidesPerView: "auto",
	allowTouchMove: false
})

// Slow motion left
const swiperRight = new Swiper(".swiper-reverse", {
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true
	},
	loop: true,
	speed: 7000,
	spaceBetween: 20,
	slidesPerView: "auto",
	allowTouchMove: false
})

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
