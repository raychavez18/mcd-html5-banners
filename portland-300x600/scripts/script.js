$.noConflict();
var $ = jQuery;

	/************************************ Custom JS *****************************************/

var adDiv;

 var $startX = -40;
 var $startY = 19;
 
 var $endX = 37;
 var $endY = -82;
 
 var $leftOutX = -200;
 
 var $outX = 200;
 var $outY = -90;
 
 var $startScale = 1;
 var $endScale = 1;
 
 var $endopacity = .98;
 
 var $time = 2.5;
 var $delay = .5;
	
	
	
	
function init_animation()
{		
	TweenMax.to($("#f_3"), .35, {left:0, opacity:1, delay:1});
	TweenMax.to($("#f_2"), .35, {left:-360, opacity:1, delay:1});
	
	TweenMax.to($("#f_1"), .35, {left:-360, opacity:1, delay:2.25});
	TweenMax.to($("#f_5"), .35, {left:0, opacity:1, delay:2.25});

	TweenMax.to($("#f_4"), .35, {left:0, opacity:1, delay:4});
	TweenMax.to($("#f_3"), .35, {left:-360, opacity:1, delay:4});
	
	


	//first flip
	TweenMax.to($("#logo"), .2, {rotationX:360,opacity:0, delay:1, transformOrigin:"left 50%"});
	TweenMax.to($("#new_pick"), .1, {opacity:0});
	TweenMax.to($("#new_pick"), .1, {top:14, delay:.1});
	TweenMax.to($("#new_pick"), .2, {rotationX:-360,opacity:1, delay:1, transformOrigin:"left 50% "});
	//second flip
	TweenMax.to($("#new_pick"), .2, {rotationX:-360,opacity:0, delay:2.25, transformOrigin:"left 50% "});

	TweenMax.to($("#logo"), .1, {opacity:0, delay:2});
	TweenMax.to($("#logo"), .1, {delay:.1});
	TweenMax.to($("#logo"), .2, {rotationX:-360,opacity:1, delay:2.25, transformOrigin:"left 50% "});

	//copy
	TweenMax.to($("#one_copy"), .1, {left:-300, opacity:0, delay:2.25});
	TweenMax.to($("#two_copy"), .1, {left:0, opacity:1, delay:2.25});
	TweenMax.to($("#two_copy"), .2, {left:-300, opacity:1, delay:4});
	TweenMax.to($("#three_copy"), .1, {left:0, opacity:1, delay:4});
	TweenMax.to($("#three_copy"), .2, {left:-300, opacity:1, delay:5.5});

	TweenMax.to($("#end_frame"), .1, {opacity:0, delay:3});
	TweenMax.to($("#end_frame"), .1, {left:0, top:0, opacity:0, delay:4});
	TweenMax.to($("#f_4"), .3, {left:300, opacity:1, delay:5.5});
	TweenMax.to($("#f_5"), .35, {left:-350, opacity:1, delay:5.5});
	TweenMax.to($("#end_frame"), .5, {left:0, top:0, opacity:1, delay:5.7});
	TweenMax.to($("#end_copy"), .5, {left:0,  opacity:1, delay:6.5});
	TweenMax.to($("#logo"),.5, {left:-300, ease:Expo.easeOut,delay:5.5});

	TweenMax.delayedCall(($delay + $time) * 1.9, init_end_copy);
}
function init_end_copy()
{
	
	

	
	TweenMax.delayedCall(.2, function()
	{
		TweenMax.to($("#logo-end"), .7, {css:{scale:1, opacity:1}, ease:Elastic.easeOut, onComplete: function()
		{
			TweenMax.to($("#logo-end .glint"),2.9, {css:{"top":"100px", "left":"75px"}, ease:Expo.easeInOut, onComplete: init_cta});
		}});
	});		
}

function init_cta()
{
	TweenMax.to($("#cta"), .2, {scaleX:1, scaleY:1, alpha:1, ease:Expo.easeOut});
	TweenMax.to($("#legal"), .2, {alpha:1, delay:1});
}