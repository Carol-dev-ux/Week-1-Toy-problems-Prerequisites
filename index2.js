// Variable to store demerit points
let demeritPoints;

// Constant representing the speed limit
const speedLimit = 70;

// Function to determine consequences based on speed
function speedDetective(speed) {
  if (speed < 0 || isNaN(speed)) {
    return "enter a valid speed";
  } else {
    if (speed >= 0  && speed < 70) {
      return "Ok";
    } else if ( speed >= 70 && speed < 130) {
      demeritPoints = Math.ceil((speed - speedLimit) / 5);
      return demeritPoints;
    } else {
      return "Liscence suspended";
    }
  }
}
// Example
let resultingConsequence = speedDetective(130);
console.log(resultingConsequence);