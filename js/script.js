/* navigation jQuery */ 
jQuery(function(){$('.navicon').on('click',function(){$(this).toggleClass('navopen');$('.menu').toggleClass('open');});$('.nav li a').on('click',function(){$('.menu').removeClass('open');$('.navicon').removeClass('navopen');});});

/* navigation icon animation */ 
var selector = document.querySelector('.navicon');selector.addEventListener('click', function(){selector.classList.toggle('open');})

/* slider service */
$(".slide-pok-nav").on("click",function(a){a.preventDefault();a=$(".flex-active").data("slide");var b=$(this).data("slide");$(".slide-pok-nav").removeClass("active");$(this).addClass("active");if(a===b)return!1;$(".slider_pokemon").find(".poki-all[data-slide="+b+"]").addClass("flex-preStart");$(".flex-active").addClass("animate-end");setTimeout(function(){$(".flex-preStart").removeClass("animate-start flex-preStart").addClass("flex-active");$(".animate-end").addClass("animate-start").removeClass("animate-end flex-active")},
800)});
 
/* animate scroll */
jQuery(function(){$('.link_to').click(function(){var scroll_el=$(this).attr('href');if($(scroll_el).length!=0){$('html, body').animate({scrollTop:$(scroll_el).offset().top},1000);}
return false;});});

/* scroll up */
$(".up").click(function(){$("html, body").animate({scrollTop:$("header").offset().top},700)});

/* Yandex Maps  */
ymaps.ready(startmap);
		var myMap, myplacemark;

		function startmap() {
			myMap = new ymaps.Map("map", {
				center: [40.7121085, -74.1561562],
				zoom: 9,
				controls: ["zoomControl", "fullscreenControl"]
			});
			myplacemark = new ymaps.GeoObject({
				geometry: {
					type: "Point",
					coordinates: [40.7121085, -74.1561562]
				},
				properties: {
					balloonContentHeader: "<h4>Medico, dental clinic</h4>",
					balloonContentBody: "<em>New York., Apple str, 5 </em><br/> 09.00 - 18.00 <br/> 8 000 <strong>001-02-03</strong><p></p>"
				}
			}, {
				iconLayout: "default#image",
				iconImageHref: "img/pin.png",
				iconImageSize: [70, 98],
				iconImageOffset: [-30, -120],
				iconContentOffset: [0]
			});
			myMap.geoObjects.add(myplacemark);
			myMap.behaviors.disable("scrollZoom")
		};

