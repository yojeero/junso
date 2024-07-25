/* navigation jQuery */ 
jQuery(function(){$('.navicon').on('click',function(){$(this).toggleClass('navopen');$('.menu').toggleClass('open');});$('.nav li a').on('click',function(){$('.menu').removeClass('open');$('.navicon').removeClass('navopen');});});
 
/* animate scroll */
jQuery(function(){$('.link_to').click(function(){var scroll_el=$(this).attr('href');if($(scroll_el).length!=0){$('html, body').animate({scrollTop:$(scroll_el).offset().top},1000);}
return false;});});

/* scroll up */
$(".up").click(function(){$("html, body").animate({scrollTop:$("header").offset().top},700)});

/* Gmaps jQuery */
jQuery(function(){var e=48.135758,o=11.571973,n=17,t="img/pin.png",a={center:new google.maps.LatLng(e,o),zoom:n,panControl:!1,zoomControl:!0,mapTypeControl:!1,streetViewControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:[{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"on"}]}]},l=new google.maps.Map(document.getElementById("map"),a);new google.maps.Marker({position:new google.maps.LatLng(e,o),map:l,visible:!0,icon:t,animation:google.maps.Animation.DROP})});

/* carousel */
(function(){var d=$(".carousel");var f=$(".carousel-seat");var g=function(a){return 0<a.next().length?a.next():f.first()};var h=function(a){return 0<a.prev().length?a.prev():f.last()};$(".carousel-toggle").on("click",function(a){var c;var b=$(".is-ref").removeClass("is-ref");if("next"===$(a.currentTarget).data("carousel-toggle")){var e=g(b);d.removeClass("is-reversing")}else e=h(b),d.addClass("is-reversing");e.addClass("is-ref").css("order",1);a=b=2;for(c=f.length;2<=c?b<=c:b>=c;a=2<=c?++b:--b)e=
g(e).css("order",a);d.removeClass("is-set");return setTimeout(function(){return d.addClass("is-set")},50)})}).call(this);

/* slider service */
$(".slide-pok-nav").on("click",function(a){a.preventDefault();a=$(".flex-active").data("slide");var b=$(this).data("slide");$(".slide-pok-nav").removeClass("active");$(this).addClass("active");if(a===b)return!1;$(".slider_pokemon").find(".poki-all[data-slide="+b+"]").addClass("flex-preStart");$(".flex-active").addClass("animate-end");setTimeout(function(){$(".flex-preStart").removeClass("animate-start flex-preStart").addClass("flex-active");$(".animate-end").addClass("animate-start").removeClass("animate-end flex-active")},
800)});