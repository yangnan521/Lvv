$(function(){
	$('#demo01').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing"
	});
	
	$('.liclass').mouseover(function(){
		$('.subtit').css({"opacity":"1"});
//		$('.subtit').css({"display":"block"});
	});	
	$('.subtit').mouseleave(function(){
		$('.subtit').css({"opacity":"0"});
//		$('.subtit').css({"display":"none"});
	});	
	
	
	
	
	$("li").each(function(){
		$("li").mousedown(function(){
			$(".sonli").css({"cursor":"pointer"});
			$(".sonli").each(function(){
				$(".sonli").css({"background":"#372d2a"});
//				$(".sonli").children().css({"color":"#bfa69a"});
			});
			$(this).css({"background":"white"});
//			$("this").children().css({"color":"black"});
		});
	});

	var index=0;
	$(".sonli").each(function(){
		$(".sonli").mousedown(function(){
			index=$(this).index('li'); 
			index-=5;
			$(this).parent().next().children(index).attr({'src':'../img/tit'+(index+1)+'.jpg'});
		});
	});
	
	$("#manshi").mouseenter(function(){

		$(".ulss").css({"display":"block"});
		$(".ulss").css({"z-index":99999});
	});
	$(".ulss").mouseleave(function(){

		$(".ulss").css({"display":"none"});

	});



});




