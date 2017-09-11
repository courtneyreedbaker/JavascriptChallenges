/* Is it Square */

var isSquare = function(n){
/* Checking for Negatives */
  if (n<0){
    return false;
  }
  
/* Changing squareroot to a string, then checking for decimals */
  var sqrtAnswer = Math.sqrt(n).toString();
  var hasDecimal = sqrtAnswer.indexOf('.');
  if (hasDecimal>=0){
    return false;
  }
  else {
    return true;
  }
}