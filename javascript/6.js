const events = [];

events.push(
  { title: "Rock Concert", type: "Music", date: "2025-06-10" },
  { title: "Art Expo", type: "Art", date: "2025-06-15" },
  { title: "Jazz Night", type: "Music", date: "2025-07-01" },
  { title: "Workshop on Baking", type: "Food", date: "2025-06-20" },
  { title: "Classical Evening", type: "Music", date: "2025-07-05" }
);

const musicEvents = events.filter((event) => event.type === "Music");

const formattedCards = musicEvents.map((event) => {
  return `
    <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
      <h3>${event.title}</h3>
      <p>Type: ${event.type}</p>
      <p>Date: ${event.date}</p>
    </div>
  `;
});

document.getElementById("music-events").innerHTML = formattedCards.join("");
