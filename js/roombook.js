// 
let a = [1, 2, 3];
a.array.forEach(element => {

});
$(".fa").on("click", function (nav) {
    nav.stopPropagation
    $(".confirm-block").hide()
    $("#dark").hide()
    if ($(".nav").hasClass("now")) {
        $("#dark2").hide()
        $(".nav").animate({ right: '-250px' }, 750).removeClass("now")
    } else {
        $("#dark2").show()
        $(".nav").animate({ right: '0px' }, 750).addClass("now")


    }
})
$("#dark2").click(function (event) {
    $(".confirm-block").hide()
    $("#dark2").hide()
    $(".nav").animate({ right: '-250px' }, 750).removeClass("now")

})

//  
$("input").focus(function () {
    if (!$(this).hasClass("no")) {
        $(this).addClass("boxshadow")
    }

})
$("input").blur(function () {


    $(this).removeClass("boxshadow")

})
//

$(".roomname").change(calprice)
$(".roomdate").change(calprice)


function calprice() {
    let roomname = $(".roomname").val()
    let roomdate = $(".roomdate").val()
    let price = $("#nn")
    if (roomname == 1 && roomdate == 1) {
        price.html("700/日")
    }
    else if (roomname == 1 && roomdate == 2) {
        price.html("650/日")
    }
    else if (roomname == 1 && roomdate == 3) {
        price.html("600/日")
    }
    else if (roomname == 2 && roomdate == 1) {
        price.text("900/日")
    }
    else if (roomname == 2 && roomdate == 2) {
        price.text("800/日")
    }
    if (roomname == 2 && roomdate == 3) {
        price.text("750/日")
    }
    if (roomname == 3 && roomdate == 1) {
        price.text("1100/日")
    }
    if (roomname == 3 && roomdate == 2) {
        price.text("1000/日")
    }
    if (roomname == 3 && roomdate == 3) {
        price.text("950/日")
    }
    if (roomname == 4 && roomdate == 1) {
        price.text("1500/日")
    }
    if (roomname == 4 && roomdate == 2) {
        price.text("1350/日")
    }
    if (roomname == 4 && roomdate == 3) {
        price.text("1300/日")
    }
    console.log("aaa")
}

// 


// 

$("#bot-sub").click(function (event) {
    event.stopPropagation();
    $(".nav").animate({ right: '-250px' }, 750).removeClass("now")
    $(".confirm-block").show()
    $("#dark").show()
    // roomname
    let roombooked = $("#roomtype").val()
    console.log(roombooked)
    if (roombooked == 1) {
        $(".n1").text("小型超值房型")
    }
    if (roombooked == 2) {
        $(".n1").text("中型舒適房型")
    }
    if (roombooked == 3) {
        $(".n1").text("雙層舒適房型")
    }
    if (roombooked == 4) {
        $(".n1").text("家庭豪華房型")
    }
    //
    // catnum

    let catnum = $("#catnum").val()
    $(".n2").text(catnum + ' ' + '位')
    //
    //price
    let roomname = $("#roomtype").val()
    let roomdate = $("#number").val()
    let price = $(".price2")

    if (roomname == 1 && roomdate == 1) {
        price.html("700/日")
    }
    else if (roomname == 1 && roomdate == 2) {
        price.html("650/日")
    }
    else if (roomname == 1 && roomdate == 3) {
        price.html("600/日")
    }
    else if (roomname == 2 && roomdate == 1) {
        price.text("900/日")
    }
    else if (roomname == 2 && roomdate == 2) {
        price.text("800/日")
    }
    if (roomname == 2 && roomdate == 3) {
        price.text("750/日")
    }
    if (roomname == 3 && roomdate == 1) {
        price.text("1100/日")
    }
    if (roomname == 3 && roomdate == 2) {
        price.text("1000/日")
    }
    if (roomname == 3 && roomdate == 3) {
        price.text("950/日")
    }
    if (roomname == 4 && roomdate == 1) {
        price.text("1500/日")
    }
    if (roomname == 4 && roomdate == 2) {
        price.text("1350/日")
    }
    if (roomname == 4 && roomdate == 3) {
        price.text("1300/日")
    }


})
$("#dark").click(function (event) {
    $(".confirm-block").hide()
    $("#dark").hide()
    $(".nav").animate({ right: '-250px' }, 750).removeClass("now")
    $("#header").click(function (event) {
        $(".confirm-block").hide()
        $("#dark").hide()
    })
})




