
        // comment
        $(".left-cmt").css("background-color","#ec930e").addClass("now")

        $(".center-cmt").on("click", function(){
            if($(this).hasClass("now")){
                
            }else{
            $(".comment-in").animate({left:'-820px'},500)
            $(".center-cmt").css("background-color","#ec930e").addClass("now")
            $(".left-cmt").css("background-color","#f1daa0").removeClass("now")
            $(".right-cmt").css("background-color","#f1daa0").removeClass("now");
            }
            
        });

        
        $(".left-cmt").on("click", function(){
            if($(this).hasClass("now")){
                
            }else{
                $(".comment-in").animate({left:'0px'},500)
                $(".center-cmt").css("background-color","#f1daa0").removeClass("now")
                $(".left-cmt").css("background-color","#ec930e").addClass("now")
                $(".right-cmt").css("background-color","#f1daa0").removeClass("now")
            }
        });

        $(".right-cmt").on("click", function(){
            if($(".right-cmt").hasClass("now")){
               
            }else{
                $(".comment-in").animate({left:'-1640px'},500)
                $(".center-cmt").css("background-color","#f1daa0").removeClass("now")
                $(".left-cmt").css("background-color","#f1daa0").removeClass("now")
                $(".right-cmt").css("background-color","#ec930e").addClass("now")
            }
        });
        // comment
        
       
        // hotitem
        $(".left").css("background-color", "gray").addClass("now")

        $(".right").on("click", function(){
            if($(".right").hasClass("now")){
               
            }else{
            $(".slide-item").animate({left:'-1050px'},750)
            $(".left").removeAttr("style").removeClass("now")
            $(".right").css("background-color", "gray").addClass("now")
            }
        })
        $(".left").on("click", function(){
            if($(".left").hasClass("now")){
               
            }else{
            $(".slide-item").animate({left:'0px'},750)
            $(".right").removeAttr("style").removeClass("now")
            $(".left").css("background-color", "gray").addClass("now")
            }
        })
        // hotitem
        // hot item rwd
        $(".left2").css("background-color", "gray").addClass("now")

        $(".right2").on("click", function(){
        if($(".right2").hasClass("now")){
        
        }else{
        $(".slide-item").animate({left:'-100%'},750)
        $(".left2").removeAttr("style").removeClass("now")
        $(".right2").css("background-color", "gray").addClass("now")
        }
        }   )
        $(".left2").on("click", function(){
        if($(".left2").hasClass("now")){
        
        }else{
        $(".slide-item").animate({left:'0px'},750)
        $(".right2").removeAttr("style").removeClass("now")
        $(".left2").css("background-color", "gray").addClass("now")
        }
        })
        // hot item rwd

        
        

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

         //comment rwd
         $(".st").addClass("now")
        
         if ($('.comment-out2').css('display') !== 'none')
            {   
                // $(function () {
                // setInterval(function () {
                //     $(".st").fadeIn(1000).delay(3000).fadeOut(1000).delay(10000)
                //     })})
                // $(function () {
                // setInterval(function () {
                    
                //     $(".nd").delay(5000).fadeIn(1000).delay(3000).fadeOut(1000).delay(5000)
                //     })})
                //     $(function () {
                // setInterval(function () {
                    
                //     $(".rd").delay(10000).fadeIn(1000).delay(3000).fadeOut(1000)
                //     })})
                let ndfun = function  nd () {$(".nd").fadeIn(1000).delay(3000).fadeOut(1000, rdfun)};
                let rdfun = function  rd () {$(".rd").fadeIn(1000).delay(3000).fadeOut(1000,a)};
                let a = function  a() {$(".st").fadeIn(1000).delay(3000).fadeOut(1000,ndfun)}
                      
                        


                
                $(function () {
                setInterval(a())})

              
                
               

                }
                
              
      