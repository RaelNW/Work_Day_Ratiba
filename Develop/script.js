$(function () {
  var saveBtnEL = $(".saveBtn");
  var timeBlockEl = $(".time-block");
  var userInput = $(".description");

  saveBtnEL.on("click", function () {
    var timeId = $(this).closest(".time-block").attr("id");
    var userSchedule = $(this).siblings(".description").val();

    localStorage.setItem(timeId, userSchedule);
  });

  timeBlockEl.each(function () {
    var elementId = $(this).attr("id");
    var currentHour = new Date().getHours();
    var hour = parseInt(elementId.split("-")[1]);

    if (hour === currentHour) {
      $(this).addClass("present");
    } else if (hour < currentHour) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });

  timeBlockEl.each(function () {
    var timeId = $(this).attr("id");
    var storedInfo = localStorage.getItem(timeId);

    if (storedInfo) {
      $(this).children(".description").val(storedInfo);
    }
  });

  var date = dayjs();
  $("#currentDay").text(date.format("MMMM D, YYYY, hh A"));
});
