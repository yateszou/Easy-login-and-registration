


	window.addEventListener("scroll",function(){
	let t = $("body,html").scrollTop();
	if(t>150){
		$("nav").addClass("nav-fixed");
	}else{
		$("nav").removeClass("nav-fixed");
	}
})