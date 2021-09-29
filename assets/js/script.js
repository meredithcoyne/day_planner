
// define variables
var saveBtn = $(".saveBtn");

// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('LLLL'));

// each time block is color-coded to indicate whether it is in the past, present, or future
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));


        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// saves to local storage
$(".saveBtn").on("click", function () {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var value = $(this).siblings(".description").val();

    localStorage.setItem(time, value);
});

//after refresh, data is saved in local storage
function savePlanner() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var todayPlanner = localStorage.getItem(currentHour);

        // console.log(this);
        // console.log(currentHour);

        if(todayPlanner !== null) {
            $(this).siblings(".description").val(todayPlanner);
        }
    });
}

// call function 
timeBlockColor();
savePlanner();
