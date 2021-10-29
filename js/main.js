$(document).ready(() => {
    //show contact us form
    $('#contBtn').on('click', () => {
        $('#contForm').fadeIn();
    })
    //hide contact us form
    $('#contForm').on('mouseleave', () => {
        $('#contForm').fadeOut();
    })

    //show sign up form
    $('#signBtn').on('click', () => {
        $('#signForm').fadeIn();
    })
    //hide sign up form
    $('#signForm').on('mouseleave', () => {
        $('#signForm').fadeOut();
    })


    /*over services - change color*/
    $('.serviceCard1').mouseover(function(){    
        $('.serviceCard1').css("background","#a5abad");    
    });

    $($('.serviceCard1')).mouseout(function(){    
        $('.serviceCard1').css("background","white");       
    });
    
    $('.serviceCard2').mouseover(function(){    
        $('.serviceCard2').css("background","#a5abad");    
    });

    $($('.serviceCard2')).mouseout(function(){    
        $('.serviceCard2').css("background","white");       
    });

    $('.serviceCard3').mouseover(function(){    
        $('.serviceCard3').css("background","#a5abad");    
    });

    $($('.serviceCard3')).mouseout(function(){    
        $('.serviceCard3').css("background","white");       
    });


    /*change image*/
    $('#bImg1').mouseover(function(){    
        $("#bImg1").attr("src","https://images.pexels.com/photos/7869234/pexels-photo-7869234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");   
    });

    $($('#bImg1')).mouseout(function(){    
        $("#bImg1").attr("src","https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?cs=srgb&dl=pexels-fox-1595385.jpg&fm=jpg");
    });


    $('#bImg2').mouseover(function(){    
        $("#bImg2").attr("src","https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");   
    });

    $($('#bImg2')).mouseout(function(){    
        $("#bImg2").attr("src","https://images.pexels.com/photos/5940718/pexels-photo-5940718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    });


    $('#bImg3').mouseover(function(){    
        $("#bImg3").attr("src","https://images.pexels.com/photos/4145350/pexels-photo-4145350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");   
    });

    $($('#bImg3')).mouseout(function(){    
        $("#bImg3").attr("src","https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    });    
})