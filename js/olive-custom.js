$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#main-heade').addClass('shrink-head');
  } else {
    $('#main-heade').removeClass('shrink-head');
  }
});

<!-- side nav -->
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

<!-- page scrolling -->
$(window).scroll(function(){if($(document).scrollTop()>50){$('body').addClass('mainBody');}else{$('body').removeClass('mainBody');}});$(function(){$('a.page-scroll').bind('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top},1500,'easeInOutExpo');event.preventDefault();});});
<!-- go to top -->
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	// map-no-zoom
$('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});
	
	//Click event to scroll to top
	$('.scrollup').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});