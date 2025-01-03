const leapYears = function(year) {
  // leap years are divisible by four
  // leap years divisibly by 100 are only leap years if also divisible by 400
  return ((year % 4 === 0) && !((year % 100 === 0) && (year % 400 != 0)));
};

// Do not edit below this line
module.exports = leapYears;
