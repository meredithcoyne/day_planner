   $(document).ready(function () {

       // Displays the current date in the header
       var today = newDate();
       var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
       var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
       var dateTime = date + ' ' + time;
       $(".saveBtn").on("click", function () {
           var value = $(this).siblings(".description").val();
           var time = $(this).parent().attr("id");
           localStorage.setItem(time, value);
       })

       $("#9 .description").val(localStorage.getItem("9"));
       $("#10 .description").val(localStorage.getItem("10"));
       $("#11 .description").val(localStorage.getItem("11"));
       $("#12 .description").val(localStorage.getItem("12"));
       $("#13 .description").val(localStorage.getItem("13"));
       $("#14 .description").val(localStorage.getItem("14"));
       $("#15 .description").val(localStorage.getItem("15"));
       $("#16 .description").val(localStorage.getItem("16"));
       $("#17 .description").val(localStorage.getItem("17"));



       function cssUpdate() {
           var currentHour = today.hours();
           $(".time-block").each(function () {
               var divTimeId = parseInt($(this).attr("id"));
               console.log(divTimeId);
               if (divTimeId < currentHour) {
                   $(this).addClass("past");
               } else if (divTimeId === currentHour) {
                   $(this).removeClass("past");
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