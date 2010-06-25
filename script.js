// JavaScript Document

$(document).ready(function(){
						   
	$(".day").hide();
	
	$("h3").hover(function() {
			$(this).css({'background-color':'#bdd73c', 'color':'#5c8927'});
		}, function() {
			$(this).css({'background-color':'#ace3fa', 'color':'#008ab3'});
		});
	
	$("h3").toggle(function() {
		$("+.day", this).show(300);
		$(this).css({'background-color':'#FCBA63', 'color':'#d67f2a'});
		
		$(this).hover(function() {
			$(this).css({'background-color':'#e96f34', 'color':'#b31b08'});
		}, function() {
			$(this).css({'background-color':'#FCBA63', 'color':'#d67f2a'});
		});
		
	}, function() {
		$("+.day", this).hide(300);
		$(this).css({'background-color':'#ace3fa', 'color':'#008ab3'});
		
		$(this).hover(function() {
			$(this).css({'background-color':'#bdd73c', 'color':'#5c8927'});
		}, function() {
			$(this).css({'background-color':'#ace3fa', 'color':'#008ab3'});
		});
	});	
		
});