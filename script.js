//use the ready() method and test via console.log
$(document).ready(function() {
  // console.log("Hello World");

  //use moment.js to display the current date to the webpage
  var current = moment().format("dddd, MMMM Do");
  // console.log(current);
  $("#currentDay").append(current);

  //create 9 rows with 3 columns each in the container
  //assign the rows with a class of .row
  //assign the first col-1 with a class of .hour
  //assign the second col-10 with a class of .description
  //assign the third button col-1 with a class of .saveBtn
  //add the font awesome icon class to the save buttons
  //create a text area within each .description class
  //with a textarea element assigned to it
  //create for loop to create 8 more rows
  var row = $(".row");
  for (var i = 0; i < 8; i++) {
    row.clone().insertAfter(row);
  }
  //add array - [9AM 10AM 11AM 12PM 1PM 2PM 3PM 4PM 5PM] use function
  // and for loop to apply array to class .hour
  var timeOfDay = [
    "9AM",
    "10AM",
    "11AM",
    "12AM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
  ];
  var hoursRows = document.getElementsByClassName("hour");
  var textRows = document.getElementsByClassName("textField0");

  // console.log(hoursRows);
  for (var i = 0; i < timeOfDay.length; i++) {
    //console.log(timeOfDay);
    hoursRows[i].innerHTML = timeOfDay[i];

    if(timeOfDay[i] == "12AM")
    hoursRows[i].innerHTML = "12PM";

    description = JSON.parse(localStorage.getItem(timeOfDay[i]));
    if (description) textRows[i].innerHTML = description;

    var presentTime = moment().format("LT");

    var newTime = presentTime.split(":")[0] + presentTime.split(" ")[1];

    var hourFormat = parseInt(presentTime.split(":")[0]);

    if (presentTime.split(" ")[1] == "PM") {
      // console.log(hourFormat);
      // console.log("ADDING TIME");
      hourFormat += 12;
      // console.log(hourFormat);
    }
    // console.log(newTime);

    // console.log(timeOfDay[i].split(":")[0]);
    //   console.log(hourFormat);

    var compareTime = timeOfDay[i];
    console.log(compareTime);
    if (compareTime.length == 3) compareTime = compareTime.substring(0, 1);
    else compareTime = compareTime.substring(0, 2);

    var numCompareTime = parseInt(compareTime);

    console.log(presentTime.split(" ")[1]);

    console.log("MY SLOPPY HACK" + " " + timeOfDay[i].substr(-2));
    if (timeOfDay[i].substr(-2) == "PM") {
      numCompareTime += 12;
    }

    console.log(numCompareTime);
    console.log(hourFormat);

    // console.log(presentTime);
    if (timeOfDay[i] == newTime) {
      console.log("IT'S TIME");
      textRows[i].setAttribute(
        "style",
        "background-color: #ff6961",
        "important"
      );
    } else if (numCompareTime < hourFormat) {
      textRows[i].setAttribute(
        "style",
        "background-color: #d3d3d3",
        "important"
      );
    } else {
      textRows[i].setAttribute(
        "style",
        "background-color: #77dd77",
        "important"
      );
    }
  }

  //create on click event so that when button is clicked,
  //anything written in the text area element will be saved to local storage

  $(".saveBtn").on("click", function() {
    //console.log("You clicked me!");

    var siblings = $(this).siblings();
    // console.log($(this));
    // console.log(siblings);
    var content = siblings[1].value;
    var hour = siblings[0].innerText;
    localStorage.setItem(hour, JSON.stringify(content));
  });

  //create a funtion and for loop using moment.js. Make conditionals to add .present class
  //to row with the present time - .future class to future time - .past class to past time
});
