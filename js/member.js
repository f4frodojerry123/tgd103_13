         
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

        $(".loginfo").focus(function(){

            $(this).addClass("boxshadow")
        })
        $(".loginfo").blur(function(){

            $(this).removeClass("boxshadow")
        })

        $(".submit").focus(function(){

        $(this).addClass("boxshadow")
        })
        $(".submit").blur(function(){

        $(this).removeClass("boxshadow")
        })

        //  