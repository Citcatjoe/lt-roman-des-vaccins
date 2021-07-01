jQuery(document).ready(function($) 
{
	$("li").click(function(){
		$('h1').slideUp();
	});

	
	// vars
	var sectionFrom, 
		$slide = $('.slide'),
		$slideActive = $('.slide.is-active'),
		$navLink = $('aside ul a'),
		$navLi = $('aside ul li'),
		$aside = $('aside'),
		$wrapper = $('#wrapper'),
		$body = $('body');


	function init(){

		// TweenLite.set([$aside, $wrapper], {autoAlpha: 0})
		// 	.to($aside, 1, {autoAlpha: 1});

		// set active slide visible
		TweenLite.set($slideActive, {y: '0%'});

		// Fade in active slide
		TweenLite.set($body, {className: '-=loading'});

	}
	init();

	// Navigation click
	$navLink.on('click', function(e){
		if(e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}

		if(!$body.hasClass('is-animating'))
		{



			var sectionFrom = $('.slide.is-active'),
			  	sectionToID = $(this).attr('href'),
			  	sectionTo = $('div' + sectionToID);

			if(sectionFrom.attr('id') != sectionTo.attr('id')) 
			{
				scrollToSection(sectionFrom, sectionTo);	
			} 
			// else 
			// {
			// 	console.log('no move mister !');
			// }  	

		}

	 
	});

	function scrollToSection(sectionFrom, sectionTo){

		// console.log(sectionFrom.index());
		// console.log(sectionTo.index());
		var slideContent = sectionTo.find('.slide-content'),
			slideContentFrom = sectionFrom.find('.slide-content'),

			slideContentH3 = sectionTo.find('h3'),
			slideContentP = sectionTo.find('p'),
			slideContentH4 = sectionTo.find('h4'),
			slideContentButton = sectionTo.find('.button-container'),
			// bcg = sectionTo,
			// bcgFrom = sectionFrom,
			tlDown = new TimelineMax({onComplete: setActiveSlide(sectionFrom, sectionTo)}),
			tlUp = new TimelineMax();

		if (sectionFrom.index() < sectionTo.index())
		{
			//console.log('going down');    
			tlDown
				.set($body, {className: '+=is-animating'})
				.set(slideContent, {autoAlpha: 0, y: '-30%'})
				.set([slideContentH3, slideContentP, slideContentH4, slideContentButton], {autoAlpha: 0, y: '10px'})

				.to(sectionTo, 1.2, {y: '0%', ease:Power4.easeInOut}, '0')
				.to(slideContent, 1.2, {autoAlpha: 1, y: '0%', ease:Power4.easeInOut}, '0')

				.to(sectionFrom, 1.2, {y: '-=100%', ease:Power4.easeInOut, clearProps: 'all'}, '0')
				.to(slideContentFrom, 1.2, {autoAlpha: 0, y: '30%', ease:Power4.easeInOut}, '0')


				.to(slideContentH3, 0.7, {autoAlpha: 1, y: '0', ease:Power4.easeInOut}, '-=0.5')
				.to(slideContentP, 0.7, {autoAlpha: 1, y: '0', ease:Power4.easeInOut}, '-=0.5')
				.to(slideContentH4, 0.7, {autoAlpha: 1, y: '0', ease:Power4.easeInOut}, '-=0.5')
				.to(slideContentButton, 0.7, {autoAlpha: 1, y: '0', ease:Power4.easeInOut}, '-=0.5')
				.set($body, {className: '-=is-animating'});
				
		}
		else
		{
			//console.log('going up');
			tlUp
				.set($body, {className: '+=is-animating'})
				.set(sectionTo, {y: '-100%'})
				.set(slideContent, {y: '-30%'})
				.set([slideContentH3, slideContentP, slideContentH4, slideContentButton], {autoAlpha: 0, y: '10px'})

				//.set(slideContent, {autoAlpha: 0, y: '-30%'})
				//.set([slideContentH3, slideContentP, slideContentH4, slideContentButton], {autoAlpha: 0, y: '10px'})

				.to(sectionTo, 1.2, {y: '0%', ease:Power4.easeInOut}, '0')
				.to(slideContent, 1.2, {autoAlpha: 1, y: '0%', ease:Power4.easeInOut}, '0')

				.to(sectionFrom, 1.2, {y: '100%', ease:Power4.easeInOut}, '0')
				.to(slideContentFrom, 1.2, {autoAlpha: 0, y: '-30%', ease:Power4.easeInOut}, '0')


				.to(slideContentH3, 0.7, {autoAlpha: 1, y: '0', ease:Power4.easeInOut}, '-=0.5')
				.to(slideContentP, 0.7, {autoAlpha: 1, y: '0', ease:Power4.easeInOut}, '-=0.5')
				.to(slideContentH4, 0.7, {autoAlpha: 1, y: '0', ease:Power4.easeInOut}, '-=0.5')
				.to(slideContentButton, 0.7, {autoAlpha: 1, y: '0', ease:Power4.easeInOut}, '-=0.5')
				.set($body, {className: '-=is-animating'});
		}

		



		

	}



	function setActiveSlide(sectionFrom, sectionTo){

		// Add active class to the current slide
		sectionFrom.removeClass('is-active');
		sectionTo.addClass('is-active');

		// Highlight current slide in the navigation
		var currentSlideIndex = parseInt($(sectionTo).attr('id').slice(-2)) -1;
		$navLi.removeAttr('class');
		$navLi.eq(currentSlideIndex).addClass('is-active');
		
	}

	

	

	// $(".button").on('click', function(e) {
	// 	$('.button').removeClass('is-active');
	// 	$(this).addClass('is-active');
	// 	// alert('hello');
	// 	// $(".iframe").load('http://theurltoload.com')
	// 	// e.preventDefault();
	// 	e.preventDefault();
	// 	var $el = $(this);
	// 	// alert($el.attr('map-url'));
	// 	$(".iframe").attr("src", $el.attr('map-url'));
	// });











	// THIS IS EXECUTED WHEN EVERYTHING IS LOADED
	// var everythingLoaded = setInterval(function() {
	//   if (/loaded|complete/.test(document.readyState)) {
	//     clearInterval(everythingLoaded);
	//   }
	// }, 10);

	// USE THIS IF SOMETHING CANT LOAD CORRECTLY
	// $(window).load(function(){
	// });

	// THIS IS DONE AT EVERY SCROLL
	// $(window).scroll(function (event) {
 //    });

    // SCROLL TO AN ELEMENT FUNCTION
    //$('html, body').animate({
    //    scrollTop:$('.element').offset().top
    //}, 1000);

    // SCROLL TO A CALCULATED HEIGHT
	//$('html, body').animate({
    //      scrollTop:$(scrollHeight).offset().top
    //}, 1000);

    // SIMPLE CLICK
 //    $(".menu").click(function(){
	// });
	
    // SET A DELAY IN A FUNCTION
	// setTimeout(function() 
	// {
	// }, 250);

	// KEEP A DIV SQUARE HACK
	// var largeur = $('.un-quart').width();
	// $('.un-quart').height(largeur);

 //   	$(window).resize(function(){
 //   		var largeur = $('.un-quart').width();
 //   		$('.un-quart').height(largeur);
 //    });

   	// THIS IS EXECUTED ON RESIZE
   	// $(window).resize(function(){

    // });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	// if($(window).width() > 500)
	// {
	// }

});
