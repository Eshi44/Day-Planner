//use the ready() method and test via console.log
$(document).ready(function() {
  // console.log("Hello World");

  //use moment.js to display the current date to the webpage
  var current = moment().format("dddd, MMMM Do");
  console.log(current);
  $("#currentDay").append(current);
});
