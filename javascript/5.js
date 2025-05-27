class Event {
  constructor(name, date, seats, category) {
    this.name = name;
    this.date = date;
    this.seats = seats;
    this.category = category;
  }
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Available" : "Full";
};

const event1 = new Event("Blood Donation Camp", "2025-06-20", 10, "Health");
const event2 = new Event("Plastic-Free Drive", "2025-06-25", 0, "Environment");
const event3 = new Event("Art Workshop", "2025-07-01", 5, "Culture");

const allEvents = [event1, event2, event3];

function displayEventDetails() {
  const container = document.getElementById("event-details");
  container.innerHTML = "";

  allEvents.forEach((event) => {
    const availability = event.checkAvailability();
    const entries = Object.entries(event)
      .map(([key, value]) => `<li><strong>${key}</strong>: ${value}</li>`)
      .join("");

    const div = document.createElement("div");
    div.innerHTML = `
        <ul>${entries}</ul>
        <p><strong>Status:</strong> ${availability}</p>
        <hr>
      `;
    container.appendChild(div);
  });
}

displayEventDetails();
