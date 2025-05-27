const events = [
  { title: "Book Reading", date: "2025-06-10", seats: 5 },
  { title: "Music Jam", date: "2025-06-15", seats: 2 },
  { title: "Cooking Contest", date: "2025-07-01", seats: 0 },
];

function renderEvents() {
  const container = document.querySelector("#event-container");
  container.innerHTML = "";

  events.forEach((event, index) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";

    const title = document.createElement("h3");
    title.textContent = event.title;

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;

    const seats = document.createElement("p");
    seats.innerHTML = `Seats: <span id="seats-${index}">${event.seats}</span>`;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.onclick = () => {
      if (events[index].seats > 0) {
        events[index].seats--;
        updateSeats(index);
      } else {
        alert("No seats available.");
      }
    };

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.style.marginLeft = "10px";
    cancelBtn.onclick = () => {
      events[index].seats++;
      updateSeats(index);
    };

    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(seats);
    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);

    container.appendChild(card);
  });
}

function updateSeats(index) {
  const seatSpan = document.querySelector(`#seats-${index}`);
  seatSpan.textContent = events[index].seats;
}

renderEvents();
