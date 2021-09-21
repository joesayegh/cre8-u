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

// SMOOTH SCROLL
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1100,
	speedAsDuration: true,
});

// HEIGHT OF THE HERO IMAGE
// 100VH MOBILE FIX
// THIS FIXES THE BUG ON iOS Safari WHERE THE ADDRESS BAR (CHIN) TAKES UP A PORTION OF THE SCREEN

// FIND THE FULL HEIGHT OF THE VIEWPORT
var fullHeight = window.innerHeight;

// TARGET THE INTRO
var headerBg = document.getElementById("headerBg");

// APPLY THE FULL HEIGHT TO THE INTRO
headerBg.style.height = fullHeight + "px";

// SWIPER
const swiper = new Swiper(".swiper", {
	// Optional parameters
	// autoplay: {
	// 	delay: 5000,
	// },
	grabCursor: true,
	spaceBetween: 320,
	speed: 600,
	loop: true,
	// effect: "fade",

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

// WRITE THE YEAR IN THE FOOTER
var thisYear = new Date().getFullYear();
document.getElementById("year").innerHTML = thisYear;
