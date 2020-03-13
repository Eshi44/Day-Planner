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
  //assign the third col-1 with a class of .save
  //create a text area within each .description class
  //with a textarea element assigned to it
  //create for loop to create 8 more rows
  var row = $(".row");
  for (var i = 0; i < 8; i++) {
    row.clone().insertAfter(row);
  }
  //create 9 bttns- one in each .savebtn class using a for loop
  //create on click event so that when button is clicked,
  //anything written in the text area element will be saved to local storage
  //add the font awesome icon to the save buttons
  //create a funtion and for loop using moment.js to add .present class
  //to row with the present time - .future class to future time - .past class to past time

 
});
