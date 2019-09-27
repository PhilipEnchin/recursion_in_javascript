// Given two integers -- a base and an exponent -- write a
// recursive function that computes the exponent math and
// returns the result.

// Exponent math is performed by multiplying the base by itself
// x number of times, where x is the exponent given.

// Examples:

// power(2, 2) => 4
// power(2, 4) => 16
// power(5, 2) => 25
// power(10, 3) => 1000

var power = function(base, exponent) {
  if (exponent === 0) {return 1;}
  else if (exponent < 0) {return 1 / power(base, -exponent);}
  else if (exponent % 2 === 0) {
    const sqrt = power(base, exponent / 2);
    return sqrt * sqrt;
  } else {
    return base * power(base, exponent - 1);
  }
};