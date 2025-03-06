// function to calculate fare
function calculateFare(distance) {
  const baseFare = 150; // base fare
  const rateperkm = 0.5; // rate per km

  // calculate the total fare
  const totalFare = baseFare + (distance * rateperkm);

// return the total fare
  return totalFare;
}
//function to display the total fare
function displayTotalFare(distance) {
  const fare = calculateFare(distance);
  console.log(`The Fare For Your Trip Is: ${distance} km ride is $${fare}`);
} 
