// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
  }

function fuzzyMatch(drivers, letters){
  let name = letters.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, name) === letters;
  });
  }

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
