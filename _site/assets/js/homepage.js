$(document).ready(function(){
    /* homepage landing appearance */
    $('.dbox').removeClass('dbox').addClass('hbox');
    $('.dnest').removeClass('dnest').addClass('hnest');
    $('#homescroll').addClass('removeme');
    $('#socscroll').removeClass('sdefault');
    $('.mobnav').addClass('removeme')
     
    /* scroll to content */
    $(document).on('scroll', function(){
        if ( $(window).scrollTop() > 50 ) {
            $('.hbox').removeClass('hbox').addClass('dbox');
            $('.hnest').removeClass('hnest').addClass('dnest');
            $('#homeid').addClass('removeme');
            $('#homesoc').addClass('removeme');
            $('#bottomgrad').addClass('removeme');
            $('.hindex').removeClass('hindex').addClass('hdefault');
            $('#homescroll').removeClass('removeme');
            $('#socscroll').addClass('sdefault');
            $('.mobnav').removeClass('removeme');
        } else {
            $('.dbox').removeClass('dbox').addClass('hbox');
            $('.dnest').removeClass('dnest').addClass('hnest');
            $('#homeid').removeClass('removeme');
            $('#homesoc').removeClass('removeme');
            $('#bottomgrad').removeClass('removeme');
            $('.hdefault').removeClass('hdefault').addClass('hindex');
            $('#homescroll').addClass('removeme');
            $('#socscroll').removeClass('sdefault');
            $('.mobnav').addClass('removeme');
        }
    });
});
