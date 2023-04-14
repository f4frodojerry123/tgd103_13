$(".fade, .slide, .tri").css("display", "none");
$(".slide-click").on("click", function(){
    $(this).children(".slide").slideToggle(500);
    $(this).prev(".fade").toggle(500);
    $(this).children(".tri").fadeToggle(500)
    $(this).find(".fa-caret-down").fadeToggle(500)
    $(this).find(".fa-caret-up").fadeToggle(500)


   
})
// 
$(".fa").on("click",function(nav){
    nav.stopPropagation
    $(".confirm-block").hide()
    $("#dark").hide()
    if($(".nav").hasClass("now")){
    $("#dark2").hide()
    $(".nav").animate({right:'-250px'},750).removeClass("now")
    }else{
    $("#dark2").show()  
    $(".nav").animate({right:'0px'},750).addClass("now")
    
    
    }
})
$("#dark2").click(function(event){
        $(".confirm-block").hide()
        $("#dark2").hide()
        $(".nav").animate({right:'-250px'},750).removeClass("now")
        
    })
   
// 
