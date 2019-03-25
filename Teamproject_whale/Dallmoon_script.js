$(document).ready(function(){

    // console.log($(".D_sideicon").mouseenter)
    $(".D_quick_search").mouseenter(function(){
        $('.D_quick_search_sub').css("display","inline-block");

    });
    $(".D_quick_search").mouseout(function(){
        $('.D_quick_search_sub').css("display","none");
    });




    $(".D_memo").mouseenter(function(){
        $('.D_memo_sub').css("display","inline-block");

    });
    $(".D_memo").mouseout(function(){
        $('.D_memo_sub').css("display","none");
    });


    $(".D_translation").mouseenter(function(){
        $('.D_translation_sub').css("display","inline-block");

    });
    $(".D_translation").mouseout(function(){
        $('.D_translation_sub').css("display","none");
    });


    $(".D_plus").mouseenter(function(){
        $('.D_plus_sub').css("display","inline-block");

    });
    $(".D_plus").mouseout(function(){
        $('.D_plus_sub').css("display","none");
    });


    $(".D_tools").mouseenter(function(){
        $('.D_tools_sub').css("display","inline-block");
    });
    $(".D_tools").mouseout(function(){
        $('.D_tools_sub').css("display","none");
    });


    $(".D_music").mouseenter(function(){
        $('.D_music_sub').css("display","inline-block");

    });
    $(".D_music").mouseout(function(){
        $('.D_music_sub').css("display","none");
    });



    $(".D_bookmark").mouseenter(function(){
        $('.D_bookmark_sub').css("display","inline-block");

    });
    $(".D_bookmark").mouseout(function(){
        $('.D_bookmark_sub').css("display","none");
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