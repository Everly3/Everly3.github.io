$(document).ready(function() {
    $('#changeStyleButton').click(function() {
        // toggle dark mode
        $('body').toggleClass('dark-mode');
    });
});

let result = document.getElementById("GFG");
 
        function changeColor(color) {
            document.body.style.background = color;
        }
 
        function myFunc() {
            changeColor('purple');
            result.innerHTML = "Background Color changed";
        }   
        
        function myFunc2() {
            changeColor('rgb(254, 198, 224)');
            result.innerHTML = "Background Color changed";
        } 

        

// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}