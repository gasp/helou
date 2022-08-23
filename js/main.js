
const $element = $('.logo');
const imagePath = 'img/anim-logo';
const totalFrames = 265;
const animationDuration = 8000;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 0;

var scrollController = new ScrollMagic.Controller({globalSceneOptions: {}});


var md = new MobileDetect(window.navigator.userAgent);
var isMobile = md.mobile()


$(document).ready(function() {



// jQuery(document).on("click", "#btn-menu", function() {
//   TweenMax.to("#popup", 0.4, {display:"flex",opacity:1 , ease:Linear.easeNone})
// })

//  jQuery(document).on("click", "#popup .close", function() {

//       localStorage.setItem('popState','shown')
//       TweenMax.to("#popup", 0.4, {display:"none",opacity:0 , ease:Linear.easeNone})

//     })


//   if(localStorage.getItem('popState')){

    
//     $('#popup').css("display","none")
//     $('#popup').css("opacity",0)


//   } else{


    
//     $('#popup').css("display","flex")
//     $('#popup').css("opacity",1)


   



//   }






  if(isMobile){

    $('body').addClass("style-mobile")

    var h = $('.kraft-mobile img').height()
    if( h > 0){
      $('#top-section').css("height", h)
    }
   
   
  }



  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $(this).find('span').toggleClass('white');

    if($(this).hasClass("open")){

      TweenMax.fromTo("#mobile",0.3,{display:"none", opacity:0},{display:"block",opacity:1, ease: Power0.easeOut})
      TweenMax.staggerFromTo("#mobile ul li",0.2,{opacity:0, y:-10},{opacity:1, y:0,ease: Power3.easeIn, delay:0.1}, 0.1);
      TweenMax.fromTo(".logo, .logo-inline",0.3,{display:"block",opacity:1},{opacity:0, display:"none",ease: Power0.easeOut})
   
    }else{
      TweenMax.fromTo("#mobile",0.3,{display:"block", opacity:1},{display:"none",opacity:0, ease: Power0.easeOut})
      TweenMax.fromTo(".logo, .logo-inline",0.3,{display:"none",opacity:0},{opacity:1, display:"block",ease: Power0.easeOut})
      TweenMax.staggerTo("#mobile ul li",0.2,{opacity:0, y:0,ease: Power3.easeIn, delay:0.1}, 0.1);
    }
  });


  if($('#tarifs').length > 0){

    TweenMax.staggerFromTo("#formules div",0.5,{opacity:0, y:-50},{opacity:1, y:0,ease: Power3.easeIn, delay:0.2}, 0.2);
    $('#li-cowork').addClass("active")

  }
  

  if($('#contact').length > 0){
    

      TweenMax.fromTo(".leftText",0.3,{y:-10, opacity:0},{y:0,opacity:1, ease: Power0.easeOut, delay:1}),

      $('#li-contact').addClass("active")

  }

  if($('#concept').length > 0){
    


      $('#li-concept').addClass("active")

  }  


  initScrollAnims()

	//PRELOAD IMG ANIM LOGO

    // for (var i = 0; i < totalFrames + 1; i++) {

    //   if(i < 10){
    //     $('body').append(`<div id="preload-image-${i}" style="background-image: url('${imagePath}/logo-helou00${i}.png');"></div>`);
    //   }else if(i < 100){
    //     $('body').append(`<div id="preload-image-${i}" style="background-image: url('${imagePath}/logo-helou0${i}.png');"></div>`);
    //   }else{
    //     $('body').append(`<div id="preload-image-${i}" style="background-image: url('${imagePath}/logo-helou${i}.png');"></div>`);
    //   }
      
    // }

  // requestAnimationFrame(step);

});


function initScrollAnims(){



    var tween1 = new TimelineMax()
    .add([
      TweenMax.fromTo(".concept-section h1",0.3,{y:-10, opacity:0},{y:0,opacity:1, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".concept-section .item",0.5,{opacity:0},{opacity:1, ease: Power3.easeIn, delay:0.3}, 0.3),

      ])

    new ScrollMagic.Scene({triggerElement: ".concept-section", offset:-$('.concept-section').height()/2}).setTween(tween1).addTo(scrollController);




    //PARALLAX EXAMPLE



    var tween = new TimelineMax()
    .add([
      TweenMax.fromTo("#top-section .kraft",0.4,{y:200},{y:-300, ease: Power0.easeNone}),
      TweenMax.fromTo("#top-section .plate",0.6,{y:+500},{y:-1000, ease: Power0.easeNone}),


      ]).time(0);

    new ScrollMagic.Scene({triggerElement: "#top-section", duration:$("#top-section").height()*4, triggerHook:"onEnter"})
            .setTween(tween)
            .addTo(scrollController);





    var tween2 = new TimelineMax()
    .add([
      // TweenMax.fromTo("#founders .right",0.3,{x:+300, opacity:0},{x:0,opacity:1, ease: Power0.easeNone}),
      TweenMax.fromTo(".us img",0.6,{y:+100},{y:-100, ease: Power0.easeNone}),


      ]).time(0);

    new ScrollMagic.Scene({triggerElement: "#founders", duration:$("#founders").height() * 2, triggerHook:"onEnter"})
            .setTween(tween2)
            //.addIndicators()
            .addTo(scrollController);


      var tween3 = new TimelineMax()
    .add([
      // TweenMax.fromTo("#ecolo .left",0.1,{x:-100, opacity:0},{x:0,opacity:1, ease: Power0.easeNone, delay:0.1}),
      TweenMax.fromTo(".ecolo img",0.6,{y:+100},{y:-200, ease: Power0.easeNone}),


      ]).time(0);

    new ScrollMagic.Scene({triggerElement: "#ecolo", duration:$("#ecolo").height() * 2, triggerHook:"onEnter"})
            .setTween(tween3)
            //.addIndicators()
            .addTo(scrollController);




  w = $(document).width()


  if (isMobile || w <= 1440){

    //console.log("W", w)

    var delay = 0.0048024467036889 * (w*w) -5.6592261748653 * w + 1792.4193691;

    //console.log("DELAY", delay)


  // if( w <= 1440){

      var tweenHeader= new TimelineMax()
    .add([
       TweenMax.fromTo(".logo1",0.1,{opacity:1},{opacity:0, ease: Power0.easeNone}),
       TweenMax.fromTo("#btn-menu",0.3,{opacity:1},{opacity:0, ease: Power0.easeNone}),
       // TweenMax.fromTo(".logo2",0,{position:"relative"},{position:"fixed",top:"0",delay:delay/1000}),

      ])

    
    new ScrollMagic.Scene({offset:0, duration:400})
            .setTween(tweenHeader)
            .addTo(scrollController);
  }else{


  

    var tweenHeader= new TimelineMax()
    .add([
       TweenMax.fromTo(".logo1",0.4,{opacity:1},{opacity:0, ease: Power0.easeNone}),
       TweenMax.fromTo("#btn-menu",0.3,{opacity:1},{opacity:0, x:-100, ease: Power0.easeNone}),
       // TweenMax.fromTo(".logo2",0,{position:"relative"},{position:"fixed",top:"0",delay:0.28}),
       // TweenMax.to("header",3,{"background-color":"black",delay:0.7})
       // TweenMax.to(".logo2",1,{x:-100,scale:0.8, ease: Power0.easeNone}),

      ])

    
    new ScrollMagic.Scene({offset:0, duration:400})
            .setTween(tweenHeader)
            .addTo(scrollController);

  }



          


  var tweenMenu= new TimelineMax()
  .add([


     TweenMax.fromTo('header', 1, {backgroundColor : 'rgba(255, 255, 255, 0)'}, {backgroundColor : 'rgba(255, 255, 255, 0.8)', borderBottom:"1px solid #f8B71D"})


    ])

  
  new ScrollMagic.Scene({offset:0, duration:400})
          .setTween(tweenMenu)
          .addTo(scrollController);

// new ScrollMagic.Scene({triggerElement: ".logo2", duration:$(window).height()})
//             .setPin(".logo2")
//             .addTo(scrollController);

  //pin the navigation
  // var pin = new ScrollMagic.Scene({
  //     triggerElement: '#nav'
  // }).setPin('#nav', {pushFollowers: false}).addTo(scrollController);






// TWEEN CONCEPT

 if($("#concept").length > 0){


    var tweenResto = new TimelineMax()
    .add([
      TweenMax.fromTo(".item1 .pic img",0.6,{y:+100},{y:-300, ease: Power0.easeNone}),


      ]).time(0);

    new ScrollMagic.Scene({triggerElement: "#concept .item1", duration:$("#concept .item1").height() * 2, triggerHook:"onEnter"})
            .setTween(tweenResto)
            .addTo(scrollController);


    var tweenCoworking = new TimelineMax()
    .add([
      TweenMax.fromTo(".item2 .pic img",0.6,{y:+200},{y:-300, ease: Power0.easeNone}),

      // TweenMax.fromTo(".item2 .leftText",0.1,{x:-100, opacity:0},{x:0,opacity:1, ease: Power0.easeNone, delay:0.1}),

      ]).time(0);

    new ScrollMagic.Scene({triggerElement: "#concept .item2", duration:$("#concept .item2").height() * 2, triggerHook:"onEnter"})
            .setTween(tweenCoworking)
            .addTo(scrollController);


    var tweenNap = new TimelineMax()
    .add([
      TweenMax.fromTo(".item3 .pic img",0.6,{y:+200},{y:-300, ease: Power0.easeNone}),
      // TweenMax.fromTo(".item3 .rightText",0.1,{x:+100, opacity:0},{x:0,opacity:1, ease: Power0.easeNone, delay:0.1}),



      ]).time(0);

    new ScrollMagic.Scene({triggerElement: "#concept .item3", duration:$("#concept .item3").height() * 2, triggerHook:"onEnter"})
            .setTween(tweenNap)
            .addTo(scrollController);


   


        var tweenNapSpecial = new TimelineMax()
        .add([
          TweenMax.to("body",0.4,{backgroundColor:"rgba(7,28,35,1)", ease: Power0.easeNone}),
           TweenMax.to("header",0.4,{backgroundColor:"rgba(2,10,12,0.8)", ease: Power0.easeNone}),
          TweenMax.to("#concept .item3 p, #concept .item3 h2",0.6,{color:"white", ease: Power0.easeNone}),
          

          ]).time(0);

        new ScrollMagic.Scene({triggerElement: "#concept .item3 .rightText", duration:$("#concept .item3").height/4, triggerHook:"onEnter"})
                .setTween(tweenNapSpecial)
                .addTo(scrollController);
          }

   

}
// TWEEN BLOG
if($("#blog").length > 0){


  var tween= new TimelineMax()
    .add([
      TweenMax.fromTo(".pic",0.6,{y:+100},{y:-300, ease: Power0.easeNone}),


      ]).time(0);

    new ScrollMagic.Scene({triggerElement: "#blog h1", duration:1500, triggerHook:"onEnter"})
            .setTween(tween)
            .addTo(scrollController);



  }
window.onscroll = function() {


  //console.log("TOP LOGO", $(".logo2").offset().top, $("html").scrollTop())
  //console.log("TOP LOGO", $(".logo").offset().top, window.pageYOffset)

  if( ($(".logo").offset().top + 10) <= window.pageYOffset ){

    $('.logo2').addClass("fixed")

  }else{
    $('.logo2').removeClass("fixed")

  }

}
;

function step(startTime) {
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;

  timeFromLastUpdate = startTime - timeWhenLastUpdate;

  if (timeFromLastUpdate > timePerFrame) {

    if(frameNumber < 10){

      $element.attr('src', imagePath + `/logo-helou00${frameNumber}.png`);
    }else if(frameNumber < 100){
      $element.attr('src', imagePath + `/logo-helou0${frameNumber}.png`);
    }else{
      $element.attr('src', imagePath + `/logo-helou${frameNumber}.png`);
    }
    
    timeWhenLastUpdate = startTime;

    if (frameNumber >= totalFrames) {
      frameNumber = -1;
    } else {
       frameNumber = frameNumber + 1;
    }        
  }

 


}