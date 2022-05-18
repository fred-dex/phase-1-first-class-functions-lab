// Code your solution in this file!
// const returnFirstTwoDrivers = function (drivers) {
//   return drivers.slice(0, 2);
// }

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2); 

// const returnLastTwoDrivers = function (drivers) {
//   return drivers.slice(-2);
// }

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// Make sure to name properly for others
const createFareMultiplier = function (multiplyValue)
  {
  return function (value) {
    return multiplyValue * value;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function (drivers, returnDrivers) {
//   return returnDrivers(drivers)
// }

const selectDifferentDrivers = function (drivers, returnDrivers) {
  return returnDrivers (drivers)
}
