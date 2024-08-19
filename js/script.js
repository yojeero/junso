/* navigation jQuery */ 
jQuery(function(){$('.navicon').on('click',function(){$(this).toggleClass('navopen');$('.menu').toggleClass('open');});$('.nav li a').on('click',function(){$('.menu').removeClass('open');$('.navicon').removeClass('navopen');});});

/* navigation icon animation */ 
var selector = document.querySelector('.navicon');selector.addEventListener('click', function(){selector.classList.toggle('open');})

/* slider */
const imageList = document.querySelector('.slider-show');
const contentList = document.querySelector('.slider-content');
const images = document.querySelectorAll('.slider-image');
const content = document.querySelector('.slider-card');
const pageIndex = document.querySelector('.slider-count');
const limit = images.length;
let i = 0;

function scroll(dir) {
  let imageWidth = images[0].offsetWidth;
  let contentWidth = content.offsetWidth;
  dir === 'prev' ? i++ : i--;
  imageWidth *= i;
  contentWidth *= i;
  if (i > 0) return i = 0;
  if (i === -limit) return i = -(limit-1);
  pageIndex.textContent = 1 + Math.abs(i);
  imageList.style.transform = `translateX(${imageWidth}px)`;
  contentList.style.transform = `translateX(${contentWidth}px)`;
}

function init(e) {
  e.target.matches('.slider-prev') && scroll('prev');
  e.target.matches('.slider-next') && scroll();
}

document.addEventListener('click',init,false);
 
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
					balloonContentHeader: "<h4>Vee, salon</h4>",
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

