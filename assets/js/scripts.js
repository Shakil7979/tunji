$(document).ready(function(){
    $(".banner_right").owlCarousel({
        loop:true, 
        nav:false,
        dots:false,
        items:1,
        margin: 20,
        autoplay:true, 
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
        $('.ex_btn').removeClass('active');     
        $('[btn_id="'+next_id_val+'"]').addClass('active');  
        $('.ex_cont_id_'+next_id_val).fadeIn(); 
    });

      









});