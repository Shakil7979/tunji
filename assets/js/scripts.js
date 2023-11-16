$(document).ready(function(){
    $(".banner_right").owlCarousel({
        loop:true, 
        nav:false,
        dots:false,
        items:1,
        margin: 20,
        autoplay:true, 
        responsive:{
            0:{ 
                margin: 50,
            }, 
            767:{ 
                margin: 20,
            }
        }
    }); 
    $(".feature_carousel").owlCarousel({
        loop:true, 
        nav:true,
        dots:false,
        items:3,
        margin: 20,
        // autoplay:true, 
        navText : ["<p class='feature_navs'><i class='fa fa-arrow-left'></i>PREVIOUS</p>","<p class='feature_navs'>NEXT<i class='fa fa-arrow-right'></i></p>"],
        responsive:{
            0:{ 
                items:1,
            }, 
            767:{ 
                items:3,
            }
        }
    }); 
    $(".gallery_carousel").owlCarousel({
        loop:true, 
        nav:true,
        dots:false,
        items:3.5,
        margin: 40,
        autoplay:true, 
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{ 
                items:1,
            }, 
            767:{ 
                items:3.5,
            }
        }
    }); 
    $(".awards_carousel").owlCarousel({
        loop:true, 
        nav:false,
        dots:false,
        items:3,
        margin: 40,
        autoplay:true,  
        responsive:{
            0:{ 
                items:1,
            }, 
            767:{ 
                items:3,
            }
        }
    }); 

    $(document).on('click','.ex_btn',function(){
        $('.ex_btn').removeClass('active'); 
        $(this).addClass('active');
        var btn_id = $(this).attr('btn_id');
        $('.experience_content').hide();
        $('.experience_content').removeClass('active');
        $('.ex_cont_id_'+btn_id).fadeIn();   
    });

    $(document).on('click','.next_ex',function(){ 
        var next_id = $(this).attr('next_id');   
        $('.experience_content').hide();
        var next_id_val = 1 + parseInt(next_id, 10);  
        if(next_id_val == 7){
            var next_id_val = 1 + 0; 
        } 
        $('.ex_btn').removeClass('active');     
        $('[btn_id="'+next_id_val+'"]').addClass('active');  
        $('.ex_cont_id_'+next_id_val).fadeIn(); 
    });
 

    $(document).on('click','.mobile_bars',function(){
        $('.menu').slideToggle();
    });


    $('.menu ul li a').click(function(){

        $('html,body').animate({
          scrollTop:$($(this).attr('href')).offset().top
        },1000);
    
        return false;
      });

    $('.gallery_box').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            }
        });
    });


});