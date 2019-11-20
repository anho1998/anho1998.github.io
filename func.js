function icon_change(x){
	x.classList.toggle("change");
	var show = document.getElementById("Nav");
	if (show.style.height =="100%")
		show.style.height = "0%";
	else
		show.style.height = "100%";
}
window.onscroll = function() {myFunction()};

function myFunction() {
	var elementTarget = document.getElementById("top");
	if (document.body.scrollTop > (elementTarget.offsetHeight/2) || document.documentElement.scrollTop > (elementTarget.offsetHeight/2)) {
		document.getElementById("intro").className = "show";
	}
	else
	{
		document.getElementById("intro").className = "about";
	}
}
