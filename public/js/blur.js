$(document).ready(function(){
 $("#card-holder").click(function(){
   $('#card').animate({width:'toggle'}, 450)
   $( "#card" ).css( {"filter":"blur(0px)"});
    $(".Flex2" ).css( {"filter":"blur(15px)"});
    $(".Flex" ).css( {"filter":"blur(15px)"});
     $(".Flex2" ).css( {"pointer-events":" none"});
    $(".Flex" ).css( {"pointer-events":" none"});
     
 });
 $(".textClose").click(function(){
   $('#card').animate({width:'toggle'}, 450)
     $(".Flex2" ).css( {"filter":"blur(0px)"});
    $(".Flex" ).css( {"filter":"blur(0px)"});
     $(".Flex2" ).css( {"pointer-events":" auto"});
    $(".Flex" ).css( {"pointer-events":" auto"});

    
 });


});



 $( ".image" ).mouseenter(function() {

  $( "img" ).css( {"filter":"blur(7px)"});
   $( this ).css( {"filter":"blur(0px)"});
  
});
   $( ".image" ).mouseleave(function() {
  $( "img" ).css( {"filter":"blur(0px)"});
});
   $( ".image1" ).mouseenter(function() {

  $( "img" ).css( {"filter":"blur(7px)"});
   $( this  ).css( {"filter":"blur(0px)"});
  
});
   $( ".image1" ).mouseleave(function() {
  $( "img" ).css( {"filter":"blur(0px)"});
});