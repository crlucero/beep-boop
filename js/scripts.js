function numberToPhrase(n, customPhrase) {
  var string = n.toString();
  
  
  
  if (parseInt(string) === 0) {
    return 'beep';
  }
  
  if (parseInt(string) === 1) {
    return 'boop';
  }
  
}

console.log(numberToPhrase(10))




$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    $("#output").text(numberToPhrase(userInput));

  });
});


