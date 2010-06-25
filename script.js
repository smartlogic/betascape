// JavaScript Document

$(document).ready(function(){
						   
	$(".day p").hide();
	
	$(".day").toggle(function() {
		$("p", this).show(300);
		$("h3", this).css({'background-color':'#FCBA63', 'color':'#d67f2a'});
	}, function() {
		$("p", this).hide(300);
		$("h3", this).css({'background-color':'#ace3fa', 'color':'#008ab3'});
	});	
		
});