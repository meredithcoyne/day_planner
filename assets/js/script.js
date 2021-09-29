$(document).ready(function () {

    // Displays the current date in the header
    var today = moment();
    $('#currentDay').text(today.format('LLLL'));
    $('.saveBtn').on('click', function () {

        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, value);
    })

    $('hour_9.description').val(localStorage.getItem('9'));
    $('hour_10.description').val(localStorage.getItem('9'));
    $('hour_11.description').val(localStorage.getItem('9'));
    $('hour_12.description').val(localStorage.getItem('9'));
    $('hour_13.description').val(localStorage.getItem('9'));
    $('hour_14.description').val(localStorage.getItem('9'));
    $('hour_15.description').val(localStorage.getItem('9'));
    $('hour_16.description').val(localStorage.getItem('9'));
    $('hour_17.description').val(localStorage.getItem('9'));
    $('hour_18.description').val(localStorage.getItem('9'));



    function agendaSaved() {
        var currentHour = today.hours();
        $(".time-block").each(function () {
                var divTimeId = parseInt($(this).attr("id")); console.log(divTimeId);
            if (divTimeId < currentHour) {
                $(this).addClass('past');
            } else if (divTimeId === currentHour) {
                $(this).removeClass('past');
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        })

}

cssUpdate();

})