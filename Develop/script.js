
$(document).ready(function () {
  var now = dayjs();
  
  $("#currentDay").text(now.format('dddd MMMM D YYYY'));

  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id").split("-")[1];
    var text = $(this).siblings(".description").val();
    localStorage.setItem("hour " + hour, text);
  });

  $(".time-block").each(function() {
    var hour = parseInt($(this).attr("id").split("-")[1]);

    if (hour < now.hour()) {
      $(this).addClass("past");
    } else if (hour === now.hour()) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    var savedText = localStorage.getItem("hour " + hour);
    if (savedText !== null) {
      $(this).find(".description").val(savedText);
    }

  });
});
