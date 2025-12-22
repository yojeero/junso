
// ScrollReveall
window.sr = ScrollReveal();sr.reveal('.reveal');

// Day-Night Switcher
const toggle = document.querySelector("#day-night");
	const root = document.documentElement;

	if (toggle) {
		toggle.addEventListener("click", () => {
			if (root.classList.contains("NightMode")) {
				root.classList.remove("NightMode");
			} else {
				root.classList.add("NightMode");
			}
		});
	}

// Nav
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("nav-content").style.width = "0";
	document.getElementById("close-nav").style.display = "none";

	document.querySelectorAll("#nav-content .nav a").forEach(function(navLink) {
		navLink.addEventListener("click", function() {
			closeNav();
		});
	});
});

function openNav() {
	if (window.innerWidth <= 768) {
		document.getElementById("nav-content").style.width = "100%";
	} else {
		document.getElementById("nav-content").style.width = "50%";
	}
	document.getElementById("close-nav").style.display = "block";
}

function closeNav() {
	document.getElementById("nav-content").style.width = "0";
	document.getElementById("close-nav").style.display = "none";
}

// Yandex Maps 
ymaps.ready(startmap);
		var myMap, myplacemark;

		function startmap() {
			myMap = new ymaps.Map("map", {
				center: [34.0675198,-118.4042346],
				zoom: 9,
				controls: ["zoomControl", "fullscreenControl"]
			});
			myplacemark = new ymaps.GeoObject({
				geometry: {
					type: "Point",
					coordinates: [34.0675198,-118.4042346]
				},
				properties: {
					balloonContentHeader: "<p class='text-lg font-medium'>Beverly Hills Stores</p>",
					balloonContentBody: "<p class='text-gray-900 font-medium h-4 p-2'>Rodeo Dr, Beverly Hills, CA</p>"
				}
			}, {
				iconLayout: "default#image",
				iconImageHref: "images/pin.png",
				iconImageSize: [70, 98],
				iconImageOffset: [-30, -120],
				iconContentOffset: [0]
			});
			myMap.geoObjects.add(myplacemark);
			myMap.behaviors.disable("scrollZoom")
		};


		



