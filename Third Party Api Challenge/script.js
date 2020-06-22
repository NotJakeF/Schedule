
$("#date").html(moment().format("LL"));

function saveEvent(time){
  var appt = document.getElementById(time).value;
  localStorage.setItem(time, appt);
}

var times = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"];

for (var i = 0; i < times.length; i++){
  document.getElementById(times[i]).value = localStorage.getItem(times[i]);
}

var hour = new Date();
var now = moment();
for (var j = 0; j < 9; j++){
  hour.setHours(j+9,0,0,0);
  var rowId = times[j] + "-row";
  var row = document.getElementById(rowId);
  var timeDifference = now.diff(hour, "hours");
  if (timeDifference == 0){
    //change background color to red
    row.classList.add("present")
  }
  else if (timeDifference > 0){
    //hour is in the past
    //change background color to grey
    row.classList.add("past")
    
  }
  else {
    //hour is in the future
    //change background color to green
    row.classList.add("future")
  }
}
// function renderTime(){
//     var convertedDate = moment().format("MMM Do YYYY"); 
//           console.log(convertedDate);
//           console.log('----------------------------------------');
// let output = document.querySelector('h3');
// let currentDate = renderTime;
// $(document).ready(function()){
// var now = moment();
// $("#now").text(now.format("ll"));
// )};
// moment().toString('ll')
// below is js and below below is jquery but both do the smae thing in rendering on the DOM
// document.getElementById("date").innerHTML = moment().format('LL');  
// $('#date').html(moment().format('LL'));