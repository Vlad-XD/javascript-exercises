const sumAll = function(firstInt, secondInt) {
  // return error if non-number is passed
  if (typeof firstInt != "number" || typeof secondInt != "number") {
    return "ERROR";
  }

  // return error if non-integer is passed
  if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) {
    return "ERROR";
  }

  // return error if negative number is passed
  if (firstInt < 0 || secondInt < 0) {
    return "ERROR";
  }

  let finalSum = 0;
  
  // determine which argument to start summing loop with
  if (firstInt < secondInt) {
    for(let i = firstInt; i <= secondInt; i++) {
      finalSum += i;
    }
  } else {
    for(let i = secondInt; i <= firstInt; i++) {
      finalSum += i;
    }
  }

  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
