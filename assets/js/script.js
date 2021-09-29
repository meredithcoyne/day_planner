// defined variables
var saveBtn = $(".saveBtn");

// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// each time block is color-coded to indicate whether it is in the past, present, or future
function timeBlockColor() {
    var currentHour = moment().hours();

    $(".time-block").each(function () {
        var divTimId = parseInt($(this).attr("id"));


        if (divTimId > currentHour) {
            $(this).addClass("future");
        } else if (divTimId === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};


saveBtn.on("click", function () {

    // save to local 
    var time = $(this).siblings(".hour").text();
    var value = $(this).siblings(".description").val();

    localStorage.setItem(time, value);
});

// refresh the page and saved items will stay through local storage
function SavePlanner() {

    $(".hour").each(function () {
        var divTimId = $(this).text();
        var todayPlanner = localStorage.getItem(divTimId);


        if (todayPlanner !== null) {
            $(this).siblings(".plan").val(todayPlanner);
        }
    });
}

// call function
timeBlockColor();
SavePlanner();