var params = {
	container: document.getElementById('logo'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: '/wp-content/uploads/2018/03/logo.json',
};

var anim;

anim = lottie.loadAnimation(params);

anim.addEventListener("DOMLoaded", function() {
	anim.play();
});