// Declare companyName as a const
const companyName = "Scuber";

// Declare mostProfitableNeighborhood using let
let mostProfitableNeighborhood = "Chelsea";

// Declare companyCeo using let
let companyCeo = "Susan Smith";

// Function to calculate fare
function calculateFare(distance) {
  const baseFare = 150; // base fare
  const ratePerKm = 0.5; // rate per km

  // Calculate the total fare
  const totalFare = baseFare + (distance * ratePerKm);

  // Return the total fare
  return totalFare;
}

// Function to display the total fare
function displayTotalFare(distance) {
  const fare = calculateFare(distance);
  console.log(`The Fare For Your Trip Is: ${distance} km ride is $${fare}`);
}

// Example usage
displayTotalFare(10); // This will log the fare for a 10 km trip

module.exports = {
  companyName,
  mostProfitableNeighborhood,
  companyCeo,
  calculateFare,
  displayTotalFare
};
