// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
// var inputNumber = $("#inputNumber").val();
//
// var result = numerals(inputNumber);


function latinConveter(input){
  var inputNumber = parseInt(input);
  var romanNumberal = "";

  if (input < 4){
    for (var i = 0; i < input; i++) {
      romanNumberal += "I";
    }
  } else if (input === 4){
    romanNumberal = "IV";
  } else if (input === 5){
    romanNumberal = "v";
  } else if (input > 5 && input < 9){
    romanNumberal += "V";
    for (var i = 0; i < input-5; i++) {
      romanNumberal += "I";
    }
  } else if (input === 9){
    romanNumberal = "IX";
  } else if (input === 10){
    romanNumberal = "X";
  }
  return romanNumberal;
  console.log("whatever");
  }



// for (var i=0; i < inputNumber.length; i+2) {
//   $(inputNumber).replace('I')




// $(document).ready(function() {
//   $("#formOne").submit(function(event){
//   event.preventDefault();
//   var inputNumber = parseInt($("#inputNumber").val());
//   console.log(inputNumber);
//   //   for (var i=0; i < inputNumber.length; i++) {
//   if (inputNumber === 1) {
//     alert("I");
//   } else if (inputNumber === 5) {
//     alert("V");
//   }



  });
});
