const form = document.getElementById("registration-form");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  messageDiv.textContent = "Submitting...";
  messageDiv.className = "";

  const formData = {
    name: form.elements.name.value.trim(),
    email: form.elements.email.value.trim(),
    event: form.elements.event.value,
  };

  fakeFetch("https://mockapi.example.com/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.status === 200) {
        messageDiv.textContent = "Registration successful!";
        messageDiv.className = "success";
        form.reset();
      } else {
        throw new Error("Server error");
      }
    })
    .catch(() => {
      messageDiv.textContent = "Registration failed. Please try again.";
      messageDiv.className = "error";
    });
});

function fakeFetch(url, options) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve({ status: 200 });
      } else {
        reject(new Error("Network error"));
      }
    }, 2000);
  });
}
