$(function () {
    $('.btn.btn-row1').on('click', function () {
        $(this).css('background-color','#24afb2');
    });
});

$(function () {
    $('.dropdown.show').on('click', function () {
        $('.list').slideToggle (300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

