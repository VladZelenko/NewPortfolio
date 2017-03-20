//випадшка по горизонталі, працює при закоменченому по вертикалі
function openNav(){
	document.getElementById('nav').style.width = "100%";
	document.getElementById('open-btn-nav').style.opacity = "0";
}
function closeNav(){
	document.getElementById('nav').style.width = "0%";
	document.getElementById('open-btn-nav').style.opacity = "1";
}
//випадашка по вертикалі, працює при закоменченому по горизонталі
// function openNav(){
// 	document.getElementById('nav').style.height = "100%";
//	document.getElementById('open-btn-nav').style.opacity = "0";
// }
// function closeNav(){
// 	document.getElementById('nav').style.height = "0%";
//	document.getElementById('open-btn-nav').style.opacity = "1";
// }

//slick-carousel
$('.head_carousel').slick({
	infinite: true,
	speed: 300,
	autoplaySpeed: 3000,
	autoplay: true
});