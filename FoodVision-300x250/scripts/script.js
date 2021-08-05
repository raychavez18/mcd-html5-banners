// All animation should be placed within the "init_animation" function as this function is called from within the plugin AFTER neccessary calls to DC/Sizmek are made.

	/************************************ Custom JS *****************************************/
	
function init_animation()
{	
	"use strict";
		
	init_runthrough();
}

function init_runthrough()
{
	zooming_creep($("#copy-1"), .85, 1.15, 1.5, 5);
	
	TweenMax.delayedCall(1.5, function()
	{
		zooming_creep($("#copy-2"), .85, 1.15, 1.5, 5);
	});
	
	TweenMax.delayedCall(3, function()
	{
		zooming_creep($("#copy-3"), .85, 1.15, 1.5, 5);
	});
	
	TweenMax.delayedCall(4.5, move_bg_and_end);
}

function move_bg_and_end()
{
	$("#copy-mask").css({"display":"none", "opacity":"0"});
	
	TweenMax.to($("#burger-img"), 2, {scale:.8, ease:Expo.easeOut});
	TweenMax.to($("#burger-bg"), 2, {css:{"left":"-111px"}, ease:Expo.easeOut});
	TweenMax.to($("#burger-bg"), 2, {css:{"top":"-60px"}, ease:Expo.easeOut});
	
	TweenMax.delayedCall(2.1, function() {
		zooming_creep($("#copy-4"), .9, 1.1, 4, .8);
		
		$("#copy-2>img").attr("src", "images/copy-2-2.png");
		
		TweenMax.delayedCall(4, end_size);
	});
}

function end_size()
{
	TweenMax.to($("#burger-bg"), 1, {css:{"left":"-90px", "top":"-82px"}, ease:Expo.easeOut, onComplete: function()
	{
		TweenMax.to($("#copy-1"), .6, {scale:.6, alpha:1, x:-70, y:-10, ease:Expo.easeIn});
		TweenMax.to($("#copy-2"), .6, {scale:.6, alpha:1, x:68, y:-11, ease:Expo.easeIn, delay:.2});
		TweenMax.to($("#copy-3"), .6, {scale:.6, alpha:1, x:-82, y:35, ease:Expo.easeIn, delay:.4, onComplete: function()
		{
			TweenMax.to($("#desc-copy"), .8, {alpha:1});
			TweenMax.to($("#cta"), .8, {scale:1, alpha:1, delay:.8});
			TweenMax.to($("#legal"), .8, {alpha:1, delay:2});	
		}});
	}});	
}








//	Source Animations ----->

function zooming_creep($target, $midstart, $midend, $stayduration, $end)
{
	TweenMax.to($target, .2, {scale:$midstart, alpha:1, ease:Expo.easeIn});
	TweenMax.to($target, $stayduration, {scale:$midend, ease:Expo.easeOut, delay:.18});
	
	TweenMax.delayedCall($stayduration - .5, function() {
		$target.css({"z-index":"4"});
	});
	
	TweenMax.to($target, .8, {scale:$end, alpha:0, ease:Expo.easeOut, delay:$stayduration - .5});
}