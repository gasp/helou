function tweenHome(){var e=$("#banner-home").width();TweenMax.fromTo(".right-img",1,{y:-100,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.2}),TweenMax.fromTo("#quote",1,{x:100,opacity:0},{x:0,opacity:1,ease:Power1.easeOut,delay:.4}),TweenMax.fromTo("#banner-home",.7,{x:e,opacity:0},{x:0,opacity:1,ease:Power3.easeOut,delay:.7}),TweenMax.fromTo("#banner-home span",1,{opacity:0},{opacity:1,ease:Power1.easeOut,delay:1.3})}function tweenContact(){TweenMax.fromTo(".right-img",1,{y:-100,opacity:0},{y:0,opacity:1,ease:Power1.easeOut}),TweenMax.fromTo(".title",1,{y:30,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.7}),TweenMax.fromTo("#contact-content",1,{y:20,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.9}),TweenMax.fromTo(".petal",.3,{opacity:0},{opacity:1,ease:Power1.easeOut,delay:1.3})}function tweenCoworking(){TweenMax.fromTo(".right-img",1,{y:-100,opacity:0},{y:0,opacity:1,ease:Power1.easeOut}),TweenMax.fromTo(".title",1,{y:30,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.7}),TweenMax.fromTo("#coworking-content",1,{y:20,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.9}),TweenMax.fromTo(".petal",.3,{opacity:0},{opacity:1,ease:Power1.easeOut,delay:1.3})}function tweenConcept(){TweenMax.fromTo(".right-img",1,{y:-100,opacity:0},{y:0,opacity:1,ease:Power1.easeOut}),TweenMax.fromTo(".title",1,{y:30,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.7}),TweenMax.fromTo("#concept-content",1,{y:20,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.9}),TweenMax.fromTo(".petal",.3,{opacity:0},{opacity:1,ease:Power1.easeOut,delay:1.3})}function tweenMenu(){TweenMax.fromTo(".right-img",1,{y:-100,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.2}),TweenMax.fromTo(".title",1,{y:30,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.7}),TweenMax.fromTo("#menu-content",1,{y:20,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.9}),TweenMax.staggerFromTo("#menu-content .button",.4,{opacity:0,y:-10},{opacity:1,y:0,ease:Power3.easeIn,delay:1},.3)}function activeMenu(){var e=window.location.pathname;if(e=e.substring(1),console.log("currentLocation",e),""==e&&(e="index"),$("#new-nav li, #new-nav-mobile li").removeClass("active"),$('#new-nav li[data-url="'+e+'"]').addClass("active"),$('#new-nav-mobile li[data-url="'+e+'"]').addClass("active"),!isMobile)switch(e){case"index":tweenHome();break;case"contact":tweenContact();break;case"coworking":tweenCoworking();break;case"menu":tweenMenu();break;case"concept":tweenConcept();break;default:console.log("Sorry")}}var isMobile,windowWidth;$(document).ready(function(){windowWidth=document.body.clientWidth,window.onresize=function(){(windowWidth=document.body.clientWidth)<1200?$("html").addClass("style-mobile"):$("html").removeClass("style-mobile")};var e=new MobileDetect(window.navigator.userAgent);if(isMobile=e.mobile(),activeMenu(),isMobile||windowWidth<1300)$("html").addClass("style-mobile");else{function a(e){TweenMax.to(".right-img",.3,{opacity:0,ease:Power0.easeIn}),$("#new-nav li").removeClass("active"),$('#new-nav li[data-url="'+e+'"]').addClass("active"),$.get(e,function(a){setTimeout(function(){switch($(".content").html($(a).find(".content").html()),history.pushState("","",e),""==e&&(currentLocation="index"),e){case"index":tweenHome();break;case"contact":tweenContact();break;case"coworking":tweenCoworking();break;case"menu":tweenMenu();break;case"concept":tweenConcept();break;default:tweenHome(),console.log("Sorry",e)}},500)})}TweenMax.fromTo("#new-menu",1,{y:100,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.1}),TweenMax.fromTo("#logo-bleu",1,{y:30,opacity:0},{y:0,opacity:1,ease:Power1.easeOut,delay:.9}),TweenMax.fromTo("#leaf",2.8,{opacity:0,rotation:-20,transformOrigin:"0 100%"},{rotation:0,opacity:1,ease:Elastic.easeOut.config(.5,0,4),delay:1}),TweenMax.staggerFromTo("#new-nav li, #social",.4,{opacity:0,y:-10},{opacity:1,y:0,ease:Power3.easeIn,delay:1},.2);var o=$("li.active").attr("data-url"),t="";$("#new-nav li").on("click",function(e){if(e.stopPropagation(),!$(this).hasClass("active")){var n=$(this).attr("data-url");t=o,a(o=n)}}),window.onpopstate=function(e){a(t)}}}),$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).hasClass("open")?(TweenMax.fromTo("#new-menu-mobile",.3,{display:"none",opacity:0},{display:"block",opacity:1,ease:Power0.easeOut}),TweenMax.staggerFromTo("#new-menu-mobile ul li",.2,{opacity:0,y:-10},{opacity:1,y:0,ease:Power3.easeIn,delay:.1},.1),$("html").css("overflow","hidden")):(TweenMax.fromTo("#new-menu-mobile",.3,{display:"block",opacity:1},{display:"none",opacity:0,ease:Power0.easeOut}),TweenMax.staggerTo("#new-menu-mobile ul li",.2,{opacity:0,y:0,ease:Power3.easeIn,delay:.1},.1),$("html").css("overflow","auto"))});