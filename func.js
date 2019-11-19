function icon_change(x){
	x.classList.toggle("change");
	var show = document.getElementById("Nav");
	if (show.style.height =="100%")
		show.style.height = "0%";
	else
		show.style.height = "100%";
}
