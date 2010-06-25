// JavaScript Document

$(document).ready(function(){
						   
	$(".day h4, .day h5, .day p").hide();
	
	$(".day").toggle(function() {
		$("h4, h5, p", this).show(300);
		$("h3", this).css({'background-color':'#FCBA63', 'color':'#d67f2a'});
	}, function() {
		$("h4, h5, p", this).hide(300);
		$("h3", this).css({'background-color':'#ace3fa', 'color':'#008ab3'});
	});	
		
});