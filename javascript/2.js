const eventName = "Community Clean-Up Drive";
const eventDate = "2025-06-15";
let availableSeats = 50;

function updateEventDetails() {
  const details = `Event: ${eventName}<br>Date: ${eventDate}<br>Seats Available: ${availableSeats}`;
  document.getElementById("event-details").innerHTML = details;
}

function registerParticipant() {
  if (availableSeats > 0) {
    availableSeats--;
    console.log("Participant registered.");
  } else {
    alert("Sorry, no seats available!");
  }
  updateEventDetails();
}

function cancelRegistration() {
  availableSeats++;
  console.log("Participant canceled.");
  updateEventDetails();
}

updateEventDetails();
window.onload = function () {
  alert("Page is fully loaded!");
  console.log("Welcome to the Community Portal");
};
