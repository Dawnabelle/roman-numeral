function latinConveter(input){
  var inputNumber = parseInt(input);
  var romanNumberal = "";

// counts 1, 2, 3 returns i, ii, iii
  if (input < 4){
    for (var i = 0; i < input; i++) {
      romanNumberal += "I";
    }
    // counts number 4 returns IV
  } else if (input === 4){
    romanNumberal = "IV";
    // counts number 5, returns V
  } else if (input === 5){
    romanNumberal = "V";
    // counts 6, 7, 8 returns VI, VII, VIII
  } else if (input > 5 && input < 9){
    romanNumberal += "V";
    for (var i = 0; i < input-5; i++) {
      romanNumberal += "I";
    }
    // counts number 9, returns IX
  } else if (input === 9){
    romanNumberal = "IX";
    // counts number 10, returns X
  } else if (input === 10){
    romanNumberal = "X";
  }
  return romanNumberal;
  console.log("whatever");
  }


// $(document).ready(function() {
//   $("#formOne").submit(function(event){
//   event.preventDefault();

  });
});
