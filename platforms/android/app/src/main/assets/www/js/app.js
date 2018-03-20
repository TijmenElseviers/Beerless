$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);

    $('.button-collapse').sideNav();

    $('.side-nav a').click(function(){
        $('.spa').hide();
        $('#' + $(this).data('show')).show();
        $('.button-collapse').sideNav('hide');
    });

    $('#scanCode').click(function () {
        $('.spa').hide();
        $('#tabScan').show();
        Scanner.scanCode();

    });

    $(document).bind('function_a_complete', Scanner.stopScan);
});

function onDeviceReady() {
    console.log('Device is ready');
    Scanner.init();

};
