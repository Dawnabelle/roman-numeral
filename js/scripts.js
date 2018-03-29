// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
// var inputNumber = $("#inputNumber").val();
// var romanNumber = parseInt(inputNumber);
// var result = numerals(inputNumber);

$(document).ready(function() {
  $("#formOne").submit(function(event){
  event.preventDefault();
  var inputNumber = parseInt($("#inputNumber").val());
  console.log(inputNumber);
  //   for (var i=0; i < inputNumber.length; i++) {
  if (inputNumber === 1) {
    alert("I");
  } else if (inputNumber === 5) {
    alert("V");
  }



  });
});
