var numberToPhrase = function(n, customPhrase) {
  var string = n.toString();
  var inputNumber = [];
  
  
  if ("0".includes(string[0]) && string.length >= 0) {
    return '"Beep!"';
    }
       if ("0".includes(string[0])) {
      for (x = 0; x < string.length; x++) {
        var notFirstZero = x 
      return '"Beep!"';
  }
}

   if ("1".includes(string[0]) && string.length >= 1) {
    return '"Boop!"';
   }
  
    else if (!"1".includes(string[0])) {
      for (x = 0; x < string.length; x++) {
        var notFirstOne = x 
      return '"Boop!"';
  }
}
console.log(numberToPhrase()) 
  
}


$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    $("#output").text(numberToPhrase(userInput));

  });
});


