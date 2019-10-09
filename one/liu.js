$(function () {
    $("div.nav-commodity").on("mouseenter", function (e) {
        // console.log(11)
        $("div.commodity-show").show().siblings().hide();
        // $("div.content-list").hide();
        $(".min-img").show();
        $(this).on('mousemove', function (e) {
            var x = e.pageX - $(this).offset().left - $("div.min-img").width() / 2;
            var y = e.pageY - $(this).offset().top - $("div.min-img").height() / 2;

            var maxX = $(this).width() - $("div.min-img").width();
            var maxY = $(this).height() - $("div.min-img").height();

            x < 0 ? x = 0 : (x > maxX ? x = maxX : x);
            y < 0 ? y = 0 : (y > maxY ? y = maxY : y);
            $("div.min-img").css({
                left: x,
                top: y,
            })
            // $(".chair").css({
            //     left:e.pageX-$("div.min-img").offset().left-5,
            //     top:e.pageY-$("div.min-img").offset().top-5,
            //     opacity:1,
            // })

            $(".big-img").css({
                left: -(x / $(this).width() * $(".big-img").width()),
                top: -(y / $(this).height() * $(".big-img").height()),
            })
            // console.log($(".big-img"))
            // console.log($(".big-img").height())

        })


    })
    $("div.nav-commodity").on("mouseleave", function (e) {
        $("div.commodity-show").hide().siblings().show();
        $(".min-img").hide();
    })





    $("#char-size").on("mouseenter",function(){
        $(this).css({
            "color":"#999"
        })
        $(this).on("click",function(){
            $(".sizechart-popup").css({
                "display":"block"
            })   
            $(".popupbg").css({
                "display":"block"
            })

            $(".sizechart-close").on("click",function(){
                    $(".sizechart-popup").css({
                    "display":"none"
                })   
                $(".popupbg").css({
                    "display":"none"
                })
            })
            $(".chart-button").on("click",function(){
                    $(".sizechart-popup").css({
                    "display":"none"
                })   
                $(".popupbg").css({
                    "display":"none"
                })
            })
         })
        
    })
    $("#char-size").on("mouseleave",function(){
        $(this).css({
            "color":"#333"
        })
    })

    $(".content-right").on("mouseenter", function () {


        $("#size-select").on("change", function () {
            var flag = true;
            $(".size-span").html(
                $(this).val()

            )

            if ($(this).children().eq(0).siblings()) {
                $(".error-red").html("")
                flag = false;
            }
            return;
        })

        $("#num-select").on("change", function () {
            $(".num-span").html(
                $(this).val()
            )

        })






        $(".car-car").on("mouseenter", function () {
            $(this).css({
                opacity: .7
            })

            $(this).on("click", function () {

                if ($(".size-span").html() == "请选择尺码") {
                    $(".error-red").html("请选择尺码")
                        .css({
                            "font-size": 12,
                            "color": "#940000",
                            "vertical": "right",
                            //   "display":"inline-block",
                            "margin-left": 140,
                        })

                } else {
                    $(".popupbg").show();
                    $(".min-popupbg").show();
                    $(".close-btn").on("click", function () {
                        $(".popupbg").hide();
                        $(".min-popupbg").hide();
                    })
                    $(".popupbg-p-two a").on("mouseenter", function () {
                        $(this).css({
                            "background": "#fff",
                            "color": "#000",
                            "width": "20%",
                            "height": 40,
                        })
                        $(this).children().css({

                            "background-position": "-43px -164px"

                        })
                        $(this).on("click", function () {
                            $(".popupbg").hide();
                            $(".min-popupbg").hide();
                        })
                    })
                    $(".popupbg-p-two a").on("mouseleave", function () {
                        $(this).css({
                            "background": "#000",
                            "color": "#fff",
                        })
                        $(this).children().css({
                            "background-position": "-10px -164px"
                        })
                    })

                }

            })
        })
        $(".car-car").on("mouseleave", function () {
            $(this).css({
                opacity: 1
            })
        })

        $(".car-add").on("mouseenter", function () {
            $(this).css({
                "opacity": .7
            })
            //点击购物车加1。
        })
        $(".car-add").on("mouseleave", function () {
            $(this).css({
                "opacity": 1
            })
        })
    })


    // $(".nav-min").children().on("mouseenter", function () {
    //     $(this).not($(".min-one")).each(function () {
    //         $(this).css({
    //             "border": "1px solid #333"
    //         })

    //         $(this).on("click", function () {
    //             $(this).addClass("min-one").siblings().removeClass("min-one").css({
    //                 "border": "1px solid #fff"
    //             })
    //             $(".nav-commodity img").attr({ src: "" })
    //             $(".nav-commodity img").attr({ src: "./img/" + $(this).index() + "-1-min.png" })

    //             $(".commodity-show img").attr({ src: "" })
    //             $(".commodity-show img").attr({ src: "./img/" + $(this).index() + "-1-big.png" })


    //         })
    //  })
    //     $(".nav-min").children().on("mouseleave", function () {
    //         $(this).each(function () {
    //             $(this).not($(".min-one")).css({
    //                 "border": "1px solid #fff"
    //             })

    //         })
    //     })
    // })



    $(".car-img").on("mouseenter",function(){
        $(this).not($(".car-min-img")).css({
            "border":"1px solid #ccc"
        })
        $(this).on("click",function(){
            $(this).addClass(".car-min-img").siblings().removeClass(".car-min-img").css({
                               "border": "1px solid #fff"
                          })
        })
    })
    $(".car-img").on("mouseleave",function(){
        $(this).not($(".car-min-img")).css({
            "border":"1px solid #fff"
           })
    })


    //猜你喜欢
    $(".product-list").children().on("mouseenter", function () {
        $(this).each(function () {
            $(this).css({
                "border": "1px solid #333",
            })
        })
    })
    $(".product-list").children().on("mouseleave", function () {
        $(this).each(function () {
            $(this).css({
                "border": "none",
            })
        })
    })



    //点击向左切换图片
    var num = 0
    $(".left").on("click", function () {

        $(".product-list").eq(num).siblings().css({
            "left": "-1000px"
        })
        $(".product-list").eq(num).stop().animate({
            left: 1000,
        }, 500)
        num = --num < 0 ? $(".product-list").size() - 1 : num

        $(".product-list").eq(num).stop().animate({
            left: 0,
        }, 500)

    })

    //向右切换图片
    $(".right").on("click", function () {
        $(".product-list").eq(num).siblings().css({
            "left": "1000px"
        })
        $(".product-list").eq(num).stop().animate({
            left: -1000,
        }, 500)
        num = ++num >= $(".product-list").size() - 1 ? 0 : num

        $(".product-list").eq(num).stop().animate({
            left: 0,
        }, 500)

    })
    $(".box-product-list").children().on("mouseenter", function () {
        $(this).css({
            "border": "1px solid #333"
        })
    })
    $(".box-product-list").children().on("mouseleave", function () {
        $(this).css({
            "border": "none"
        })
    })

})