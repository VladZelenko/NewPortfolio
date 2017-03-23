//mobile menu
function openNav(){
	document.getElementById('nav').style.width = "100%";
	document.getElementById('open-btn-nav').style.opacity = "0";
}
function closeNav(){
	document.getElementById('nav').style.width = "0%";
	document.getElementById('open-btn-nav').style.opacity = "1";
}
//smooth transition to an anchor
$(document).ready(function() {
	$('a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
			scrollTop: $(el).offset().top}, 1500);
		return closeNav();
	});
});