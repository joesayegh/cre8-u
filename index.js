// NAV
var navToggle = document.querySelector(".nav-toggle");
var navIcon = document.querySelector(".navicon");
var primaryNavWrapper = document.querySelector(".primary-nav-wrapper");

navToggle.addEventListener("click", function () {
	this.classList.toggle("active");
	navIcon.classList.toggle("fixed");
	primaryNavWrapper.classList.toggle("open");
});

var primaryNavLinks = document.querySelectorAll(".primary-nav-wrapper li a");

for (var i = 0; i < primaryNavLinks.length; i++) {
	primaryNavLinks[i].addEventListener("click", function () {
		// console.log('clicked');
		navToggle.classList.toggle("active");
		navIcon.classList.toggle("fixed");
		primaryNavWrapper.classList.toggle("open");
	});
}

// SWIPER
const swiper = new Swiper(".swiper", {
	// Optional parameters
	// effect: "fade",
	grabCursor: true,
	spaceBetween: 320,
	speed: 600,
	loop: true,

	// fadeEffect: {
	// 	crossFade: true,
	// },

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: ".swiper-scrollbar",
	// },
});
