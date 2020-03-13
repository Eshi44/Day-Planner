//use the ready() method and test via console.log
$(document).ready(function() {
  // console.log("Hello World");

  //use moment.js to display the current date to the webpage
  var current = moment().format("dddd, MMMM Do");
  console.log(current);
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
  //add arry 9AM 10AM 11AM 12PM 1PM 2PM 3PM 4PM 5PM to class hour

  //create on click event so that when button is clicked,
  //anything written in the text area element will be saved to local storage
  
  //create a funtion and for loop using moment.js. Mae conditionals to add .present class
  //to row with the present time - .future class to future time - .past class to past time

 
});
