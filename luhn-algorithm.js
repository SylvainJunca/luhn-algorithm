

function luhn(number) {
    let checkEven = 0;
    let sumEven = 0;
    let sumNotEven = 0;
    for (let i = (number.length - 1); i >= 0; i--) {
      if(checkEven % 2 != 0) {
        let provEven = Number(number[i]) * 2;
        if (provEven > 9) {
            provEven = provEven - 9;
        }
        sumEven += provEven;
      }
      else {
          sumNotEven += Number(number[i]);
      }
      checkEven++
    }
    return( (sumEven + sumNotEven) % 10 === 0);  
}

console.log(luhn('543215'));
console.log(luhn('543216'));
module.exports = {
    check: luhn
}
