var numberToPhrase = function(n, customPhrase) {
  var string = n.toString();
  var inputNumber = [];
  
  
  if (parseInt(string) === 0) {
    return '"Beep!"';
  }

   if("1".includes(string[0]) && string.length == 1) {
    return '"Boop!"';
  }
  
  if(!"1".includes(string[0])) {
    for (x = 0; x < string.length; x++) {
      var notFirstNumber = x 
    return '"Boop!"';
  }
}
  
  
}

console.log(numberToPhrase(21))


$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    $("#output").text(numberToPhrase(userInput));

  });
});


