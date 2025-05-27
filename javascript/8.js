const events = [
  { title: "Jazz Night", category: "Music", date: "2025-06-15", seats: 5 },
  { title: "Yoga Session", category: "Health", date: "2025-06-20", seats: 10 },
  { title: "Painting Workshop", category: "Art", date: "2025-06-25", seats: 3 },
  { title: "Rock Concert", category: "Music", date: "2025-07-01", seats: 0 },
];

let filteredEvents = [...events];

function renderEvents() {
  const container = document.getElementById("event-container");
  container.innerHTML = "";

  filteredEvents.forEach((event, index) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";

    card.innerHTML = `
        <h3>${event.title}</h3>
        <p>Category: ${event.category}</p>
        <p>Date: ${event.date}</p>
        <p>Seats: <span id="seats-${index}">${event.seats}</span></p>
      `;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        document.getElementById(`seats-${index}`).textContent = event.seats;
        alert(`Registered for ${event.title}`);
      } else {
        alert("No seats available.");
      }
    };

    card.appendChild(registerBtn);
    container.appendChild(card);
  });
}

function filterByCategory() {
  const category = document.getElementById("category-select").value;
  filteredEvents =
    category === "All"
      ? [...events]
      : events.filter((event) => event.category === category);
  renderEvents();
}

function searchOnKey(event) {
  if (event.key === "Enter") {
    const query = document.getElementById("search-box").value.toLowerCase();
    filteredEvents = events.filter((event) =>
      event.title.toLowerCase().includes(query)
    );
    renderEvents();
  }
}

renderEvents();
