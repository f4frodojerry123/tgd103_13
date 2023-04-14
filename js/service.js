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
        $(".midbanner img").css("display", "none");
        
        $(".block").children("img").css("display", "none");
        $(".blockright").children("img").css("display", "none");
        $(".block").children("div").css("display", "none");
        $(".blockright").children("div").css("display", "none");

        if ($(window).width() >= 900) {
                $(window).scroll(function(){    
                    var scroll = $(window).scrollTop();
                        if (scroll >= 120) {
                            $(".midbanner .img-a").show(800),
                            $(".midbanner .img-b").show(1100),
                            $(".midbanner .img-c").show(1400),
                            $(".midbanner .img-d").show(1700),
                            $(".midbanner .img-e").show(2000)
                            console.log($(window).width())
                        };
                        if (scroll >= 620) {
                            $(".aa").fadeIn(1000),
                            $(".aa1").fadeIn(1000)
                        }
                        if (scroll >= 963) {
                            $(".bb").fadeIn(1000),
                            $(".bb1").fadeIn(1000) 
                        }
                        if (scroll >= 1343) {
                            $(".cc").fadeIn(1000),
                            $(".cc1").fadeIn(1000)
                        }
                        if (scroll >= 1743) {
                            $(".dd").fadeIn(1000),
                            $(".dd1").fadeIn(1000)
                        }
                        if (scroll >= 2086) {
                            $(".ee").fadeIn(1000),
                            $(".ee1").fadeIn(1000)
                        };         
                });
            } else if ($(window).width() < 900){     
                $(".midbanner .img-a").show(800),
                $(".midbanner .img-b").show(1100),
                $(".midbanner .img-c").show(1400),
                $(".midbanner .img-d").show(1700),
                $(".midbanner .img-e").show(2000),
                $(".aa").css("display", "block");
                $(".aa1").css("display", "block");
                $(".bb").css("display", "block");
                $(".bb1").css("display", "block");
                $(".cc").css("display", "block");
                $(".cc1").css("display", "block");
                $(".dd").css("display", "block");
                $(".dd1").css("display", "block");
                $(".ee").css("display", "block");
                $(".ee1").css("display", "block");
                console.log($(window).width())
                console.log(scroll)
                       
            };
           
            
        // $(window).scroll(function(){    
        //     var scroll = $(window).scrollTop();
        //     if (scroll >= 120) {
        //         $(".midbanner .img-a").show(800),
        //         $(".midbanner .img-b").show(1100),
        //         $(".midbanner .img-c").show(1400),
        //         $(".midbanner .img-d").show(1700),
        //         $(".midbanner .img-e").show(2000)
                
        //     } else{

        //     };       
        // });


        // $(window).scroll(function(){    
        //     var scroll = $(window).scrollTop();
        //     if (scroll >= 620) {
        //         $(".aa").fadeIn(1000),
        //         $(".aa1").fadeIn(1000)
                
        //     } else{

        //     };
        //     if (scroll >= 963) {
        //         $(".bb").fadeIn(1000),
        //         $(".bb1").fadeIn(1000)
                
        //     } else{

        //     }; 
        //     if (scroll >= 1343) {
        //         $(".cc").fadeIn(1000),
        //         $(".cc1").fadeIn(1000)
                
        //     } else{

        //     };     
        //     if (scroll >= 1743) {
        //         $(".dd").fadeIn(1000),
        //         $(".dd1").fadeIn(1000)
                
        //     } else{

        //     };     
        //     if (scroll >= 2086) {
        //         $(".ee").fadeIn(1000),
        //         $(".ee1").fadeIn(1000)
                
        //     } else{

        //     };         
        // });