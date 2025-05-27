const events = [
  {
    name: "Community Clean-Up Drive",
    date: "2025-06-15",
    seats: 10,
  },
  {
    name: "Tree Plantation",
    date: "2024-12-01",
    seats: 5,
  },
  {
    name: "Food Donation Camp",
    date: "2025-07-10",
    seats: 0,
  },
  {
    name: "Health Awareness Walk",
    date: "2025-06-25",
    seats: 15,
  },
];

function isEventValid(event) {
  const today = new Date().toISOString().split("T")[0];
  return event.date > today && event.seats > 0;
}

function displayEvents() {
  const eventList = document.getElementById("event-list");
  eventList.innerHTML = "";

  events.forEach((event, index) => {
    if (isEventValid(event)) {
      const eventDiv = document.createElement("div");
      eventDiv.innerHTML = `
          <h3>${event.name}</h3>
          <p>Date: ${event.date}</p>
          <p>Seats Available: <span id="seats-${index}">${event.seats}</span></p>
          <button onclick="register(${index})">Register</button>
          <hr>
        `;
      eventList.appendChild(eventDiv);
    }
  });
}

function register(index) {
  try {
    if (events[index].seats > 0) {
      events[index].seats--;
      document.getElementById(`seats-${index}`).textContent =
        events[index].seats;
      alert(`You are registered for ${events[index].name}`);
    } else {
      throw new Error("No seats available.");
    }
  } catch (error) {
    console.error("Registration error:", error.message);
    alert("Registration failed: " + error.message);
  }
}

displayEvents();
