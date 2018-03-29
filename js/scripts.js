function latinConveter(input){
  var inputNumber = parseInt(input);
  var romanNumeral = "";

// counts 1, 2, 3 returns i, ii, iii
  if (input < 4){
    for (var i = 0; i < input; i++) {
      romanNumeral += "I";
    }
    // counts number 4 returns IV
  } else if (input === 4){
    romanNumeral = "IV";
    // counts number 5, returns V
  } else if (input === 5){
    romanNumeral = "V";
    // counts 6, 7, 8 returns VI, VII, VIII
  } else if (input > 5 && input < 9){
    romanNumeral += "V";
    for (var i = 0; i < input-5; i++) {
      romanNumeral += "I";
    }
    // counts number 9, returns IX
  } else if (input === 9){
    romanNumeral = "IX";
    // counts number 10, returns X
  } else if (input === 10){
    romanNumeral = "X";
  }
  //   follow earlier rules and add x to the front
  else if (input > 10 && input < 14) {
    romanNumeral += "X";
    for (var i = 0; i < input-10; i++){
      romanNumeral += "I";
    }
    } else if (input === 14) {
      romanNumeral = "XIV";
    } else if (input === 15){
      romanNumeral = "XV";
      // counts 6, 7, 8 returns VI, VII, VIII
    } else if (input > 15 && input < 19){
      romanNumeral += "XV";
      for (var i = 0; i < input-15; i++) {
        romanNumeral += "I";
      }
      } else if (input === 19){
        romanNumeral = "IXX";
      } else if (input === 20) {
        romanNumeral = "XX";
      } else if (input > 20 && input < 24) {
      romanNumeral += "XX";
      for (var i = 0; i < input-20; i++){
        romanNumeral += "I";
      }
    } else if (input === 24) {
        romanNumeral = "XXIV";
      } else if (input === 25){
        romanNumeral = "XXV";
        // counts 6, 7, 8 returns VI, VII, VIII
      } else if (input > 25 && input < 29){
        romanNumeral += "XXV";
        for (var i = 0; i < input-25; i++) {
          romanNumeral += "I";
        }
      } else if (input === 29){
          romanNumeral = "IXXX";
        } else if (input === 30) {
          romanNumeral = "XXX";
        }
  return romanNumeral;
  }


$(document).ready(function() {
  $("#formOne").submit(function(event){
  event.preventDefault();

  var userInputtedNumber = parseInt($("#inputNumber").val());
  console.log(userInputtedNumber);

  var result = latinConveter(userInputtedNumber);
  console.log(result);

  });
});
