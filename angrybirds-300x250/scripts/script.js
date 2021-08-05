// All animation should be placed within the "init_animation" function as this function is called from within the plugin AFTER neccessary calls to DC/Sizmek are made.

	/************************************ Custom JS *****************************************/
	
function init_animation()
{		
	TweenMax.set($("#clouds"), {opacity:0});
	TweenMax.set($("#end"), {opacity:0});
	
	$("#clouds").show();
	$("#end").show();
	
	init_firstframe();
}


function init_firstframe(){	

	TweenMax.to($("#bird"), 1, {delay:0, top:181, left:-12});

	// TweenMax.to($("#bird"), 2, {delay:1, bezier: {curviness:0.5, values:[ {top:60, left:56}, {top:10, left:126}, {top:130, left:-25} ]}, ease:Power2.easeIn});
	// TweenMax.to($("#bird"), 3, {bezier: {curviness:0, values:[ {top:181, left:-12}, {top:60, left:56}, {top:40, left:126} ]}, ease:Power2.easeIn});
	// TweenMax.to($("#bird"), 2, {delay:1, bezier: {curviness:0.5, values:[ {top:85, left:18}, {top:0, left:56}, {top:130, left:-25} ]}, ease:Power2.easeIn});
	// TweenMax.to($("#bird"), 2, {delay:1, bezier: {curviness:0.5, values:[ {top:60, left:56}, {top:0, left:56}, {top:70, left:-25} ]}, ease:Power2.easeIn});
	// TweenMax.to($("#bird"), 2, {delay:1, bezier: {curviness:0.5, values:[ {top:85, left:18}, {top:36, left:135}, {top:130, left:-25} ]}, ease:Power2.easeIn});

	TweenMax.to($("#bird"), 2, {delay:1, bezier: {curviness:0.5, values:[ {top:60, left:56}, {top:10, left:126}, {top:130, left:-25} ]}, ease:Power2.easeIn});
	
	TweenMax.to($("#bird"), 1, {delay:2, scale:1});
	TweenMax.to($("#slingshot"), 0, {opacity:0, delay:2});

	TweenMax.to($("#bird"), 1, {scale:12, delay:2, ease:Power1.easeInOut, display:"none", onComplete:function(){
		TweenMax.to($("#clouds"), 0, {opacity:1, onComplete:function(){
			TweenMax.to($("#end"), 0, {opacity:1});			
		}});
		TweenMax.to($("#clouds"), 3, {opacity:0, delay:2, ease:Power2.easeOut});		
	}});

	TweenMax.to($("#l"), 0.1, {left:14, delay:2, ease:Power0.easeIn});
	TweenMax.to($("#unchtime"), 0.1, {left:74, delay:2, ease:Power0.easeIn});

}
