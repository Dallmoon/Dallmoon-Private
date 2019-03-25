$(document).ready(function(){

    // console.log($(".D_sideicon").mouseenter)
    $(".D_sideicon1").mouseenter(function(){
        $('.D_sideicon_sub').css("display","inline-block");

    });
    $(".D_sideicon1").mouseout(function(){
        $('.D_sideicon_sub').css("display","none");
    });



    $(".D_sideicon").click(function(){
        if ($('.D_sidebar_sub').css("display") == "none"){
            $('.D_sidebar_sub').show("fast")
            }
            else{
                $('.D_sidebar_sub').hide("fast")
            }
    });

    $(".D_hide_sidebar").click(function(){
        if ($('.D_sidebar').css("display") == "block"){
            $('.D_sidebar').hide("fast")
            }
            else{
                $('.D_sidebar').show("fast")
            }
    });




});