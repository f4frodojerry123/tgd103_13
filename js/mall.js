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
        // 
       

        // 
        $("#dark2").click(function(event){
                $(".confirm-block").hide()
                $("#dark2").hide()
                $(".nav").animate({right:'-250px'},750).removeClass("now")
                
            })
           
        // 
        //  
       
        
        let btn = $(".leftdiv ol:first-child")
        let list = $(".leftdiv ol").slice(1)
        let plus = $(".fa-plus")
        let minus = $(".fa-minus")
            $(btn).on("click",function(){
                if($(btn).hasClass("now")){
                    list.hide(500)
                    plus.show(1000)
                    minus.hide(800)
                    btn.delay(500).width("100%").removeClass("now")
                    
                }else{
                    list.fadeIn(1000)
                    plus.hide(0)
                    minus.show(1000)
                    btn.width("30%").addClass("now")
                    
                }

            })
        
        