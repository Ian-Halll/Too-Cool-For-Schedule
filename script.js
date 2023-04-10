// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var save = document.getElementsByClassName("btn saveBtn col-2 col-md-1")
var input = document.getElementsByTagName("textarea")
var currentday = document.getElementById("currentDay");
var timeblocks = document.querySelectorAll('#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17');
var hourvalue = 9
var now = dayjs().format("dddd, MMMM D ");
var hour = dayjs().hour()
var compare = null


$(document).ready(function(){
  currentday.textContent = now;
 
  for (var i = 0; i < timeblocks.length; i++){
    var savedinput = JSON.parse(localStorage.getItem("inputresponse"));
    if (savedinput && savedinput[i]){
    input[i].value = savedinput[i]}
    
   
    
    save[i].addEventListener("click", function(){
      var entered = [];
      for (var j=0; j < input.length; j++){
       
        var timeblocktext = input[j].value
        entered[j] = timeblocktext }

      localStorage.setItem("inputresponse", JSON.stringify(entered));
     });
    compare = hourvalue+i 
    
    if (compare < hour){
  timeblocks[i].className="row time-block past"
  }else{
    if (compare > hour){
      timeblocks[i].className="row time-block future"
    }else{
      if (compare = hour)
      timeblocks[i].className="row time-block present"
    }; 
  }}


  });

  



