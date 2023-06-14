$(function () {
    var body = $('#right_sidebar_body');
    $('#right_sidebar_header').on("click", function(){
        body.slideToggle();
    });
 });

$(function () {
    var header = $('#h2h_header');
    var table = $('#h2h_table');
    var match_details = $('#h2h_match_details');

    header.on("click", function(){
        table.slideToggle();
    });    

    // header.on('click', function(){
    //     if(match_details.hasClass('open') == true){
    //         console.log('false')
    //         match_details.removeClass('open')
    //         table.hide()
    //     }else{
    //         match_details.addClass('open')
    //         table.show()
    //     }

    // });
     
});

 $(function () {
    var body = $('#prediction_body');
    $('#prediction_header').on("click", function(){
        body.slideToggle();
    });
 });