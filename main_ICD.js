$(function(){

var imgWidth = $('.handle').width();
var screenWidth = $(window).width();
var sizeMove = imgWidth - screenWidth;

new Dragdealer('hinhscroll' ,{

	dragStartCallback: function(x, y) {
    $('img.handle').css({"transition": "unset"});
  },

  	dragStopCallback: function(x, y) {
     $('img.handle').css({"transform":"translateX(-"+ sizeMove +"px)", "transition": "transform 60s"});
  }
});

 var _scrollTop;
  $(window).scroll(function () {
        _scrollTop = $(window).scrollTop();
        console.log('scroll :', _scrollTop);   

           if(_scrollTop >=3400){
          $('img.handle').css({"transform":"translateX(-"+ sizeMove +"px)", "transition": "transform 60s"});  
        } 
          });


	 var _scrollTop;
	$(window).scroll(function () {
        _scrollTop = $(window).scrollTop();
        console.log('scroll :', _scrollTop);       

        if(_scrollTop >=1500){
            // console.log("OK men");
            $('.chuto').addClass('chutovo')
            $('.chunho').addClass('chunhovo')
            $('.gradient').addClass('gradientvo')
        }  


        else{
           $('.chuto').removeClass('chutovo')
           $('.chunho').removeClass('chunhovo')
           $('.gradient').removeClass('gradientvo')
        }      
    });

    new WOW().init();
});

