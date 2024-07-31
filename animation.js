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

        

$(document).on("pagecreate",function(event){
    $(window).on("orientationchange",function(){
      if(window.orientation == 0)
      {
        $("#green").text("The orientation has changed to portrait!").css({"background-color":"yellow","font-size":"300%"});
      }
      else
      {
        $("#green").text("The orientation has changed to landscape!").css({"background-color":"pink","font-size":"200%"});
      }
    });                   
  });