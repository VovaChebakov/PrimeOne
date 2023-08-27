//</MENU BURGER>==========================================================================================================================================================
$('wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
})
//</MENU BURGER>==========================================================================================================================================================

//</IBG FOR IMG>==========================================================================================================================================================
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}

ibg();
//</IBG FOR IMG>==========================================================================================================================================================

//========================================================================================================================================================================
$(window).resize(function (event) {
	mainblock()
});

function mainblock () {
		var h = $(window).outerHeight();
	$('.mainblock').css('minHeight', h)
}
mainblock()
//========================================================================================================================================================================

//</FILTER>===============================================================================================================================================================
$('.filter__item').click(function (event) {
	var i=$(this).data('filter');

	if (i == 1) {
		$('.portfolio__column').show();
	} else {
		$('.portfolio__column').hide();
		$('.portfolio__column.f_'+i).show();
	}

	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;
});
//</FILTER>===============================================================================================================================================================

$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.menu__body').hasClass('active')) {
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});

//</SCROLLTO>=============================================================================================================================================================
const about = document.querySelector('#1');
const portfolio = document.querySelector('#2');
const contact = document.querySelector('#3');

var aboutUs = document.querySelector('.about');
var portfolioUs = document.querySelector('.portfolio');
var contactUs = document.querySelector('.contact');

function scrollIntoView (variable, position) {
	variable.scrollIntoView({
		block: position,
		inline: "nearest",
		behavior: "smooth",
	});
}

about.addEventListener('click', () => {
	scrollIntoView(aboutUs, "start");
});
//</SCROLLTO>=============================================================================================================================================================