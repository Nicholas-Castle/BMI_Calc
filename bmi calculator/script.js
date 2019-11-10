/*BMI = weight/height Squared * 703
 if bmi is below 18.5 under weight
 if bmi is 18.5 - 24.9 normal
 if bmi is 25.0 - 29.9 overweight
 if bmi is 30 and up very overweight

 make two text fields and a calculate button when pressed it does the BMi calculation
 then provides the persons bmi also display a brief discription of about health risks to the corresponding Bmi.
 Have fun dont quit.
 */

function calculateBmi(weight, feet, inches) {
let height = (feet * 12) + inches;
  let totalBmi =  weight/Math.pow(height, 2) * 703;
  let bmi =  totalBmi.toFixed(1);
if(bmi <= 18.5) {
  console.log(`Under weight`);
}
else if (bmi > 18.5 && bmi <= 24.9) {
  console.log(`normal`);
}
else if (bmi > 25.0 && bmi <= 29.9 ) {
  console.log(`overwieght`);
}
else {
  console.log(`overweight`);
}
  console.log(bmi);
}


calculateBmi(100, 5, 2);
