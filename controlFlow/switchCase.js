/**
 * revenewModel function
 *
 * This function will calculate the revenue based on the percentage passed and the value
 * If the percentage is 10, it will subtract 10% of the value from the value
 * If the percentage is 20, it will subtract 20% of the value from the value
 * If the percentage is 30, it will subtract 30% of the value from the value
 * If the percentage is not valid, it will return the value as it is
 */
function refundModel(percentage, value) {
  switch (percentage) {
    case 10:
      return value - (value * 10) / 100;

    case 20:
      return value - (value * 20) / 100;

    case 30:
      return value - (value * 30) / 100;

    default:
      return value;
  }
}
const percentage = [10, 20, 30]; // refund percentage
const value = [10000, 20000, 30000]; // refund value
//
console.log(refundModel(percentage[0], value[0]));
console.log(refundModel(percentage[1], value[1]));
console.log(refundModel(percentage[2], value[2]));