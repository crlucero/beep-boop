// This is my back-end, or business, logic. It
// tells the program what to do and how to do it.

var numberToPhrase = function(number){

  arrayNumbers = [];

  for (x = 0; x <= number; x++) {
    arrayNumbers.push(x.toString());
  }

  var transformedArray = arrayNumbers.map(function(character) {
    
    if (character.includes('0')){
      return "Beep!";
    } 
      
      
      else if (character.includes('1')){
      return "Boop!";
    } 
      
      
      else if (character % 3 === 0 && character != 0) {
      return "I'm sorry, human. I'm afraid I can't do that! Please try another input";
      }
    
    
    
    else {
      return character;
    }
    
    
});

return transformedArray
}

// This is the front end of the program, 
// and it is the aspect that allows the user
// to interact with the program.

$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userInput = $("#number").val();
    $("#output").text(numberToPhrase(userInput));

  });
});


