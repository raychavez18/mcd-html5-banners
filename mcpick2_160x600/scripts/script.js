// All animation should be placed within the "init_animation" function as this function is called from within the plugin AFTER neccessary calls to DC/Sizmek are made.

	/************************************ Custom JS *****************************************/
	
function init_animation()
{		
	TweenMax.to($("#cover"), 0.25, {delay:0, opacity:0}) ;
	TweenMax.from($("#t1"), 0.5, {delay:0.35, x:"-300"}) ;
	TweenMax.from($("#logo"), 0.45, {delay:0.85, scale:0, ease:Back.easeOut}) ;
	TweenMax.from($("#t2"), 0.35, {delay:1.3, opacity:0}) ;
	TweenMax.to($("#t2"), 0.1, {delay:3.2, opacity:0}) ;
	TweenMax.to($("#t1"), 0.1, {delay:3.2, opacity:0}) ;
	TweenMax.to($("#logo"), 0.1, {delay:3.2, opacity:0}) ;
	
	TweenMax.to($("#f1"), 0.1, {delay:3.2, opacity:1}) ;
	TweenMax.from($("#t3"), 0.5, {delay:3.2, x:"-300"}) ;
	TweenMax.to($("#f2"), 0.1, {delay:5.25, opacity:1}) ;
	TweenMax.to($("#logo_f"), 0.1, {delay:5.25, opacity:1}) ;
	
	TweenMax.from($("#t4b"), 0.35, {delay:5.25, x:"-20", opacity:0}) ;
	
	TweenMax.to($("#logo_f"), 0.1, {delay:7.25, opacity:0}) ;
	TweenMax.to($("#f3"), 0.2, {delay:7.25, opacity:1}) ;
	
	TweenMax.to($("#t3"), 0.1, {delay:9.7, opacity:0}) ;
	TweenMax.to($("#t4b"), 0.1, {delay:9.7, opacity:0}) ;
	
	TweenMax.to($("#f4"), 0.1, {delay:9.7, opacity:1}) ;
	TweenMax.from($("#logo_s"), 0.45, {delay:10, x:"-300"}) ;
	TweenMax.from($("#t5"), 0.25, {delay:10.35, x:"+300"}) ;
	
	TweenMax.to($("#bannerButton"), 0.25, {delay:10.95, opacity:1}) ;
	TweenMax.to($("#legal"), 0.1, {delay:11.2, opacity:1}) ;
}

