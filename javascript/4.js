let events = [];

function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

function registerUser(eventIndex) {
  if (events[eventIndex].seats > 0) {
    events[eventIndex].seats--;
    totalCategoryRegister(events[eventIndex].category)();
    displayEvents(events);
    alert(`Registered for ${events[eventIndex].name}`);
  } else {
    alert("No seats available.");
  }
}

function filterEventsByCategory(category) {
  return events.filter(
    (event) => event.category.toLowerCase() === category.toLowerCase()
  );
}

const registrationCounters = {};
function totalCategoryRegister(category) {
  if (!registrationCounters[category]) {
    let count = 0;
    registrationCounters[category] = function () {
      count++;
      console.log(`Total registrations for ${category}: ${count}`);
    };
  }
  return registrationCounters[category];
}

function displayEvents(filteredEvents) {
  const eventList = document.getElementById("event-list");
  eventList.innerHTML = "";
  filteredEvents.forEach((event, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats}</p>
      <p>Category: ${event.category}</p>
      <button onclick="registerUser(${events.indexOf(event)})">Register</button>
      <hr>
    `;
    eventList.appendChild(div);
  });
}

function searchEvents() {
  const searchValue = document.getElementById("search-input").value;
  const filtered = events.filter((event) =>
    event.category.toLowerCase().includes(searchValue.toLowerCase())
  );
  displayEvents(filtered);
}

addEvent("Clean-Up Drive", "2025-06-15", 10, "Environment");
addEvent("Tree Plantation", "2025-07-10", 5, "Environment");
addEvent("Food Donation", "2025-06-20", 8, "Social");
addEvent("Yoga Workshop", "2025-06-30", 12, "Health");

displayEvents(events);
