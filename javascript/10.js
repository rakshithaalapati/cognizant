const events = [
  { title: "Charity Run", category: "Health", date: "2025-06-20", seats: 50 },
  { title: "Jazz Concert", category: "Music", date: "2025-07-01", seats: 20 },
  { title: "Food Festival", category: "Food", date: "2025-07-15", seats: 100 },
];

const displayEvents = (eventList = events) => {
  const container = document.getElementById("events");
  container.innerHTML = "";

  eventList.forEach(({ title, category, date, seats }) => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.marginBottom = "10px";
    div.style.padding = "10px";

    div.innerHTML = `
        <h3>${title}</h3>
        <p>Category: ${category}</p>
        <p>Date: ${date}</p>
        <p>Seats: ${seats}</p>
      `;

    container.appendChild(div);
  });
};

const filterEventsByCategory = (category = "All") => {
  const clonedEvents = [...events];
  return category === "All"
    ? clonedEvents
    : clonedEvents.filter((event) => event.category === category);
};

displayEvents();

const filtered = filterEventsByCategory("Music");
displayEvents(filtered);
