$(document).ready(function(){
	$(".ad-left").hover(function(){
		$(".ad-right").stop().animate({width: 'toggle'},250);
	});
	$(".grid-col1 ul li").hover(function(){
		$(".li-expand").stop().toggle();
	});
	$(".li-expand").hover(function(){
		$(".li-expand").stop().toggle();
	});
	
//	轮播图
     var slideBox = $(".grid-col2-l");
     var ul = slideBox.find("ul");
     var oneWidth = slideBox.find("ul li").eq(0).width();
     var number = slideBox.find(".circle span");            
     var timer = null;
     var sw = 0;
     //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
     number.on("click",function (){
     $(this).addClass("active").siblings("span").removeClass("active");
     sw=$(this).index();
     ul.animate({
            "right":oneWidth*sw,    //ul标签的动画为向左移动；
               });
     });
     //左右按钮的控制效果
     $(".arrow-r").stop(true,true).click(function (){
         sw++;
         if(sw==number.length){sw=0};
         number.eq(sw).trigger("click");
         });
    $(".arrow-l").stop(true,true).click(function (){
        sw--;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
        });
    //定时器的使用，自动开始
    timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
        },2000);
    //hover事件完成悬停和，左右图标的动画效果
    slideBox.hover(function(){
        $(".arrow-r,.arrow-l").animate({
            "opacity":1,
            },200);
        clearInterval(timer);
        },function(){
            $(".arrow-r,.arrow-l").animate({
                "opacity":0.5,
                },500);
        timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
        },2000);
            })
});



