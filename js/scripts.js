var numberToPhrase = function(n) {
  var string = n.toString();
  var n = [''];


  var dividedByThree = function(inputNumber) {
    divisibleArray = []

   for (x = inputNumber; x > 0; x = Math.floor(x % 3 === 0)) {
     return (dividedByThree ('"I am sorry, Dave. I am afraid I cannot do that."'));
    }
  
}
  
  if ("0".includes(string[0]) && string.length >=1 ) {
    return '"Beep!"';
    }
    else if ("0".includes(string[0])) {
      for (x = 1; x < string.length; x++) { 
        return '"Beep!"';
  }
}

   if ("1".includes(string[0]) && string.length >= 1) {
    return '"Boop!"';
   }
  
    else if (!"1".includes(string[0])) {
      for (x = 0; x < string.length; x++) {
        return '"Boop!"';
  }
}

  
};


$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    $("#output").text(numberToPhrase(userInput));

  });
});


