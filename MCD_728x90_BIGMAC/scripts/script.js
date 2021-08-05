// All animation should be placed within the "init_animation" function as this function is called from within the plugin AFTER neccessary calls to DC/Sizmek are made.

	/************************************ Custom JS *****************************************/
	
function init_animation()
{		
	TweenMax.to($("#cover"), 0.35, {delay:0, opacity:0}) ;
	
	TweenMax.to($("#f2"), 1, {delay:0.75, scale:1, y:0, x:0, ease:Power2.easeIn}) ;
	
	
	TweenMax.to($("#macJ"), 0.75, {delay:1.25, x:0, ease:Power3.easeIn}) ;
	TweenMax.to($("#macJ #f1"), 0.75, {delay:1.25, x:0, ease:Power3.easeIn}) ;
	TweenMax.to($("#macJ #t2"), 0.75, {delay:1.25, x:0, ease:Power3.easeIn}) ;
	TweenMax.to($("#macJ #r2"), 0.75, {delay:1.25, x:0, ease:Power3.easeIn}) ;
	
	TweenMax.to($("#macG"), 0.75, {delay:1.25, x:0, ease:Power3.easeIn}) ;
	TweenMax.to($("#macG #f3"), 0.75, {delay:1.25, x:0, ease:Power3.easeIn}) ;
	TweenMax.to($("#macG #t4"), 0.75, {delay:1.25, x:0, ease:Power3.easeIn}) ;
	TweenMax.to($("#macG #r4"), 0.75, {delay:1.25, x:0, ease:Power3.easeIn}) ;

	TweenMax.to($("#t1w #t1"), 0.3, {delay:2.75, x:0, ease:Power1.easeIn}) ;
	
	TweenMax.to($("#bannerButton"), 0.35, {delay:3.7, scale:1.2}) ;
	TweenMax.to($("#bannerButton"), 0.25, {delay:4.05, scale:1}) ;
	TweenMax.to($("#legal"), 0.25, {delay:4.4, opacity:1, ease:Power1.easeIn}) ;

}