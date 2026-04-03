const driverName = "Jessie";
const truckPlate = "NHD3261";
let fuelPrice = 120;
let isAvailable = "Available";

console.log(`Driver ${driverName} with truck ${truckPlate} is ${isAvailable}`);

let budget = 8000;
let fuelCost = 9500;

if (fuelCost > budget) {
  console.log("Over budget");
} else {
  console.log("Within budget");
}
