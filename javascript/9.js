const spinner = document.getElementById("spinner");
const container = document.getElementById("event-container");

async function loadEvents() {
  spinner.style.display = "block";
  try {
    const response = await fetch("mock-events.json");
    if (!response.ok) throw new Error("Fetch failed");
    const data = await response.json();
    renderEvents(data);
  } catch (error) {
    spinner.textContent = "Error loading events.";
    console.error(error);
  } finally {
    spinner.style.display = "none";
  }
}

function renderEvents(events) {
  container.innerHTML = "";
  events.forEach((event) => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.marginBottom = "10px";
    div.innerHTML = `
      <h3>${event.title}</h3>
      <p>Category: ${event.category}</p>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats}</p>
    `;
    container.appendChild(div);
  });
}

loadEvents();
